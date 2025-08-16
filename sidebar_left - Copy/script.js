const menu = document.querySelector('#menu')
const container = document.querySelector('.container')

menu.addEventListener('click',()=>{
    
    container.classList.add('active');
})
document.addEventListener('mouseup',(e)=>{
    if(!container.contains(e.target)){
        container.classList.remove('active');
    }
    
})