/* ---- BUTTON FOR MOBILE ---- */

const btnMobile = document.getElementById('btnHeader');

function btnToggleMenu() {

    const navbar = document.getElementById('nav');
    navbar.classList.toggle('active');

    const menuHumburger = document.getElementById('humburger');
    menuHumburger.classList.toggle = toggle('active');
}

btnMobile.addEventListener('click', btnToggleMenu);

/* ---- SCROLL ALL PAGE ---- */

ScrollReveal().reveal('.skillsMiddleDelay', { delay: 250 });

ScrollReveal().reveal('.headerLeftDelay', { delay: 350 });

ScrollReveal().reveal('.headerRightDelay', { delay: 500 });

ScrollReveal().reveal('.headerMiddleyDelay', { delay: 750 });

ScrollReveal().reveal('.firstDelayback', { delay: 1000 });

ScrollReveal().reveal('.thrirdDaley', { delay: 1200 });

ScrollReveal().reveal('.headcollection', { delay: 1200 });

ScrollReveal().reveal('.headlineback', { delay: 1200 });



var classImage = document.createElement("div");
    classImage.classList.add("my-image");

function changeImage() {
    document.querySelector(".img").style.display = 'none';
    document.querySelector("#myImage").appendChild(classImage);   
}

function changeImg() {
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

    console.log(targetOffset)
})