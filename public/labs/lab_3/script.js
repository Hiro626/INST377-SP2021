/* Put your javascript in here */
let i = 1;

const imageArray = ["onigiri_1", "onigiri_2", "onigiri_3", "onigiri_4",
    "roll_1", "roll_2", "roll_3"];

let li = imageArray.forEach() 
    
carousel.querySelectorAll('li') {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 130; 
let count = 3; 
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let position = 0; 

carousel.querySelector('.prev').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};



