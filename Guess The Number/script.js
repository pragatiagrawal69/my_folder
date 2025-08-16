const input = document.querySelector('.inputNo')
const subBtn = document.querySelector('.Submit')
const form = document.querySelector('form')
const msg = document.querySelector('.msg')
const allGuess = document.querySelector('.allGuess')
const start = document.querySelector('.start')

function game() {
    let myNumber = Math.floor(Math.random() * 100) + 1
let guesses=[]
form.addEventListener('submit',(e)=>{
    e.preventDefault()
let guessNumber=parseInt(input.value) 
guesses.push(guessNumber)
if(myNumber=== guessNumber){
    
msg.innerText=  myNumber + 'is correct "CONGRATS!!!!"'

start.disabled=false
subBtn.disabled=true
}
else if(myNumber> guessNumber){
 msg.innerText= "is to low!"
}
else{
    msg.innerText= 'is too high'
}
allGuess.innerText = 'your guesses: ' + guesses.join(', ')
input.value = ''
})
start.addEventListener('click',()=>{
    allGuess.innerText=''
    msg.innerText=''
    start.disabled=true
subBtn.disabled=false
     myNumber = Math.floor(Math.random() * 100)+1
})
}
game()