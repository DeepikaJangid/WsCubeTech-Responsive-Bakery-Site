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
                if (imgIndex == 3) {
                    slideRight.disabled = true;
                    slideLeft.disabled = false;
                }

                if (imgIndex == count) {
                    imgIndex++;
                    sliderBox.innerHTML = menuBox[imgIndex].innerHTML;
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
                if (imgIndex == 0) {
                    slideLeft.disabled = true;
                    slideRight.disabled = false;
                }
                if (imgIndex == count) {
                    imgIndex--;
                    sliderBox.innerHTML = menuBox[imgIndex].innerHTML;
                }
            })
        count--;
    }
)

// video play on click 

const playBtn = document.querySelector('#playBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const videoBox = document.querySelector('#videoBox');

playBtn.addEventListener(
    'click',
    () => {
        videoBox.play();
        playBtn.style.opacity = '0';
        playBtn.style.visibility = 'hidden';
    }
)

videoBox.addEventListener(
    'click',
    () => {
        if (videoBox.paused) {
            videoBox.play();
            setTimeout(
                () => {
                    playBtn.style.opacity = '0';
                    playBtn.style.visibility = 'hidden';
                    pauseBtn.style.opacity = '0';
                    pauseBtn.style.visibility = 'hidden';
                },
                200
            )
        }

        else {
            videoBox.pause();
            setTimeout(
                () => {
                    pauseBtn.style.opacity = '1';
                    pauseBtn.style.visibility = 'visible';
                },
                200
            )
        }
    }
)

pauseBtn.addEventListener(
    'click',
    () => {
        videoBox.play()
        pauseBtn.style.opacity = '0';
        pauseBtn.style.visibility = 'hidden';
    }
)

// review section
// should be a node list for foreach to work... it will not work on htmlcollection

// slick slider

$('.reviews').slick({
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
