
let toggleBar = document.querySelector('.nav-toggle');
let hamburger = document.querySelector('.fas');
let toggleLinks = document.querySelector('.links');

hamburger.style.color = '#ef0f7f';
toggleBar.addEventListener('click', ()=>{
    
    hamburger.style.transition = 'all 0.2s linear';
    
    if(toggleLinks.classList.contains('show-links')){
        hamburger.style.transform = 'rotate(0deg)';
        toggleLinks.classList.remove('show-links');
    }else{
        toggleLinks.classList.add('show-links');
        hamburger.style.transform = 'rotate(90deg)';
    }
});