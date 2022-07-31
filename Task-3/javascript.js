"user strict";

const quizData = [
    {
        question: "Which is the Indian Car of the Year 2019?",
        a: "Maruti Suzuki Swift",
        b: "Hyundai Santro",
        c: "Maruti Suzuki Ertiga",
        d: "None of these",
        correct: "a",
    },
    {
        question: "The slogan for which Auto brand is ‘The best or nothing’?",
        a: "Honda",
        b: "Mercedes-Benz",
        c: "Ford",
        d: "KIA",
        correct: "b",
    },
    {
        question: "Where is the main headquarters of Maruti Suzuki?",
        a: "Kolkata",
        b: "Mumbai",
        c: "Bangalore",
        d: "New Delhi",
        correct: "d",
    },
    {
        question: "Which of the following is not Jaguar model?",
        a: "XF",
        b: "TL",
        c: "XJ",
        d: "F-pace",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})