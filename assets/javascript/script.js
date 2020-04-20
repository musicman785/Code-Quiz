// target start quiz button
var start = document.getElementById("start");
// target quiz game
var quiz = document.getElementById("quiz");
// target questions
var question = document.getElementById("question");
// target timer
var counter = document.getElementById("counter");
// target answer selection A
var answerA = document.getElementById("A");
// target answer selection B
var answerB = document.getElementById("B");
// target answer selection C 
var answerC = document.getElementById("C");

var questions = [
    {
        question: "What is my favorite Sport?",
        choiceA: "Rugby",
        choiceB: "Baseball",
        choiceC: "Football",
        correctAns: "B"

    },
    {
        question: "Who is my favorite Hockey player?",
        choiceA: "Wayne Gretzky",
        choiceB: "Pavel Datsyuk",
        choiceC: "Jonathan Quick",
        correctAns: "A"
    },
    {
        question: "What is my favorite subject?",
        choiceA: "Mathematics",
        choiceB: "Anatomy",
        choiceC: "History",
        correctAns: "C"
    },
    {
        question: "What is the percentage I shoot myself before this bootcamp ends?",
        choiceA: "99%",
        choiceB: "66%",
        choiceC: "33%",
        correctAns: "A"

    }

];



// need to create variable to access questions array???