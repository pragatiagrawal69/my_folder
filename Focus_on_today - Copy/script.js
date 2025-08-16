const gInput = document.querySelectorAll('.goal-input')
const checkbox = document.querySelectorAll('.checkbox')
const pBar = document.querySelector('.progress-bar')
const error = document.querySelector('.error')
const progressValue = document.querySelector('.progress-value')

const allGoals = JSON.parse(localStorage.getItem('goals')) || {}

checkbox.forEach((checkbox1) => {
    checkbox1.addEventListener('click', () => {
        const allFilled = [...gInput].every(input => input.value.trim() !== "")
        return input.value
    
    if (allFilled) {
        checkbox1.parentElement.classList.toggle('completed')
        progressValue.style.width = '33%'

    } else {
        pBar.classList.add('show-error')
    }
})  
})

gInput.forEach((input) => {
    input.value = allGoals[input.id].name
    if (allGoals[input.id].completed) {
        input.parentElement.classList.add('completed')
    }
    input.addEventListener("focus", () => {
        pBar.classList.remove('show-error')
    })
    input.addEventListener("input", (e) => {
        allGoals[input.id] = input.value
        localStorage.setItem('goals', JSON.stringify(allGoals))
    })


})
