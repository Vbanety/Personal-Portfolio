// "use strict";
/* ---- BUTTON FOR MOBILE ---- */

const btnMobile = document.getElementById('btnHeader');
const navbar = document.getElementById('nav');

function btnToggleMenu() {
    navbar.classList.toggle('active');
    document.getElementById('nav').style.display = "flex";
}

btnMobile.addEventListener('click', btnToggleMenu);

/* ---- TOGGLE CLOSE MENU FOR MOBILE ---- */

const btnMenuMobile = document.getElementById('menu-header');

btnMenuMobile.querySelectorAll('#btnMenu')

function btnToggleMenuMobile() {
    navbar.classList.remove('active');
    navbar.getElementsByClassName
}

btnMenuMobile.addEventListener('click', btnToggleMenuMobile);


/* ---- START TOGGLE THEME ---- */

const checkboxTheme = document.getElementById('checkbox')
const presentation = document.getElementById('box-dark')
const navDark = document.getElementById('nav')
const allElement = document.querySelectorAll('.darkBox')
const allTagP = document.querySelectorAll('p , h2, ol, ol li, span, #btnHeader')
const allPort = document.querySelectorAll('.portfolio, .footer')
const bgWavePort = document.querySelectorAll('#path')
const bgSkill = document.querySelectorAll('.skills, #path-skill')
const languages = document.querySelectorAll('#path-languages')
const languagesApi = document.querySelectorAll('#path-languages-api')
const languagesBall = document.querySelectorAll('#cicle1, #cicle2, #cicle3, #cicle4, #cicle6, #cicle7, #cicle8, #cicle9')
const svgIcon = document.querySelectorAll('#cicle-main button svg path')

const cardsDark = document.querySelectorAll('.cards')

checkboxTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    navDark.querySelector('ul').classList.toggle('dark')
    allElement.forEach(eachValues => {
        eachValues.classList.toggle('dark')
    })

    allTagP.forEach(eachTag => {
        eachTag.classList.toggle('dark-letter')
    })

    allPort.forEach(eachPort => {
        eachPort.classList.toggle('dark-port-active')
    })

    cardsDark.forEach(eachCard => {
        eachCard.classList.toggle('cards-dark-active')
    })

    bgWavePort.forEach(eachBgWave => {
        eachBgWave.classList.toggle('dark-port-active')
    })

    bgSkill.forEach(gSkill => {
        gSkill.classList.toggle('dark-skill-active')
    })

    languages.forEach(activeLanguages => {
        activeLanguages.classList.toggle('languages-active')
    })

    languagesApi.forEach(activeLanguagesApi => {
        activeLanguagesApi.classList.toggle('languages-api-active')
    })

    languagesBall.forEach(activeLanguagesBall => {
        activeLanguagesBall.classList.toggle('activeLanguagesBalls')
    })

    svgIcon.forEach(activeIconSvg => {
        activeIconSvg.classList.toggle('icon-svg')
    })
})

/* ---- END TOGGLE THEME ---- */

/* ---- START SCROLL DELAY ---- */

ScrollReveal().reveal('.skillsMiddleDelay', { delay: 100 });
ScrollReveal().reveal('.headerLeftDelay', { delay: 200 });
ScrollReveal().reveal('.cardLeftDelay', { delay: 400 });
ScrollReveal().reveal('.cardRightDelay', { delay: 500 });
ScrollReveal().reveal('.headerRightDelay', { delay: 300 });
ScrollReveal().reveal('.headerMiddleyDelay', { delay: 550 });
ScrollReveal().reveal('.firstDelayback', { delay: 650 });
ScrollReveal().reveal('.thrirdDaley', { delay: 1200 });
ScrollReveal().reveal('.headcollection', { delay: 1200 });

/* ---- END SCROLL DELAY ---- */

/* START ANIME LETTER */

