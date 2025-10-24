document.addEventListener('DOMContentLoaded', () => {
    // Utility function for logging with timestamps
    function logWithTime(message, logElement, type = 'info') {
        const time = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = type;
        logEntry.innerHTML = `[${time}] ${message}`;
        logElement.insertBefore(logEntry, logElement.firstChild);

        // Keep only last 10 entries
        while (logElement.children.length > 10) {
            logElement.removeChild(logElement.lastChild);
        }
    }

    // Event Propagation Demo
    const propagationDemo = document.getElementById('propagation-demo');
    const propagationLog = propagationDemo.querySelector('.log-content');
    const useCapture = document.getElementById('useCapture');
    const stopPropagation = document.getElementById('stopPropagation');

    function handleBoxClick(e) {
        const phase = e.eventPhase === 1 ? 'Capture' :
                     e.eventPhase === 2 ? 'Target' : 'Bubble';
        
        logWithTime(`${e.currentTarget.className.split(' ')[1]} - ${phase} phase`, propagationLog);
        
        if (stopPropagation.checked) {
            e.stopPropagation();
        }
        
        // Visual feedback
        e.currentTarget.classList.add('highlight');
        setTimeout(() => {
            
            e.target.classList.remove('highlight');
        }, 500);
    }

    function setupPropagationListeners() {
        const boxes = propagationDemo.querySelectorAll('.event-box');
        boxes.forEach(box => {
            box.removeEventListener('click', handleBoxClick, true);
            box.removeEventListener('click', handleBoxClick, false);
            box.addEventListener('click', handleBoxClick, useCapture.checked);
        });
        propagationLog.innerHTML = '';
        logWithTime('Event listeners reset - ' + 
                   (useCapture.checked ? 'Capture' : 'Bubble') + ' phase', propagationLog);
    }

    useCapture.addEventListener('change', setupPropagationListeners);
    setupPropagationListeners();

    // Event Delegation Demo
    const delegationList = document.getElementById('delegationList');
    const delegationLog = document.getElementById('delegationLog').querySelector('.log-content');
    let itemCount = 1;

    document.getElementById('addItem').addEventListener('click', () => {
        itemCount++;
        const li = document.createElement('li');
        li.innerHTML = `
            Item ${itemCount}
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        `;
        delegationList.appendChild(li);
        logWithTime(`Added item ${itemCount}`, delegationLog, 'info');
    });

    delegationList.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const li = button.closest('li');
        const action = button.classList.contains('edit') ? 'edit' : 'delete';

        if (action === 'delete') {
            li.style.opacity = '0';
            setTimeout(() => {
                li.remove();
                logWithTime(`Deleted ${li.textContent.trim()}`, delegationLog, 'warning');
            }, 300);
        } else if (action === 'edit') {
            const text = li.firstChild.textContent.trim();
            const newText = prompt('Edit item:', text);
            if (newText && newText !== text) {
                li.firstChild.textContent = newText;
                logWithTime(`Edited: ${text} → ${newText}`, delegationLog, 'info');
            }
        }
    });

    // Custom Events Demo
    const notificationArea = document.getElementById('notificationArea');

    function createNotification(type, message) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `<i class="fas fa-${type === 'info' ? 'info-circle' : 
                                                    type === 'warning' ? 'exclamation-triangle' : 
                                                    'times-circle'}"></i> ${message}`;
        
        notificationArea.insertBefore(notification, notificationArea.firstChild);
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    document.getElementById('triggerInfo').addEventListener('click', () => {
        const event = new CustomEvent('notification', {
            detail: { type: 'info', message: 'This is an info message' }
        });
        document.dispatchEvent(event);
    });

    document.getElementById('triggerWarning').addEventListener('click', () => {
        const event = new CustomEvent('notification', {
            detail: { type: 'warning', message: 'This is a warning message' }
        });
        document.dispatchEvent(event);
    });

    document.getElementById('triggerError').addEventListener('click', () => {
        const event = new CustomEvent('notification', {
            detail: { type: 'error', message: 'This is an error message' }
        });
        document.dispatchEvent(event);
    });

    document.addEventListener('notification', (e) => {
        createNotification(e.detail.type, e.detail.message);
    });

    // Form Events Demo
    const form = document.getElementById('interactiveForm');
    const formLog = document.getElementById('formLog').querySelector('.log-content');
    
    const validators = {
        username: (value) => {
            if (value.length < 3) return 'Username must be at least 3 characters';
            if (!/^[a-zA-Z0-9]+$/.test(value)) return 'Username can only contain letters and numbers';
            return '';
        },
        email: (value) => {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
            return '';
        },
        password: (value) => {
            if (value.length < 8) return 'Password must be at least 8 characters';
            if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
            if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
            return '';
        }
    };

    function validateField(input) {
        const validator = validators[input.id];
        const feedback = input.nextElementSibling;
        
        if (validator) {
            const error = validator(input.value);
            feedback.textContent = error || 'Looks good!';
            feedback.className = 'validation-feedback ' + (error ? 'error' : 'success');
            return !error;
        }
        return true;
    }

    form.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT') {
            validateField(e.target);
            logWithTime(`${e.target.id} field changed`, formLog, 'info');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate all fields
        form.querySelectorAll('input').forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            logWithTime('Form submitted successfully!', formLog, 'info');
            // Simulate API call
            setTimeout(() => {
                form.reset();
                form.querySelectorAll('.validation-feedback').forEach(feedback => {
                    feedback.textContent = '';
                });
            }, 1000);
        } else {
            logWithTime('Form has validation errors', formLog, 'error');
        }
    });

    // Keyboard Events Demo
    const keyDisplay = document.querySelector('.key-display');
    const keyboardLog = document.getElementById('keyboardLog').querySelector('.log-content');

    document.addEventListener('keydown', (e) => {
        // Prevent default browser shortcuts
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'z')) {
            e.preventDefault();
        }

        const modifiers = [];
        if (e.ctrlKey) modifiers.push('Ctrl');
        if (e.shiftKey) modifiers.push('Shift');
        if (e.altKey) modifiers.push('Alt');
        if (e.metaKey) modifiers.push('Meta');

        const keyName = e.key === ' ' ? 'Space' : e.key;
        const displayText = [...modifiers, keyName].join(' + ');

        keyDisplay.textContent = displayText;
        logWithTime(`Key pressed: ${displayText}`, keyboardLog);

        // Handle specific shortcuts
        if (e.ctrlKey && e.key === 's') {
            logWithTime('Save shortcut triggered', keyboardLog, 'warning');
        }
    });
});