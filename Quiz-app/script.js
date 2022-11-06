const quizData = [
    {
        question:'What is the most used programing language in 2022?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d',
    },
    { 
        question:'Inside which HTML element do we put the JavaScript?',
        a:'<js>',
        b:'<scripting>',
        c:'<javascript>',
        d:'<script>',
        correct: 'd',
    },
    {
        question:'Where is the correct place to insert a JavaScript??',
        a:'The <body> section',
        b:'The <head> section',
        c:'Both the <head> section and the <body> sections are correct',
        d:'No correct answer',
        correct: 'c',
    },
    {
        question:'How do you write "Hello World" in an alert box?',
        a:'msg("Hello World")',
        b:'alertBox("Hello World")',
        c:'msgBox("Hello World")',
        d:'alert("Hello World")',
        correct:'d' ,
        
    },
    {
        question:'How do you create a function in JavaScript?',
        a:'function = myFunction()',
        b:'function*myFunction()',
        c:'function myFunction()',
        d:'function:myFunction()',
        correct: 'c',
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn = document.getElementById('submit'); 

let currentQuiz = 0;
let scope = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
  submitBtn.addEventListener ("click", () => {
          
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            scope++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answerd correctly 
            at ${scope}/${quizData.length} questions.</h2>
            <button onclick = "location.reload()">Reload</button>`;
        }      
    };
});