var textWrapper = document.querySelector('.anime-name .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.anime-name .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    }).add({
        targets: '.anime-name',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

/* END ANIME LETTER */


/* START ANIMATION MYSELF PICTURE */

var classImage = document.createElement("div");
classImage.classList.add("my-image");
classImage.style.backgroundColor = "#999"

function changeImage() {
    document.querySelector(".img").style.display = 'none';
    document.querySelector("#myImage").appendChild(classImage);
}

function changeImgOut() {
    document.querySelector(".img").style.display = 'block';
    document.querySelector("#myImage").removeChild(classImage);

}

/* ---- SCROLL SOFT ON INTERNAL LINKS ---- */

$('nav li a').click(function (e) {
    e.preventDefault();

    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1500);
})

/* ---- SCROLL SOFT SIDES ---- */

const animations = document.querySelectorAll('[data-anime]');

const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + 600;
    animations.forEach(function (scrolling) {
        if ((windowTop) > scrolling.offsetTop) {
            scrolling.classList.add(animationClass)
        }
        // console.log(scrolling.offsetTop)
    })
}

window.addEventListener('scroll', function () {
    animeScroll()
})


/* ---- START CARROUSEL PHOTOS ---- */

let time = 3000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll('.photos picture img')
max = images.length;


function nextImage() {
    // removing class before
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    // adding class after
    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

/* ---- END CARROUSEL PHOTOS ---- */

/* ---- MODAL CERTIFICATE ---- */

/* FCC button */

const modalBtn = document.getElementById("certificate").querySelectorAll(".modal-btn");

const checkButton = document.getElementsByClassName('options')

let modalBg = document.querySelector('.modal-certificate');

let types = document.getElementsByName('typed');

function setCurrentModal() {
    modalBg.classList.add('modal-active')
    let checkModal = true;
    if (types[0].checked === checkModal) {
        console.log('type 0')
        checkButton[0].classList.add('cf-active');
    } else if (types[1].checked === checkModal) {
        console.log('type 1')
        checkButton[1].classList.add('cf-active');
    } else if (types[2].checked === checkModal) {
        console.log('type 2')
        checkButton[2].classList.add('cf-active');
    } else if (types[3].checked === checkModal) {
        console.log('type 3')
        checkButton[3].classList.add('cf-active');
    } else if (types[4].checked === checkModal) {
        console.log('type 4')
        checkButton[4].classList.add('cf-active');
    } else if (types[5].checked === checkModal) {
        console.log('type 5')
        checkButton[5].classList.add('cf-active');
    } else if (types[6].checked === checkModal) {
        console.log('type 6')
        checkButton[6].classList.add('cf-active');
    }
}

/*  Button Close certificate */
let btnClose = document.querySelector('.close-modal');

btnClose.addEventListener('click', function () {
    modalBg.classList.remove('modal-active');
    checkButton[0].classList.remove('cf-active');
    checkButton[1].classList.remove('cf-active');
    checkButton[2].classList.remove('cf-active');
    checkButton[3].classList.remove('cf-active');
    checkButton[4].classList.remove('cf-active');
    checkButton[5].classList.remove('cf-active');
    checkButton[6].classList.remove('cf-active');
    document.querySelector('.modal-certificate').style.transition = "all 0.5s";
})

// document.getElementsByTagName('div').appendChild()
/* START BUTTON TO TOP */

const myButton = document.getElementById('toUp')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = 'block'
    } else {
        myButton.style.display = 'none'
    }
}

/* START BUTTON TO TOP */

/* START SEND EMAIL */

const btnEmail = document.querySelector('#sendEmail');

const inputs = document.querySelector('form');

const modalEmail = document.getElementById('modal-email');
document.getElementsByName

btnEmail.addEventListener('click', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "461eb3afb25f80",
        Password: "84bbea3198eee8",
        To: "vibatista2010@hotmail.com",
        From: inputs.elements["email"].value,
        Subject: "Recado do Portfolio",
        Body: inputs.elements["subjects"].value 
        + "<br><br>" + inputs.elements["name"].value 
        + "<br><br>" + inputs.elements["message"].value
    }).then(modalEmail.classList.add('afterSend'));
    // backBody.style.transform = "translateY(0)";
})


function closeMessage() {
    modalEmail.classList.remove('afterSend');
}

/* END SEND EMAIL */