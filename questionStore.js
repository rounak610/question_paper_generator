const fs = require("fs");
class QuestionStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.questions = this.loadQuestions();
  }

  loadQuestions() {
    try {
      const fileContent = fs.readFileSync(this.filePath, "utf8");
      return JSON.parse(fileContent);
    } catch (error) {
      console.error("Error loading questions from file:", error.message);
      return [];
    }
  }

  getQuestions() {
    return this.questions;
  }
}

module.exports = QuestionStore;
