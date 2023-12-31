let Menu = document.getElementById('menu-bar');
let Close = document.getElementById('close-bar');
let Ulmenu = document.getElementById('ul-menu');
let Head = document.getElementById('header-main');

Menu.onclick = function(){
    Close.classList.add('close-active');
    Menu.classList.add('menu-hide');
    Ulmenu.classList.add('ul-active');
    Head.classList.add('head-spand');
}
Close.onclick = function(){
    Menu.classList.remove('menu-hide');
    Close.classList.remove('close-active');
    Ulmenu.classList.remove('ul-active');
    Head.classList.remove('head-spand')
}

// Login pop up section 
let Login = document.getElementById('login-opener');
let LoginPop = document.getElementById('login-pop');
let EyeOpen = document.getElementById('eyeicon');
let Pass = document.getElementById('password');
let eyeClose = document.getElementById('eye-close');
let ClosePop = document.getElementById('close');
let PopMain = document.getElementById('pop-main');

Login.onclick = function(){
    LoginPop.classList.add('login-active');
    PopMain.classList.add('pop-main-active');
}
EyeOpen.onclick = function(){
     if(Pass.type === 'password'){
        Pass.type = 'text';
        eyeClose.classList.add('eye-active');
     }  
}
eyeClose.onclick = function(){
    if(Pass.type === 'text'){
        Pass.type = 'password'
        eyeClose.classList.remove('eye-active');
        
    }   
}
ClosePop.onclick = function(){
    LoginPop.classList.remove('login-active');
    PopMain.classList.remove('pop-main-active');
}



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.box', {})
sr.reveal('.main-title', {delay: 200})
sr.reveal('.main-img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})



// auto typing text 
var typed = new Typed(".main-title",{
    strings : ["Web designer", "Backend developer", "YouTuber", "Graphics designer"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
  })