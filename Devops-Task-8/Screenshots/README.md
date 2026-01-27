## 🧪 Pipeline Behavior

* The CI/CD pipeline is implemented using **GitHub Actions** and is defined in the `ci.yml` workflow file.

* The workflow is automatically triggered on **every push** to the `main` branch and on **pull request events**.

* The pipeline consists of **three sequential jobs**:

  1. **Build Job**

     * Checks out the repository code.
     * Simulates the build process using basic validation commands.
  2. **Test Job**

     * Executes only after the build job completes successfully.
     * Simulates test execution to verify application correctness.
  3. **Deploy Job**

     * Executes only after all tests pass.
     * Simulates deployment of the application.

* Job dependencies are managed using the `needs` keyword, ensuring proper execution order:

  ```
  Build → Test → Deploy
  ```

* If any job fails, the pipeline stops and subsequent jobs do not execute.

* Workflow execution status and logs are monitored through the **GitHub Actions** tab.

* Successful pipeline execution is verified using **workflow logs and screenshots** showing green check marks for all jobs.

---

## 📚 Learning Outcomes

Through this task, I gained hands-on experience and understanding of:

* CI/CD fundamentals and DevOps automation concepts
* Creating and configuring GitHub Actions workflows using YAML
* Automatic pipeline triggers on push and pull request events
* Difference between **jobs** and **steps** in GitHub Actions
* Sequential job execution using dependencies (`needs`)
* Monitoring workflow execution and analyzing logs
* Handling pipeline failures by intentionally breaking and fixing the workflow
* Importance of Continuous Integration in maintaining code quality and reliability

---

## ✅ Summary

This task helped me build a strong foundation in CI/CD practices by implementing an automated pipeline that validates code changes efficiently and consistently using GitHub Actions.

