// let questionCount = 1;

// function addSubQuestion(button) {
//     const questionDiv = button.closest('.question');
//     const subquestionsDiv = questionDiv.querySelector('.subquestions');
//     const newSubQuestion = document.createElement('div');
//     newSubQuestion.className = 'subquestion';
//     newSubQuestion.innerHTML = `
//     <label>Subquestion:</label>
//     <input type="text" name="subquestion${questionCount}[]" required>
//     <label>Answer:</label>
//     <input type="text" name="answer${questionCount}[]" required>
//     <button type="button" class="removeSubQuestion" onclick="removeSubQuestion(this)">Remove</button>
//     `;
//     subquestionsDiv.appendChild(newSubQuestion);
// }

// function removeSubQuestion(button) {
//     const subquestionDiv = button.parentElement;
//     subquestionDiv.remove();
// }

// function addQuestion() {
//     questionCount++;
//     const questionsContainer = document.getElementById('questionsContainer');
//     const newQuestion = document.createElement('div');
//     newQuestion.className = 'question';
//     newQuestion.innerHTML = `
//     <label for="question${questionCount}">Question ${questionCount}:</label>
//     <input type="text" name="question${questionCount}" required>
//     <label>Answer:</label>
//     <input type="text" name="answer${questionCount}" required>
//     <div class="subquestions">
//         <button type="button" class="addSubQuestion" onclick="addSubQuestion(this)">Add Subquestion</button>
//     </div>
//     `;
//     questionsContainer.appendChild(newQuestion);
// }

// addQuestion(); // To add the first main question by default.



let questionCount = 1;

function addSubQuestion(button) {
    const questionDiv = button.closest('.question');
    const subquestionsDiv = questionDiv.querySelector('.subquestions');
    const newSubQuestion = document.createElement('div');
    newSubQuestion.className = 'subquestion';
    newSubQuestion.innerHTML = `
    <label>Subquestion:</label>
    <input type="text" name="subquestion${questionCount}[]" required>
    <div class="answer">
        <label>Answer:</label>
        <input type="text" name="answer${questionCount}[]" required>
    </div>
    <button type="button" class="removeSubQuestion" onclick="removeSubQuestion(this)">Remove</button>
    `;
    subquestionsDiv.appendChild(newSubQuestion);
}

function removeSubQuestion(button) {
    const subquestionDiv = button.parentElement;
    subquestionDiv.remove();
}

function addQuestion() {
    questionCount++;
    const questionsContainer = document.getElementById('questionsContainer');
    const newQuestion = document.createElement('div');
    newQuestion.className = 'question';
    newQuestion.innerHTML = `
    <label for="question${questionCount}">Question ${questionCount}:</label>
    <input type="text" name="question${questionCount}" required>
    <div class="answer">
        <label>Answer:</label>
        <input type="text" name="answer${questionCount}" required>
    </div>
    <div class="subquestions">
        <button type="button" class="addSubQuestion" onclick="addSubQuestion(this)">Add Subquestion</button>
    </div>
    `;
    questionsContainer.appendChild(newQuestion);
}
