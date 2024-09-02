// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory storage for jobs and applications
let jobs = [];
let applications = [];

// Route to post a job
app.post('/post-job', (req, res) => {
    const job = req.body;
    jobs.push(job);
    res.status(201).send('Job posted successfully!');
});

// Route to get all jobs
app.get('/jobs', (req, res) => {
    res.json(jobs);
});

// Route to apply for a job
app.post('/apply', (req, res) => {
    const application = req.body;
    applications.push(application);
    res.status(201).send('Application submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
