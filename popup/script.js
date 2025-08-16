const openModal= document.querySelector('.openModal')
const closeBtn= document.querySelector('.closeBtn')
const popup= document.querySelector('.popup')

openModal.addEventListener('click',()=>{
popup.classList.add('popup_open')
})
closeBtn.addEventListener('click',()=>{
popup.classList.remove('popup_open')
})

