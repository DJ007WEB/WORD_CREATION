
// ON CLICK ON HAM OPTION X MARK WILL SHOW AND VICE VERSA

const mobileNav = document.querySelector('.mobile-nav');

mobileNav.addEventListener('click' , () => {

    const ham = document.querySelector('.ham')

    ham.classList.toggle('hidden');

    const cross = document.querySelector('.cross');

    cross.classList.toggle('hidden');
})


//  IMAGE SLIDING

const slider = document.querySelectorAll('.p2-main img');


console.log(slider);

slider.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
})

let counter = 0;

