/* ---- BTN-REMOVE-NAV ---- */

const btnRemoveNav = document.getElementById('btn-remove-nav');

const navNone = document.querySelector('#nav');

function navRemove() {
    document.getElementById('nav').style.display = "none";
}

btnRemoveNav.addEventListener('click', navRemove);


/* ---- BUTTON FOR MOBILE ---- */

const btnMobile = document.getElementById('btnHeader');

function btnToggleMenu() {

    const navbar = document.getElementById('nav');
    navbar.classList.toggle('active');

    const menuHumburger = document.getElementById('humburger');
    menuHumburger.classList.toggle('active');
    document.getElementById('nav').style.display = "flex";
}

btnMobile.addEventListener('click', btnToggleMenu);

/* ---- SCROLL ALL PAGE ---- */

ScrollReveal().reveal('.skillsMiddleDelay', { delay: 250 });

ScrollReveal().reveal('.headerLeftDelay', { delay: 350 });

ScrollReveal().reveal('.cardLeftDelay', { delay: 650 });

ScrollReveal().reveal('.cardRightDelay', { delay: 800 });

ScrollReveal().reveal('.headerRightDelay', { delay: 500 });

ScrollReveal().reveal('.headerMiddleyDelay', { delay: 750 });

ScrollReveal().reveal('.firstDelayback', { delay: 1000 });

ScrollReveal().reveal('.thrirdDaley', { delay: 1200 });

ScrollReveal().reveal('.headcollection', { delay: 1200 });


var textWrapper = document.querySelector('.anime-name .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
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


var classImage = document.createElement("div");
    classImage.classList.add("my-image");

function changeImage() {
    document.querySelector(".img").style.display = 'none';
    document.querySelector("#myImage").appendChild(classImage);   
}

function changeImgOut() {
    document.querySelector(".img").style.display = 'block';
    document.querySelector("#myImage").removeChild(classImage);
        
}

/* ---- SCROLL SOFT ON INTERNAL LINKS ---- */

$('nav li a').click(function(e) {
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
    const windowTop = window.pageYOffset + 300;
    animations.forEach(function(scrolling) {
        if((windowTop) > scrolling.offsetTop) {
            scrolling.classList.add(animationClass)
        }
        // console.log(scrolling.offsetTop)
    })
}

window.addEventListener('scroll', function() {
    animeScroll()
})


/* ---- CARROUSEL PHOTOS ---- */

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

        if(currentImageIndex >= max)
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

/* ---- MODAL CERTIFICADO ---- */

let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-certificate');

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('modal-active')
})

let btnClose = document.querySelector('.close-modal');

btnClose.addEventListener('click', function() {
    modalBg.classList.remove('modal-active');
    document.querySelector('.modal-certificate').style.transition = "all 0.5s";
})
