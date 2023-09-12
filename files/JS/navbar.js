//Font's
var typed = new Typed('#element', {
    strings: ['Complex Problem Solver', 'Javascript Developer', 'Full Stack Web Developer','FrontEnd Web Developer '],
    typeSpeed: 80,
});


// Nav bar
const hamburger = document.querySelector(".hamburger");
const right = document.querySelector(".right");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    right.classList.toggle("active");
})