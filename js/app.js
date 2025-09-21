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

// available items slider 
const slideLeft = document.querySelector('.items-left');
const slideRight = document.querySelector('.items-right');
const menuBox = document.querySelectorAll('.available-items-img');
const sliderBox = document.querySelector('.available-slider-img');

let count = 0;
slideRight.addEventListener(
    'click',
    () => {
        menuBox.forEach(
            (img, imgIndex) => {
                if (imgIndex == 3) return;
                if (imgIndex == count) {
                    imgIndex++;
                    sliderBox.innerHTML = menuBox[imgIndex].innerHTML;
                    console.log(imgIndex);
                }
            })
        count++;
    }
)

// left slide
slideLeft.addEventListener(
    'click',
    () => {
        menuBox.forEach(
            (img, imgIndex) => {
                if (imgIndex == 0) return;
                if (imgIndex == count) {
                    imgIndex--;
                    sliderBox.innerHTML = menuBox[imgIndex].innerHTML;
                    console.log(imgIndex);
                }
            })
        count--;
    }
)