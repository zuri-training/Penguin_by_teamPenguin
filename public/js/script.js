// getting each category and respective brand
let category1 = document.getElementById('category-1')
let brand1 = document.getElementById('brand-1')
let category2 = document.getElementById('category-2')
let brand2 = document.getElementById('brand-2')
let category3 = document.getElementById('category-3')
let brand3 = document.getElementById('brand-3')
let category4 = document.getElementById('category-4')
let brand4 = document.getElementById('brand-4')
let category5 = document.getElementById('category-5')
let brand5 = document.getElementById('brand-5')
let category6 = document.getElementById('category-6')
let brand6 = document.getElementById('brand-6')
let category7 = document.getElementById('category-7')
let brand7 = document.getElementById('brand-7')
let category8 = document.getElementById('category-8')
let brand8 = document.getElementById('brand-8')
let category9 = document.getElementById('category-9')
let brand9 = document.getElementById('brand-9')
let category10 = document.getElementById('category-10')
let brand10 = document.getElementById('brand-10')



function showNavOne() {
    brand1.style.display = 'flex';
    category1.style.height = '32vh'
}
function hideNavOne() {
    brand1.style.display = 'none';
    category1.style.height = '22vh'
}

function showNavTwo() {
    brand2.style.display = 'flex';
    category2.style.height = '33vh'
}
function hideNavTwo() {
    brand2.style.display = 'none';
    category2.style.height = '22vh'
}

function showNavThree() {
    brand3.style.display = 'flex';
    category3.style.height = '33vh'
}
function hideNavThree() {
    brand3.style.display = 'none';
    category3.style.height = '22vh'
}

function showNavFour() {
    brand4.style.display = 'flex';
    category4.style.height = '37vh'
}
function hideNavFour() {
    brand4.style.display = 'none';
    category4.style.height = '22vh'
}

function showNavFive() {
    brand5.style.display = 'flex';
    category5.style.height = '36vh'
}
function hideNavFive() {
    brand5.style.display = 'none';
    category5.style.height = '22vh'
}

function showNavSix() {
    brand6.style.display = 'flex';
    category6.style.height = '33vh'
}
function hideNavSix() {
    brand6.style.display = 'none';
    category6.style.height = '22vh'
}

function showNavSeven() {
    brand7.style.display = 'flex';
    category7.style.height = '29vh'
}
function hideNavSeven() {
    brand7.style.display = 'none';
    category7.style.height = '22vh'
}

function showNavEight() {
    brand8.style.display = 'flex';
    category8.style.height = '35vh'
}
function hideNavEight() {
    brand8.style.display = 'none';
    category8.style.height = '22vh'
}

function showNavNine() {
    brand9.style.display = 'flex';
    category9.style.height = '35vh'
}
function hideNavNine() {
    brand9.style.display = 'none';
    category9.style.height = '22vh'
}

function showNavTen() {
    brand10.style.display = 'flex';
    category10.style.height = '30vh'
}
function hideNavTen() {
    brand10.style.display = 'none';
    category10.style.height = '22vh'
}



category1.addEventListener('mouseover', showNavOne)
category1.addEventListener('mouseout', hideNavOne)

category2.addEventListener('mouseover', showNavTwo)
category2.addEventListener('mouseout', hideNavTwo)

category3.addEventListener('mouseover', showNavThree)
category3.addEventListener('mouseout', hideNavThree)

category4.addEventListener('mouseover', showNavFour)
category4.addEventListener('mouseout', hideNavFour)

category5.addEventListener('mouseover', showNavFive)
category5.addEventListener('mouseout', hideNavFive)

category6.addEventListener('mouseover', showNavSix)
category6.addEventListener('mouseout', hideNavSix)

category7.addEventListener('mouseover', showNavSeven)
category7.addEventListener('mouseout', hideNavSeven)

category8.addEventListener('mouseover', showNavEight)
category8.addEventListener('mouseout', hideNavEight)

category9.addEventListener('mouseover', showNavNine)
category9.addEventListener('mouseout', hideNavNine)

category10.addEventListener('mouseover', showNavTen)
category10.addEventListener('mouseout', hideNavTen)




// burger menu 
let menu = document.getElementById('menu');
// each nav menu
let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');


// switch the display of the menu 
menu.addEventListener('click', ()=>{
    nav1.classList.toggle('display');
    nav2.classList.toggle('display');
    function switchImage() {
        if (menu.src.indexOf('menu.svg')!=-1) {
          menu.src = "/public/images/category-page/icons8-close.svg";
          menu.classList.add('margin-left')
        } else {
          menu.src = "/public/images/category-page/menu.svg";
          menu.classList.remove('margin-left')
        }
      }
    menu.addEventListener('click', switchImage())
});
