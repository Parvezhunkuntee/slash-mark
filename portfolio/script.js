let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");


daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})
var typed = new Typed('#text', {
    strings: ["Dev X coder.", "Developer.","parvez Hunkuntee."],
    typeSpeed:150,
    loop:true,
    backSpeed:100,
    backDelay:1000
});