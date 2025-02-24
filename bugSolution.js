const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }
  // ... further logic to fetch user data ...
  res.send({ userId });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});