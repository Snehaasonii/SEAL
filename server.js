const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Endpoint to handle user input
app.post('/process-input', (req, res) => {
    const userInput = req.body.text;
    
    // Here you can handle the user input and interact with your chatbot or language model
    // For simplicity, let's just log the user input for now
    console.log('User input:', userInput);
    
    // Send a response (you can send back the response from the chatbot here)
    res.send('Received: ' + userInput);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
