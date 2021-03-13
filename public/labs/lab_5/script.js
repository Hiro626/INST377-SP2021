function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([51.508, -76.9378], 13);
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiaGlybzZib3giLCJhIjoiY2ttNnM5ODhlMDIwMjJ3cXlnc2J5MXdxcSJ9.qUeh6rV6matcd_kgAx-LIA'
    }).addTo(mymap);
    return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const formElem = document.querySelector('#formElem');
  const search = document.querySelector('#input')
  const suggestions = document.querySelector('suggestions');
  const replyMessage = document.querySelector('reply-message')
  const request = await fetch('/api');
  const data = await request.json();


  
  function displayMatches(event, zipcodes) {
    function findMatches(wordToMatch, restaurants) {
      return restaurants.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.zip.match(regex)
      });
    }
    
    const matchArray = findMatches(event.target.value, zipcodes);



    
    topFive.forEach((item)) => {
      const longLat = item.geocoded_column_1.coordinates;
      const marker = L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);
      
      const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const city = place.city;
        const Zip = place.zip;
        const address1 = place.address_line_1;
        const address2 = place.address_line_2;
        return ` 
        <div class = "box is-small">
        <li>
        <div class="name">${restaurantName}</div>
        <address class="address">${addressLine1}, ${addressLine2}</address>
        <address class="address">${cityName}, ${zipCode}</address>
        </li>
        </div>
        `;
      }).join('');
      suggestions.innerHTML = html;
    });
  }
    
    formElem.addEventListener('submit', async (event) => {
      event.preventDefault();
      const filtered = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
      const topFive = filtered.slice(0,5);
  
      if (topFive.length < 1) {
        replyMessage.classList.add('box')
        replyMessage.innerText = "No matches"
      }
      displayMatches(event, topFive)
  });

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;