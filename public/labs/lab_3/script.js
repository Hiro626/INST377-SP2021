/* Put your javascript in here */
let width = 130; 
let count = 3; 
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0; 

carousel.querySelector('.prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

function implement() {
    const x = [];
    const y = [document.querySelector('.image')];
    images.forEach((element) => {
        const z = element.querySelector('li');
        console.log(element);
        x.append(z);
    })
    console.log(x);
}

implement()
