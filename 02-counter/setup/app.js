let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let classStyle = e.currentTarget.classList;
        
        if(classStyle.contains('decrease')){
            count -= 1;
            value.textContent = count;
        }else if(classStyle.contains('increase')){
            count += 1;
            value.textContent = count;
        }else{
            count = 0;
            value.textContent = count;
        }
        
        if(count < 0){
            value.style.color = '#e32222';
        }else if(count > 0){
            value.style.color = '#36a11f';
        }else{
            value.style.color = '#000000';
        }
    })
})