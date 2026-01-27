# 🚀 DevOps Task 8 – CI/CD Pipeline Using GitHub Actions

## 📌 Project Overview
This repository demonstrates a **basic CI/CD pipeline** implemented using **GitHub Actions**.  
The objective of this task is to understand **Continuous Integration (CI)** concepts, automation triggers, job execution flow, and failure handling.

This project is part of the **DevOps Internship – Task 8**.

---

## 🛠 Tools & Technologies Used
- **Version Control:** Git & GitHub  
- **CI/CD Tool:** GitHub Actions  
- **Workflow Language:** YAML  
- **Runner OS:** Ubuntu (GitHub-hosted runner)  
- **Project Type:** Simple HTML/CSS/JS application about CI/CD Pipeline Using GitHub Actions with Demo workflow.

---

## 📁 Repository Structure
```
devops-task-8-ci-cd/
│
├── index.html
├── README.md
└── .github/
    └── workflows/
        └── ci.yml
```

---

## 🔄 What is CI/CD?
**CI (Continuous Integration)** is the practice of automatically building and testing code whenever changes are pushed to a repository.

**CD (Continuous Deployment/Delivery)** automates the deployment process after successful CI checks.

In this task, the focus is on **CI with a simulated deployment stage**.

---

## ⚙️ GitHub Actions Workflow

### 📍 Workflow File
`.github/workflows/ci.yml`

### 🔔 Workflow Triggers
The workflow runs automatically on:
- **Push events** to the `main` branch
- **Pull Request events** to the `main` branch

---

## 🧩 CI/CD Pipeline Jobs

### 1️⃣ Build Job
- Checks out the source code
- Simulates the build process

### 2️⃣ Test Job
- Runs only if the build job succeeds
- Simulates test execution

### 3️⃣ Deploy Job
- Runs only if the test job succeeds
- Simulates application deployment

---

## 🔁 Job Execution Flow
```
Push / Pull Request
      ↓
    Build
      ↓
     Test
      ↓
    Deploy
```
If any job fails, the next job will **not** execute.

---

## 📄 Workflow Configuration (`ci.yml`)
```yaml
name: CI Pipeline with Build, Test & Deploy

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    name: Build Job
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Build step
        run: echo "Build completed successfully"

  test:
    name: Test Job
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Run tests
        run: echo "All tests passed successfully"

  deploy:
    name: Deploy Job
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Deploy application
        run: echo "Application deployed successfully"
```

---

## ❌ Failure Handling

* The pipeline was intentionally broken using `exit 1`
* The workflow failed (red ❌)
* The issue was fixed and the pipeline ran successfully again (green ✅)

This helped in understanding:

* Pipeline failure detection
* Debugging using execution logs
* Job dependency handling

---

## 🔐 Secrets & Environment Variables

* GitHub Actions supports **encrypted secrets**
* Secrets are stored at:
  ```
  Repository → Settings → Secrets → Actions
  ```
* Secrets can be accessed securely using:
  ```
  ${{ secrets.SECRET_NAME }}
  ```

(No secrets were required for this basic project.)

---

## 📸 Workflow Execution Proof

* Successful workflow execution screenshots are available in the **Actions** tab
* Each job (Build, Test, Deploy) shows a **green check mark**

---

## 📚 Key Learnings

* CI/CD fundamentals
* GitHub Actions workflow creation
* Automated pipeline triggers
* Job vs Step difference
* Sequential job execution using `needs`
* Failure handling and debugging
* DevOps automation basics

---

## 🎯 Interview Questions & Answers

### What is CI/CD?
CI/CD automates code integration, testing, and deployment to improve software quality and delivery speed.

### What triggers a GitHub Action?
Push events, pull requests, scheduled events, and manual triggers.

### Difference between Job and Step?
* **Job:** A collection of steps running on the same runner
* **Step:** An individual task within a job

### How are secrets managed?
Using GitHub encrypted secrets accessible only during workflow execution.

### Why is CI important?
It helps detect bugs early, improves code quality, and reduces manual effort.

---

## ✅ Final Outcome

* Successfully implemented a CI/CD pipeline using GitHub Actions
* Understood automation triggers and job execution flow
* Gained hands-on DevOps CI experience

---

## 📎 Submission Checklist

* ✅ GitHub repository created
* ✅ CI workflow implemented
* ✅ Successful pipeline execution
* ✅ Failure handling tested
* ✅ README documentation completed

---

### ⭐ Conclusion
This task provided practical exposure to CI/CD pipelines and GitHub Actions, forming a strong foundation for real-world DevOps practices.
