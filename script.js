
// ON CLICK ON HAM OPTION X MARK WILL SHOW AND VICE VERSA

const mobileNav = document.querySelector('.mobile-nav');

mobileNav.addEventListener('click' , () => {

    const ham = document.querySelector('.ham')

    ham.classList.toggle('hidden');

    const cross = document.querySelector('.cross');

    cross.classList.toggle('hidden');

    const navOpt =  document.querySelector('.nav-options');

    navOpt.classList.toggle('translate-x-full');
})


//  IMAGE SLIDING

const slider = document.querySelectorAll('.p2-main img');


// console.log(slider);

slider.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
})

let counter = 0;

const leftBtn = document.querySelector('.left-btn');

console.log(leftBtn);

leftBtn.addEventListener('click', () => {
    if(counter > (-8)) {
        counter--;
    }
    sliderWork(counter);
})

document.querySelector('.right-btn').addEventListener('click', () => {
   if(counter < 8) {
    counter++
}
   sliderWork(counter);
})

function sliderWork(i) {
    slider.forEach((img) => {
        img.style.transform = `translateX(-${i * 100}%)`;
    })
}

//  HIDING NAV BAR ON SCROLLING

const navBar = document.querySelector('.header');

window.addEventListener('wheel', (e) => {
    if(e.deltaY > 0) {
        navBar.classList.remove('flex');
        navBar.classList.add('hidden');
    } else if(e.deltaY < 0) {
        navBar.classList.remove('hidden');
        navBar.classList.add('flex');
    }
})

// FAQ SECTION

const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian) => {
    const dropDown = accordian.querySelector('.ques-dropDown');
    const ans = accordian.querySelector('.ans');

    dropDown.addEventListener('click', () => {
        ans.classList.toggle('active');
        dropDown.classList.toggle('active');
    })
})

