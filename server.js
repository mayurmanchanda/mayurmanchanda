const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/ask-copilot', async (req, res) => {
  const { question } = req.body;

  const copilotResponse = await fetch('https://copilot.microsoft.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question })
  });

  const data = await copilotResponse.json();
  res.json({ answer: data.answer });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});