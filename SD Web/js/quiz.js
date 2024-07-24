const vocabList = [
    {
        word: "Abate",
        correct: "Diminish",
        incorrect: ["Increase", "Ignore", "Deceive"],
        definition: "to reduce in amount, degree, or severity"
    },
    {
        word: "Abstain",
        correct: "Refrain",
        incorrect: ["Indulge", "Create", "Conceal"],
        definition: "to choose not to do something"
    },
    {
        word: "Aesthetic",
        correct: "Artistic",
        incorrect: ["Ugly", "Scientific", "Uninteresting"],
        definition: "concerned with beauty or the appreciation of beauty"
    },
];

let currentQuestionIndex = -1;
let previousQuestionIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

function loadQuestion() {
    do {
        currentQuestionIndex = Math.floor(Math.random() * vocabList.length);
    } while (currentQuestionIndex === previousQuestionIndex);

    const question = vocabList[currentQuestionIndex];
    document.getElementById('vocab-word').textContent = question.word;
    
    const choices = shuffle([question.correct, ...question.incorrect]);
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach((button, index) => {
        button.textContent = choices[index];
        button.className = 'choice'; // Reset class
    });

    previousQuestionIndex = currentQuestionIndex;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(button) {
    const question = vocabList[currentQuestionIndex];
    if (button.textContent === question.correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
    
    setTimeout(() => {
        showExplanation(question);
    }, 1500);
}

function showExplanation(question) {
    const explanationPage = `
        <header>
            <nav>
                <ul>
                    <li class="dropdown">
                        <a href="index.html" class="dropbtn">Home</a>
                        <div class="dropdown-content">
                            <a href="#home-section-1">Section 1</a>
                            <a href="#home-section-2">Section 2</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="games.html" class="dropbtn">Games</a>
                        <div class="dropdown-content">
                            <a href="#games-section-1">SAT Vocab MCQ</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <h1>Vocabulary Explanation</h1>
        </header>
        <main id="games-content">
            <section id="games-section-1">
                <div id="explanation">
                    <h2>${question.word}</h2>
                    <p>Definition: ${question.definition}</p>
                    <p>Correct Answer: ${question.correct}</p>
                    <button onclick="nextQuestion()">Next</button>
                </div>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 Your Website | Created by Shufan Dong</p>
        </footer>
    `;

    document.body.innerHTML = explanationPage;
}

function nextQuestion() {
    document.location.reload();
}
