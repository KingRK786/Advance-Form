
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

function submitForm() {
    const form = document.getElementById("questionForm");
    const formData = new FormData(form);

    let data = [];
    let currentData = {};
    for (let [key, value] of formData.entries()) {
        if (key.startsWith("question")) {
            currentData = { question: value, subquestions: [], answers: [] };
            data.push(currentData);
        } else if (key.startsWith("answer")) {
            currentData.answers.push(value);
        } else if (key.startsWith("subquestion")) {
            currentData.subquestions.push(value);
        }
    }

    const scriptURL = "https://script.google.com/macros/s/AKfycbxVOkfb15OK5LvTLva3FSSn8LMJWRaix2O4Y6s6EqoJjx_pbK7vTylK0yDZ5szAlVOH/exec";
    const url = `${scriptURL}?${encodeFormData(data)}`;

    fetch(url, { method: "POST" })
        .then((response) => {
            if (response.ok) {
                alert("Form submission successful.");
                form.reset();
            } else {
                alert("Form submission failed.");
            }
        })
        .catch((error) => {
            alert("Form submission failed.");
            console.error(error);
        });
}

function encodeFormData(data) {
    const formData = new FormData();
    data.forEach((item, index) => {
        formData.append(`question${index + 1}`, item.question);
        formData.append(`answer${index + 1}`, item.answers[0]);
        item.subquestions.forEach((subquestion, subIndex) => {
            formData.append(`subquestion${index + 1}_${subIndex + 1}`, subquestion);
            formData.append(`answer${index + 1}_${subIndex + 1}`, item.answers[subIndex + 1]);
        });
    });
    return new URLSearchParams(formData).toString();
}