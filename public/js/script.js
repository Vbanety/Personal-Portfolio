/* ---- BUTTON FOR MOBILE ---- */

const btnMobile = document.getElementById('btnHeader');

function btnToggleMenu() {

    const navbar = document.getElementById('nav');
    navbar.classList.toggle('active');

    const secHeader = document.getElementById('sec-header');
    secHeader.classList.toggle = toggle('active');
}

btnMobile.addEventListener('click', btnToggleMenu);

/* ---- SCROLL ALL PAGE ---- */

ScrollReveal().reveal('.headerLeftDelay', { delay: 250 });

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

