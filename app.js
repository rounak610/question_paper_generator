const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Question = require('./questionModel');
const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');

const app = express();
const port = 3000;
const questionsFilePath = path.join(__dirname, 'questions.json');

app.use(bodyParser.json());

const questionStore = new QuestionStore(questionsFilePath);
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

app.post('/generateQuestionPaper', (req, res) => {
  const { totalMarks, distribution } = req.body;

  if (!totalMarks || !distribution || !Array.isArray(distribution)) {
    return res.status(400).json({ error: 'Invalid request format.' });
  }

  const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, distribution);
  res.json({ questionPaper });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
