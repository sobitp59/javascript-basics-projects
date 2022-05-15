const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{ 
    let randomColor = colors[getRandomNumber()];
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

let getRandomNumber = () => {
   let num = Math.floor(Math.random() * colors.length);
    return num;
}