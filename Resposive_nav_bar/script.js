const svg1= document.querySelector('.svg1')
const ul= document.querySelector('ul')
const close= document.querySelector('.close')
    
svg1.addEventListener('click',()=>{
    ul.classList.toggle('file')
    svg1.style.display='none'
    close.style.display='block'
})

close.addEventListener('click',()=>{
    ul.classList.remove('file')
    svg1.style.display='block'
    close.style.display='none'
})
