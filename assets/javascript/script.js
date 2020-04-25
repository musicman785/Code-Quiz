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
// targets loading page section
var loadingPage = document.getElementById("loading-page");
// targets the quiz section
var quizEl = document.getElementById("begin-quiz");
// targets final score section 
var finalScore = document.getElementById("final-score");
// DOM variable targets initials input
var initials = document.getElementById("#initials");
// DOM variable targets submit button
var submit = document.getElementById("submit");

var startOver = document.getElementById("start-again");



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
            quizEl.style.display = "none";
            // quizResults();

        }

    }, 1000);
}
//Function to begin quiz after user clicks start button, also where timer and display questions are called
function beginQuiz() {
    loadingPage.style.display = "none";
    showQuestion();
    setTime();
    quizEl.style.display = "block";
}



// function takes user to next question once anwser is recorded.

function nextQuestion(event) {


    // condition uses click event to add to user score if correct ansser is made //
    if (event.target.value === questions[currentQuesIndex].correctAns) {
        score++;
    } else {
        time -= 5;
        counter.textContent = time + " Seconds left on quiz.";
    }



    // Condition executes next question
    if (currentQuesIndex < questions.length) {
        currentQuesIndex++;
        // moves to next section once condition is met
    } if (currentQuesIndex === questions.length) {

        quizEl.style.display = "none";
        // this function call takes user to results section
        quizResults();
        return;

    }
    showQuestion();
}
// score is added and shown
function quizResults() {
    document.getElementById("score-counter").textContent = score;
    finalScore.style.display = "block";

}
//click events for aswers to questions
answerA.addEventListener("click", nextQuestion);


answerB.addEventListener("click", nextQuestion);

answerC.addEventListener("click", nextQuestion);

// submit event for initial and score 
submit.addEventListener("click", function (event) {
    event.preventDefault();

    var initToAdd = initials.value;

    // variable holds score in number form when retrieved from local storage
    var highScores = JSON.parse(localStorage.getItem("highScore"));
    //conditional statement that set information to the local storage
    if (highScores) {

        highScores.push({
            score: score,
            initials: initToAdd
        });

        localStorage.setItem("highScore", JSON.stringify(highScores));
    } else {
        localStorage.setItem("highScore", JSON.stringify([{
            score: score,
            initials: initToAdd
        }]));
    }


    // close section of 'finalscore' and move to next section of page
    finalScore.style.display = "none";
    getHighScore();


})

// Use an empty variable to manipulate DOM element
var targetElement;
// use function to target and diplay to page
function getHighScore() {
    targetElement = document.getElementById("high-score");
    targetElement.style.display = "block";
    // same variable again to retrieve information as a number
    var highScores = JSON.parse(localStorage.getItem("highScore"));

    // loop sets numbers in order of entry and displays them.
    if (highScores) {
        for (var i = 0; i < highScores.length; i++) {
            // DOM variable to show input using the .textContext keyword
            var paragraph = document.createElement("p");
            //scores and names are recorded into paragraph element
            paragraph.textContent = highScores[i].initials + ": " + highScores[i].score;
            //appending input to element
            targetElement.appendChild(paragraph);
        }

    }



}

// Using this funtion to restart quiz when button is clicked
function refreshPage() {
    window.location.reload();
}//added function to in case user wants a empty score tally
function clearPage() {
    window.location.reload();
    localStorage.clear();
}

