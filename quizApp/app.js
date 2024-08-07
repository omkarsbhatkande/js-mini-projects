const questions = [
  {
    question : "Which of the following is correct about JavaScript?",
    answers : [
      {text : "JavaScript is an Object-Based language", correct: true},
      {text : "JavaScript is Assembly-language", correct: false},
      {text : "JavaScript is an Object-Oriented language", correct: false},
      {text : "JavaScript is a High-level language", correct: false}
    ]
  },
  {
    question : "Which of the following is not javascript data types?",
    answers : [
      {text : "Null type", correct: false},
      {text : "Undefined type", correct: false},
      {text : "Number type", correct: false},
      {text : "All of the mentioned", correct: true}
    ]
  },
  {
    question : "wWhich of the following scoping type does JavaScript use?",
    answers : [
      {text : "Sequential", correct: false},
      {text : "Segmenta", correct: false},
      {text : "Lexical", correct: true},
      {text : "Literal", correct: false}
    ]
  },
  {
    question : "Which of the following is not a framework?",
    answers : [
      {text : "JavaScript .NET", correct: false},
      {text : "JavaScript", correct: true},
      {text : "Cocoa JS", correct: false},
      {text : "jQuery", correct: false}
    ]
  }
];


const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
   currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}



function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", (e)=>{
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      }else{
        selectedBtn.classList.add("incorrect");
      }

      Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    });
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else{
    showScore();
  }
}


function showScore(){
  resetState();
  questionElement.innerHTML =`You Scored ${score} out of ${questions.length}..!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click" , ()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else{
    startQuiz();
  }
});


startQuiz() ;