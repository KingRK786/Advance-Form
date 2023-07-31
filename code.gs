function doPost(e) {
  const sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1_rTCRLUkDhXZmpsSIEny2PoXUVKbe6Ph8nxzHCOCZ2Q/edit#gid=0').getActiveSheet();
  const formData = e.parameter;

  let mainQuestionCount = 1;
  let subQuestionCount = 1;

  while (formData[`question${mainQuestionCount}`]) {
    const mainQuestion = formData[`question${mainQuestionCount}`];
    const mainAnswer = formData[`answer${mainQuestionCount}`];

    let subquestions = [];
    let subanswers = [];

    while (formData[`subquestion${mainQuestionCount}_${subQuestionCount}`]) {
      const subQuestion = formData[`subquestion${mainQuestionCount}_${subQuestionCount}`];
      const subAnswer = formData[`answer${mainQuestionCount}_${subQuestionCount}`];

      subquestions.push(subQuestion);
      subanswers.push(subAnswer);

      subQuestionCount++;
    }

    sheet.appendRow([mainQuestion, mainAnswer, subquestions.join(','), subanswers.join(',')]);

    mainQuestionCount++;
    subQuestionCount = 1;
  }

  return ContentService.createTextOutput("Form submission successful.");
}
