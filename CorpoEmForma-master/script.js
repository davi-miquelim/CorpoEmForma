const burguer = document.querySelector(`.burguer`);
const nav = document.querySelector(`.nav-links`);
const navLinks = document.querySelectorAll(`.nav-links li`);
const paulo = document.getElementById(`paulo`);
const jessica = document.getElementById(`jessica`);
const home = document.getElementById(`home`);


const scrollPaulo = function(){
    paulo.addEventListener('click',()=>{
        window.scrollTo(0,1200);
    })
    home.addEventListener('click',()=>{
        window.scrollTo(0,0);
    })
    jessica.addEventListener('click',()=>{
        window.scrollTo(0,2000);
    })
}

const slider = function(){
    burguer.addEventListener(`click`,function(){
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +1}s`

            }
        })
    //Burguer animation
    burguer.classList.toggle(`toggle`);
      
    })
}



const invoker = function(){
    slider();
    scrollPaulo();
}

invoker();
