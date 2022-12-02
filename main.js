const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const heroElement = document.querySelector('.hero');
const navListElement = document.querySelector('.nav-item');

menuToggle.addEventListener('click', function() {
    bodyElement.classList.toggle('is-open');
    heroElement.classList.add('is-open');
});


// Add event listener to the window object to close nav when we click outside 
window.addEventListener('click', function(e) {
    let clickedElement = e.target;

    if (clickedElement.matches('.is-open')) {
        bodyElement.classList.remove('is-open');
        heroElement.classList.remove('is-open');
    }
});

// Add event listener to the nav to close when click on the nav link 
navList.addEventListener('click', function(e) {
    let clickedElement = e.target;

    if (clickedElement.classList[0] === "nav-link") {
        bodyElement.classList.remove('is-open');
    }
});