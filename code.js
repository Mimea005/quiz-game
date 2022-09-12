const quizzes = [
    {
        question: "Is a banana banana banana?",
        alternatives: [
            "Banana!",
            "ba na",
            "banananana",
            "na"
        ],
        correct: 1
    },
    {
        question: "Banana is banana",
        alternatives: [
            "yes",
            "no",
            "depends",
            "sarcastic"
        ],
        correct: 0
    },
    {
        question: "SSD stands for:",
        alternatives: [
            "Super Secure Drive",
            "Secure Solid Disk",
            "Solid State Drive",
            "Super State Disk"
        ],
        correct: 2
    },
    {
        question: "Koffer ikkje?",
        alternatives: [
            "Fordi",
            "Kata!",
            "Kafe",
            "Nope"
        ],
        correct: 1
    }
]

let questionDOM = document.querySelector("#question");
let alt1DOM = document.querySelector("#alt1");
let alt2DOM = document.querySelector("#alt2");
let alt3DOM = document.querySelector("#alt3");
let alt4DOM = document.querySelector("#alt4");

// get random quiz
let quiz;
{
    let rand = Math.floor(Math.random() * quizzes.length)
    quiz = quizzes[rand]
}

questionDOM.innerText = quiz.question;
alt1DOM.innerText = quiz.alternatives[0];
alt1DOM.addEventListener("click", (quiz.correct===0)? win:loose);

alt2DOM.innerText = quiz.alternatives[1];
alt2DOM.addEventListener("click", (quiz.correct===1)? win:loose);

alt3DOM.innerText = quiz.alternatives[2];
alt3DOM.addEventListener("click", (quiz.correct===2)? win:loose);

alt4DOM.innerText = quiz.alternatives[3];
alt4DOM.addEventListener("click", (quiz.correct===3)? win:loose);

function win() {
    alert("You win!");
}

function loose() {
    alert("HA, Looser");
}
