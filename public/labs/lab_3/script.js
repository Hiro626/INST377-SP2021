/* Put your javascript in here */
const imageArray = ["onigiri_1", "onigiri_2", "onigiri_3", "onigiri_4",
    "roll_1", "roll_2", "roll_3"];


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



