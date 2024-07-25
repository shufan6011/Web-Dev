const contextVocabList = [
    { context: "Not Finished Yet", correct: "Not Finished Yet", incorrect: ["Not Finished Yet", "Not Finished Yet", "Not Finished Yet"], explanation: "Not Finished Yet" },

];

let usedContextIndexes = [];

document.addEventListener('DOMContentLoaded', () => {
    loadContextQuestion();
});

function loadContextQuestion() {
    let currentContextQuestionIndex;

    if (usedContextIndexes.length === contextVocabList.length) {
        usedContextIndexes = [];
    }

    do {
        currentContextQuestionIndex = Math.floor(Math.random() * contextVocabList.length);
    } while (usedContextIndexes.includes(currentContextQuestionIndex));

    usedContextIndexes.push(currentContextQuestionIndex);

    const question = contextVocabList[currentContextQuestionIndex];
    document.getElementById('context-vocab-context').textContent = question.context;
    
    const choices = shuffle([question.correct, ...question.incorrect]);
    const buttons = document.querySelectorAll('.context-choice');
    buttons.forEach((button, index) => {
        button.textContent = choices[index];
        button.className = 'context-choice'; // Reset class
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkContextAnswer(button) {
    const question = contextVocabList[usedContextIndexes[usedContextIndexes.length - 1]];
    if (button.textContent === question.correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
    
    setTimeout(() => {
        showContextExplanation(question);
    }, 1500);
}

function showContextExplanation(question) {
    const explanationPage = `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="games.html" class="dropbtn">Games</a>
                        <div class="dropdown-content">
                            <a href="sat-vocab-definition-mcq.html">SAT Vocab Definition MCQ</a>
                            <a href="sat-vocab-context-mcq.html">SAT Vocab Context MCQ</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <h1>Vocabulary Explanation</h1>
        </header>
        <main id="games-content">
            <section id="sat-vocab-context-mcq">
                <div id="explanation">
                    <h2>${question.context}</h2>
                    <p>Explanation: ${question.explanation}</p>
                    <p>Correct Answer: ${question.correct}</p>
                    <button onclick="nextContextQuestion()">Next</button>
                </div>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 Created by Shufan Dong</p>
        </footer>
    `;

    document.body.innerHTML = explanationPage;
}

function nextContextQuestion() {
    document.location.reload();
}
