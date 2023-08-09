
const topButton = document.querySelector('#topButton');
const aboutMeButton = document.querySelector('#aboutMeButton');
const projectsButton = document.querySelector('#projectsButton');
const contactButton = document.querySelector('#contactButton');
const navbar = document.querySelector('#navbar');

topButton.addEventListener("click", function(){
    window.scrollTo(0,0);
})

document.addEventListener("scroll", ocultar)

function ocultar(){
    if(window.scrollY < 30){
        topButton.style.display = 'none';
    }else{
        topButton.style.display = 'flex';
    }
}



aboutMeButton.addEventListener("click", function(){
    window.scrollTo(0,1000)
})

projectsButton.addEventListener("click" , function(){
    window.scrollTo(0, 1878);
})

contactButton.addEventListener("click", function(){
    window.scrollTo(0,2411);
})


ocultar();