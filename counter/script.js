const p = document.querySelector('.main-no')
const inC = document.querySelector('.increment')
const deC = document.querySelector('.decrement')
const input = document.querySelector('.whatido')
const reset = document.querySelector('.reset')
let count = 0
p.innerText = count
inC.addEventListener('click', ()=>{
    let step = Number(input.value) || 1
count+=step
p.innerText=count

})
deC.addEventListener('click', ()=>{
    let step = Number(input.value) || 1
count-=step
p.innerText=count

})

reset.addEventListener('click',()=>{
    count=0
    p.innerText=count
    input.value=''
})






