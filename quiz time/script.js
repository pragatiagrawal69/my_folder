
const buttonStart = document.querySelector('#start')
const container = document.querySelector('.container')
const questionBOX = document.querySelector('.question')
const choiceBox = document.querySelector('.choice')
const scoreCard = document.querySelector('.scorecard')
const alert = document.querySelector('.alert')
const timer = document.querySelector('.timer')
// const nextButton= document.getElementById('next-btn')
let addNextBtn
const quiz = [
    {
        question: 'Q.1 which of the following is not a CSS box model property?',
        choice: ['Margin', 'padding', 'border-radius', 'border-collapse'],
        answer: 'border-collapse'

    },
    {
        question: 'Q.2 what of the following is not a CSS box model property?',
        choice: ['Mar', 'padding', 'border-radius', 'border-collapse'],
        answer: 'border-collapse'

    },
    {
        question: 'Q.3 would of the following is not a CSS box model property?',
        choice: ['Ma', 'padding', 'border-radius', 'border-collapse'],
        answer: 'border-collapse'

    },
    {
        question: 'Q.4 which of the following is not a CSS box model property?',
        choice: ['Margin', 'padding', 'border-radius', 'border-collapse'],
        answer: 'border-collapse'

    }
]
let currentQIn = 0
let score = 0
let quizOver = false
let timeLeft = 30
let timerID = null
const showQuestion = () => {

    const quesDet = quiz[currentQIn]
    questionBOX.textContent = quesDet.question
    choiceBox.textContent = ""
    for (let i = 0; i < quesDet.choice.length; i++) {
        const currentChoice = quesDet.choice[i]
        const choiceDiv = document.createElement('div')
        choiceDiv.textContent = currentChoice
        choiceDiv.classList.add('choiceL')
        choiceBox.appendChild(choiceDiv)

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected')
            }
            else {
                choiceDiv.classList.add('selected')
            }
        })
    }
    if (currentQIn < quiz.length) {
        startTimer()
    }
}

const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choiceL.selected')
    if (selectedChoice.textContent === quiz[currentQIn].answer) {
        displayAlert('correct Answer')
        score++
    }
    else {
        displayAlert(`wrong answer! correct answer is ${quiz[currentQIn].answer}`)
    }
    timeLeft=30
    currentQIn++
    if (currentQIn < quiz.length) {

        showQuestion()
    }
    else {
        showScore()
        stopTimer()
        quizOver = true
    }
}

const showScore = () => {
    questionBOX.textContent = ''
    choiceBox.textContent = ''
    scoreCard.textContent = `you Scored ${score} out of ${quiz.length}`
    displayAlert('you have completed this quiz!')
    addNextBtn.textContent = 'play again'
}

const displayAlert = (msg) => {
    alert.style.display = 'block'
    alert.textContent = msg
    setTimeout(() => {
        alert.style.display = 'none'
    }, 2000);

}

const startTimer = () => {
    clearInterval(timerID)
    timer.textContent=timeLeft
    const countDown = () => {
        timeLeft--
        timer.textContent = timeLeft
        if (timeLeft === 0) {
            const confirmUser = confirm('timeup')
            if (confirmUser) {
                timeLeft=30
                startQuiz()
            }
            else{
                buttonStart.style.display='block'
                container.style.display='none'
                return
            }
            startQuiz()
        }
    }
   timerID= setInterval(countDown, 1000)

}

const stopTimer=()=>{
clearInterval(timerID)
}

const startQuiz = () => {
    timeLeft=30
    showQuestion()
}

buttonStart.addEventListener('click', () => {
    startQuiz()
    buttonStart.style.display='none'
    container.style.display = 'block'
    timer.style.display = 'block'
    document.body.style.backgroundColor = 'rgba(204, 226, 194, 1)'

    const img = document.querySelector('.quiz-img')
    img.classList.add('shrink-move')
    addNextBtn = document.createElement('button')
    addNextBtn.textContent = 'next'
    container.appendChild(addNextBtn)
    addNextBtn.addEventListener('click', () => {
        const selectedChoice = document.querySelector('.choiceL.selected')
        if (!selectedChoice && addNextBtn.textContent === 'next') {
            displayAlert('select your answer')
            return
        }
        if (quizOver) {
            addNextBtn.textContent = 'next'
            scoreCard.textContent = ''
            currentQIn = 0
            showQuestion()
            quizOver = false
            score = 0
        }
        else {
            checkAnswer()
        }
    })
})
