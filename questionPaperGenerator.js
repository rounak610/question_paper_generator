class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  /*
  Handling edge cases:
    If we have two question of difficulty level "easy"
    eg: Qa, easy, score:5
        Qb, easy, score:16
    and the required marks for easy questions is 20
    then only one of the questions will be selected.
  */
  generateQuestionPaper(totalMarks, distribution) {
    const questionPaper = [];

    distribution.forEach(({ difficulty, percentage }) => {
      const questions = this.filterQuestionsByDifficulty(difficulty);
      const marks = (totalMarks * percentage) / 100;

      let totalMarksAdded = 0;
      while (totalMarksAdded <= marks && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const selectedQuestion = questions[randomIndex];

        if (totalMarksAdded + selectedQuestion.marks <= marks) {
          questionPaper.push(selectedQuestion);
          totalMarksAdded += selectedQuestion.marks;
        }
        questions.splice(randomIndex, 1);
      }
    });

    return questionPaper;
  }

  filterQuestionsByDifficulty(difficulty) {
    return this.questionStore
      .getQuestions()
      .filter((question) => question.difficulty === difficulty);
  }
}

module.exports = QuestionPaperGenerator;
