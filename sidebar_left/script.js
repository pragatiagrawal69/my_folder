const svg = document.querySelector('.svg')
const container = document.querySelector('.container')

svg.addEventListener('click',()=>{
    container.style.display= 'block'
    container.classList.toggle('active');
})