// target start quiz button
var start = document.getElementById("start");
// target quiz game
var quiz = document.getElementById("quiz");
// target questions
var questionEl = document.getElementById("question");
// target timer
var counter = document.getElementById("counter");
// target answer selection A
var answerA = document.getElementById("A");
// target answer selection B
var answerB = document.getElementById("B");
// target answer selection C 
var answerC = document.getElementById("C");

var loadingPage = document.getElementById("loading-page");

var quizEl = document.getElementById("begin-quiz");


// Question set for user
var questions = [

    {//Quiz question 1
        question: "What is my favorite Sport?",
        choiceA: "Rugby",
        choiceB: "Baseball",
        choiceC: "Football",
        correctAns: "B"

    },
    {// Quiz question 2
        question: "Who is my favorite Hockey player?",
        choiceA: "Wayne Gretzky",
        choiceB: "Pavel Datsyuk",
        choiceC: "Jonathan Quick",
        correctAns: "A"
    },
    {// Quiz question 3
        question: "What is my favorite subject?",
        choiceA: "Mathematics",
        choiceB: "Anatomy",
        choiceC: "History",
        correctAns: "C"
    },
    {//Quiz question 4
        question: "What is the percentage I shoot myself before this bootcamp ends?",
        choiceA: "99%",
        choiceB: "66%",
        choiceC: "33%",
        correctAns: "A"
    }


];
// Click event that begins Quiz
start.addEventListener("click", beginQuiz);

//variable to hold final score
var score = 0;
// variable for countdown
var count = 0;
// variable of the quiz timer
var time = 20;


// variables for accessing questions from index position
var currentQuesIndex = 0;
// var userQ = questions[0]


// need a function to display questions
function showQuestion() {
 // quiz questions along with possible answers
    questionEl.innerHTML = questions[currentQuesIndex].question;
    answerA.innerHTML = questions[currentQuesIndex].choiceA;
    answerB.innerHTML = questions[currentQuesIndex].choiceB;
    answerC.innerHTML = questions[currentQuesIndex].choiceC;
    
};// Tumer function set to 20 sec
function setTime() {
    var timerInterval = setInterval(function () {
        time--;
        counter.textContent = time + " Seconds left on quiz.";
        // condition to clear timer once it hits zero
        if (time === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}
//Function to begin quiz after user clicks start button, also where timer and display questions are called
function  beginQuiz() {
    loadingPage.style.display = "none";
    showQuestion();
    setTime();
    quizEl.style.display = "block";
}

function nextQuestion(event){ 
    
   

if (event.target.value === questions[currentQuesIndex].correctAns){
    score++; console.log(score++);
}
   
   
   
   
    if (currentQuesIndex < questions.length -1){
        currentQuesIndex++;

    } 
    showQuestion();
} 
answerA.addEventListener("click", nextQuestion)


answerB.addEventListener("click", nextQuestion)

answerC.addEventListener("click", nextQuestion)




// function showEachQuestion() {
//     for (var i = 0; i > quesIndex; i++) {
//         var userQ = questions[i];
//         showQuestion(userQ);

//         var button = document.createElement("button");
//         button.textContent = "choose";


//     }
// }
// create a button that will capture the value of the of which answer the user clicks on. each time an answer is made. capture the value of answer A, B, C variables.









// need a conditional statement to identify if user answers are correct or not. //




// questions will have 5 seconds to be answered
// var quesTimeLimit = 5;

// Timer function
