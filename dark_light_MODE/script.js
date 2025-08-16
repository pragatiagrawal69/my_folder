const fullDark = document.querySelector('#full-dark')
const containerDark = document.querySelector('#container-dark')
const containerII = document.querySelector('.containerII')

fullDark.addEventListener('change',()=>{
if(fullDark.checked){
    document.body.classList.add('dark')
} else{
    document.body.classList.remove('dark')
}
containerDark.checked=fullDark.checked
if(containerDark.checked){
    containerII.classList.add('dark')
} else{
    containerII.classList.remove('dark')
}
})


containerDark.addEventListener('change',()=>{
if(containerDark.checked){
    containerII.classList.add('dark')
} else{
    containerII.classList.remove('dark')
}
})