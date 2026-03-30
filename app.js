const express = require('express');
const app = express();
// Use the PORT environment variable if available, otherwise default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from EC2!',
    timestamp: new Date().toISOString()
  });
});

// A "Health Check" endpoint for your GitHub Actions to ping
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});