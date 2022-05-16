// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
let navToggleBar = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');

navToggleBar.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links');     !!! NOT AFFECTIVE WAY TO DO !!!

    let containerHeight = linksContainer.getBoundingClientRect().height; 
    let linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
let navbar = document.getElementById('nav');
let topLink = document.querySelector('.top-link');

window.addEventListener('scroll', ()=>{
    let scrollHeight = window.pageYOffset;
    let navbarHeight = navbar.getBoundingClientRect().height;
    
    // fixed nav
    if(scrollHeight > navbarHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    // top link
    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }

});

// ********** smooth scroll ************
// select links
