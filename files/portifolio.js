
const topButton = document.querySelector('.topButton');
const aboutMeButton = document.querySelector('#aboutMeButton');
const projectsButton = document.querySelector('#projectsButton');
const contactButton = document.querySelector('#contactButton');

topButton.addEventListener("click", function(){
    window.scrollTo(0,0);
})

projectsButton.addEventListener("click" , function(){
    window.scrollTo(0, 760);
})

contactButton.addEventListener("click", function(){
    window.scrollTo(0,1200);
})