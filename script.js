let questionCount = 1;

function addSubQuestion(button) {
    const subquestionsDiv = button.parentElement;
    const newSubQuestion = document.createElement("input");
    newSubQuestion.type = "text";
    newSubQuestion.name = `subquestion${questionCount}`;
    subquestionsDiv.insertBefore(newSubQuestion, button);
}

function addQuestion() {
    questionCount++;
    const questionsContainer = document.getElementById("questionsContainer");
    const newQuestion = document.createElement("div");
    newQuestion.className = "question";
    newQuestion.innerHTML = `
    <label for="question${questionCount}">Question ${questionCount}:</label>
    <input type="text" name="question${questionCount}" required>
    <div class="subquestions">
        <button type="button" class="addSubQuestion" onclick="addSubQuestion(this)">Add Subquestion</button>
    </div>
    `;
    questionsContainer.appendChild(newQuestion);
}
