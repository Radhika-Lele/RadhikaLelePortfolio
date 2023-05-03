
// HAMBURGER MENU
const navItems = document.querySelector('.navigation');

const closeButton = document.querySelector('.fa-solid');  //closeMenu()
const hamMenu = document.querySelector('.fa-bars')       // openMenu()

closeButton.addEventListener('click', function(){
    navItems.style.right = '-200px';
});

hamMenu.addEventListener('click', function(){
    navItems.style.right = '0';
});