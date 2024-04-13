// const questions = [
//     {
//         question: "What is 2 + 2?",
//         answers: ["3", "4", "5", "6"],
//         correct: 1
//     },
//     {
//         question: "Which is the largest planet in the solar system?",
//         answers: ["Earth", "Mars", "Jupiter", "Venus"],
//         correct: 2
//     },
//     {
//         question: "What is the capital of France?",
//         answers: ["Berlin", "London", "Madrid", "Paris"],
//         correct: 3
//     }
// ];

// const questionEl = document.getElementById('question');
// const answerButton = document.querySelectorAll('.btn');
// const scoreEl = document.getElementById('Score'); // Fixed the typo here


// let currentIndex = 0;
// let score = 0;
// const getCheckAnswer = (e) => {
//     const selectedIndex = Array.from(answerButton).indexOf(e.target);
//     if (selectedIndex === questions[currentIndex].correct) {
//         score++;
//     }
//     currentIndex++;

//     if (currentIndex < questions.length) {
//         displayQuestion(currentIndex);
//     } else {
//         scoreEl.innerHTML = ` <h3>Congrats
//         ! Your Result is ${score} out of ${questions.length} </h3>
//         <button class="sub-btn" onclick="location.reload()">Play Again</button>`
//         scoreEl.classList.remove('ScoreArea');
//     }
// }

// const displayQuestion = () => {
//     questionEl.innerText = questions[currentIndex].question;

//     answerButton.forEach((answer, i) => {
//         answer.innerText = questions[currentIndex].answers[i];
//         answerButton[i].addEventListener('click', getCheckAnswer);
//     });
// }

// displayQuestion(currentIndex);



// --------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------------------>
const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Which is the largest planet in the solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 2
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "London", "Madrid", "Paris"],
        correct: 3
    }
];

let currentIndex = 0;
let score = 0;


const QuestionEl = document.getElementById('question');
const ans1 = document.getElementById('ans1')
const ans2 = document.getElementById('ans2')
const ans3= document.getElementById('ans3')
const ans4 = document.getElementById('ans4')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')

const answer = document.querySelectorAll('.answer')
const scoreEl = document.getElementById('Score'); 

const Submit = document.getElementById('submit')

displayQuestion()

function displayQuestion() {
    QuestionEl.innerText = questions[currentIndex].question;
  
    option1.innerText = questions[currentIndex].answers[0]
    option2.innerText = questions[currentIndex].answers[1]
    option3.innerText = questions[currentIndex].answers[2]
    option4.innerText = questions[currentIndex].answers[3]
}


const checkAnswer = () => {
    let selectedAnswer;
    for (let i = 0; i < answer.length; i++){
        if (answer[i].checked) {
            selectedAnswer = i;
            break;
        }
    }
    return selectedAnswer;
    
}
const deselectAll = () => {
    answer.forEach((currElem) => currElem.checked = false);
}
Submit.addEventListener('click', function () {
    const selectedAnswer = checkAnswer();
    if (selectedAnswer !== undefined) {  // Check if an answer is selected 
        if (selectedAnswer === questions[currentIndex].correct)
        {
            score++; // Increase the score if the answer is correct 
        }
        currentIndex++;
        // Move to the next question 
        deselectAll(); // Deselect all radio buttons 
        if (currentIndex < questions.length) {
            displayQuestion(currentIndex); // Display the next question 
        } else {
            scoreEl.innerHTML = `<h3>Congrats! Your Result is ${score} out of ${questions.length}</h3> 
        <button class="sub-btn" onclick="location.reload()">Play Again</button>`;
            scoreEl.classList.remove('ScoreArea');
        }
    }
});