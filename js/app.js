const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener(
    'click',
    () => {
        menu.style.left = '0px';
        closeMenu.style.opacity = '1';
        closeMenu.style.visibility = 'visible';
        hamburger.style.opacity = '0';
        hamburger.style.visibility = 'hidden';
        closeMenu.style.transform = 'rotate(90deg)';

        document.body.classList.add('body-class');
    }
)


// close menu
const closeMenu = document.querySelector('#close-menu');
closeMenu.addEventListener(
    'click',
    () => {
        menu.style.left = '';
        closeMenu.style.opacity = '0';
        closeMenu.style.visibility = 'hidden';
        hamburger.style.opacity = '1';
        hamburger.style.visibility = 'visible';
        closeMenu.style.transform = 'rotate(0deg)';

        document.body.classList.remove('body-class');
    }
)