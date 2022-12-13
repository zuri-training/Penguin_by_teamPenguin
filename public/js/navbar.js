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
