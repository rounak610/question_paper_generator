# Question Paper Generator

This is a simple Node.js application for generating question papers based on a specified distribution of marks across difficulty levels.
The questions are stored in a JSON file named `questions.json`.

## Getting Started

Follow these steps to run the application on your local machine.

### Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/rounak610/question_paper_generator.git
   cd question_paper_generator
   npm install express body-parser path
   ```

### Running the Application

1. Start the Node.js server.

   ```bash
   node app.js
   ```

   This will start the server, and you should see a message indicating that the server is running on http://localhost:3000.

2. Open your browser or use a tool like Postman to interact with the API. To generate a question paper, send a POST request to http://localhost:3000/generateQuestionPaper with the appropriate JSON body. For example:

```json
{
  "totalMarks": 100,
  "distribution": [
    { "difficulty": "Easy", "percentage": 20 },
    { "difficulty": "Medium", "percentage": 50 },
    { "difficulty": "Hard", "percentage": 30 }
  ]
}
```

OR

You can send a curl request:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"totalMarks":100,"distribution":[{"difficulty":"Easy","percentage":20},{"difficulty":"Medium","percentage":50},{"difficulty":"Hard","percentage":30}]}' http://localhost:3000/generateQuestionPaper
```

3. Stop the server when you're done. Press Ctrl + C in the terminal where the server is running.
