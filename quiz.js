const quizData = [
    {
        question: "What is the FullForm of FIFA ?",
        a: "Federation Internationale de Football Association",
        b: "Federation of Association Football International",
        c: "International Federation of Association Football",
        d: "Football Internationale Federation Association",
        correct: "a",
    },
    {
        question: "The Topmost Goal Scorer in 2022 world cup?",
        a: "Cristino Ronaldo",
        b: "Robert Lewandowski",
        c: "Kylian Mbappé",
        d: "Mohamed Salah",
        correct: "c",
    },
    {
        question: "One of the Most Powerful Team in Football History?",
        a: "Manchester City(2021)",
        b: "Real Madrid(2017)",
        c: "Bayern Munich(2022)",
        d: "Barcelona(2017)",
        correct: "b",
    },
    {
        question: "When was football invented year?",
        a: "1894",
        b: "1995",
        c: "1863",
        d: "none of the above",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
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