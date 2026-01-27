document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const runBtn = document.getElementById('run-pipeline-btn');
    const statusBadge = document.getElementById('pipeline-status');
    const terminalContent = document.getElementById('terminal-content');
    
    // Steps
    const steps = {
        build: document.getElementById('step-build'),
        test: document.getElementById('step-test'),
        deploy: document.getElementById('step-deploy')
    };
    
    // Connectors
    const connect1 = document.getElementById('conn-1');
    const connect2 = document.getElementById('conn-2');

    // --- State ---
    let isRunning = false;

    // --- Functions ---
    runBtn.addEventListener('click', () => {
        if (isRunning) return;
        startPipeline();
    });

    function startPipeline() {
        isRunning = true;
        resetPipeline();
        
        // Update Status
        updateStatus('running', 'Running...');
        runBtn.disabled = true;
        
        // Clear Terminal
        terminalContent.innerHTML = '';
        addLog('$ git push origin main', 'text-muted');
        addLog('> Triggering workflow: CI/CD Pipeline', 'text-info');
        
        // Simulate Build Step
        setTimeout(() => {
            activateStep('build');
            addLog('> Starting job: Build', 'text-info');
            
            setTimeout(() => {
                addLog('  npm install...', 'text-muted');
                addLog('  Building project...', 'text-muted');
                
                setTimeout(() => {
                    completeStep('build');
                    activateConnector(connect1);
                    addLog('✓ Build completed successfully', 'text-success');
                    
                    // Simulate Test Step
                    startTestStep();
                }, 1500);
            }, 1000);
        }, 500);
    }

    function startTestStep() {
        setTimeout(() => {
            activateStep('test');
            addLog('> Starting job: Test', 'text-info');
            
            setTimeout(() => {
                addLog('  Running unit tests...', 'text-muted');
                addLog('  Running integration tests...', 'text-muted');
                
                setTimeout(() => {
                    completeStep('test');
                    activateConnector(connect2);
                    addLog('✓ All tests passed (45/45)', 'text-success');
                    
                    // Simulate Deploy Step
                    startDeployStep();
                }, 2000);
            }, 800);
        }, 500);
    }

    function startDeployStep() {
        setTimeout(() => {
            activateStep('deploy');
            addLog('> Starting job: Deploy', 'text-info');
            
            setTimeout(() => {
                addLog('  Connecting to production server...', 'text-muted');
                addLog('  Uploading artifacts...', 'text-muted');
                
                setTimeout(() => {
                    completeStep('deploy');
                    addLog('✓ Successfully deployed to production 🚀', 'text-success');
                    finishPipeline();
                }, 2000);
            }, 800);
        }, 500);
    }

    function finishPipeline() {
        updateStatus('success', 'Success');
        runBtn.disabled = false;
        runBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Run Again';
        isRunning = false;
    }

    // Helpers
    function updateStatus(type, text) {
        statusBadge.className = 'status-badge'; // Reset
        statusBadge.classList.add(`status-${type}`);
        statusBadge.innerText = text;
    }

    function addLog(message, className = '') {
        const line = document.createElement('div');
        line.className = `log-line ${className}`;
        line.innerText = message;
        terminalContent.appendChild(line);
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    function activateStep(stepName) {
        steps[stepName].classList.add('active');
        // Reset icon specific classes if needed, or add spinner
    }

    function completeStep(stepName) {
        steps[stepName].classList.remove('active');
        steps[stepName].classList.add('completed');
    }

    function activateConnector(element) {
        element.classList.add('completed');
    }

    function resetPipeline() {
        // Reset UI elements
        Object.values(steps).forEach(step => {
            step.classList.remove('active', 'completed');
        });
        connect1.className = 'connector';
        connect2.className = 'connector';
        runBtn.innerHTML = '<i class="fa-solid fa-play"></i> Run Workflow';
    }
});
