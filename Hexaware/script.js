// script.js
document.getElementById('jobForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const description = document.getElementById('description').value;

    const response = await fetch('/post-job', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, company, description })
    });

    if (response.ok) {
        alert('Job posted successfully!');
        loadJobs();
    }
});

async function loadJobs() {
    const response = await fetch('/jobs');
    const jobs = await response.json();
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    jobs.forEach((job, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${job.title} at ${job.company}`;
        jobList.appendChild(li);
    });
}

document.getElementById('applicationForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const applicantName = document.getElementById('applicantName').value;
    const jobId = document.getElementById('jobId').value;
    const coverLetter = document.getElementById('coverLetter').value;

    const response = await fetch('/apply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ applicantName, jobId, coverLetter })
    });

    if (response.ok) {
        alert('Application submitted successfully!');
    }
});

// Initial load
loadJobs();
