let toggleBtn = document.querySelector('.sidebar-toggle');
let closeBtn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', ()=>{
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }else{
        sidebar.classList.add('show-sidebar');
    }

    //more easier way to do this above task
    // sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar');
})