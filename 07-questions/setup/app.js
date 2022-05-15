
let btns = document.querySelectorAll('.question-btn');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        
        let showAnswers = e.currentTarget.parentElement.parentElement;
        
        btns.forEach((item)=>{
            if(item !== e.currentTarget){
                item.parentElement.parentElement.classList.remove('show-text');
            }
        });

        showAnswers.classList.toggle('show-text');
    });
});