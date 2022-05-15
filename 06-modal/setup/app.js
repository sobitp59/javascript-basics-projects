let openModalBtn = document.querySelector('.modal-btn');
let closeModalBtn = document.querySelector('.close-btn');
let modalOverlay = document.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', ()=>{
    modalOverlay.classList.add('open-modal');
})

closeModalBtn.addEventListener('click', ()=>{
    modalOverlay.classList.remove('open-modal');
})