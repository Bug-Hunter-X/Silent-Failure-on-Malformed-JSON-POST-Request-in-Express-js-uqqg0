const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      return res.status(400).json({ error: 'Missing user data' });
    }
    console.log('Received user:', user);
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(400).json({ error: 'Invalid JSON payload' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});