// Quiz questions data
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats"
        ],
        correct: 1
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "None of the above"],
        correct: 1
    },
    {
        question: "Which of these is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        correct: 2
    }
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const questionCountElement = document.getElementById('question-count');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const finalScoreElement = document.getElementById('final-score');
const performanceMessageElement = document.getElementById('performance-message');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Initialize the quiz
function initQuiz() {
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
}

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    updateScore();
    showQuestion();
}

// Show current question
function showQuestion() {
    resetState();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update question and progress
    questionElement.textContent = currentQuestion.question;
    questionCountElement.textContent = `Question ${currentQuestionIndex + 1}/${quizQuestions.length}`;
    progressElement.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
    
    // Create options
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, index));
        optionsElement.appendChild(button);
    });
    
    // Disable next button initially
    nextBtn.disabled = true;
}

// Reset question state
function resetState() {
    nextBtn.disabled = true;
    optionsElement.innerHTML = '';
    selectedOption = null;
}

// Select an option
function selectOption(button, index) {
    if (selectedOption !== null) return;
    
    selectedOption = index;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Highlight selected option
    button.classList.add('selected');
    
    // Check if correct and update score
    const isCorrect = index === currentQuestion.correct;
    if (isCorrect) {
        score++;
        updateScore();
    }
    
    // Show correct/incorrect answers
    highlightAnswers();
    
    // Enable next button
    nextBtn.disabled = false;
}

// Highlight correct and incorrect answers
function highlightAnswers() {
    const options = document.querySelectorAll('.option');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    options.forEach((option, index) => {
        option.classList.remove('correct', 'incorrect');
        
        if (index === currentQuestion.correct) {
            option.classList.add('correct');
        } else if (index === selectedOption && index !== currentQuestion.correct) {
            option.classList.add('incorrect');
        }
    });
}

// Update score display
function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show final results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    finalScoreElement.textContent = `Your Score: ${score}/${quizQuestions.length}`;
    
    // Performance message
    const percentage = (score / quizQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 80) {
        message = 'Excellent! You are a quiz master! 🎉';
    } else if (percentage >= 60) {
        message = 'Good job! You know your stuff! 👍';
    } else if (percentage >= 40) {
        message = 'Not bad! Keep learning! 💪';
    } else {
        message = 'Keep practicing! You\'ll get better! 📚';
    }
    
    performanceMessageElement.textContent = message;
}

// Restart quiz
function restartQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);