// Main Application Script
// Interactive Todo List - Final Project

console.log('🚀 Interactive Todo List - Final Project');
console.log('========================================');

// Application State
class TodoApp {
    constructor() {
        this.todoManager = null;
        this.uiController = null;
        this.eventHandler = null;
        this.storageManager = null;
        this.isInitialized = false;
    }

    // Initialize the application
    async init() {
        try {
            console.log('Initializing Todo App...');
            
            // Show loading overlay
            this.showLoading(true);
            
            // Initialize storage manager
            this.storageManager = new StorageManager();
            await this.storageManager.init();
            
            // Initialize todo manager
            this.todoManager = new TodoManager(this.storageManager);
            
            // Initialize UI controller
            this.uiController = new UIController(this.todoManager);
            
            // Initialize event handler
            this.eventHandler = new EventHandler(this.todoManager, this.uiController);
            
            // Load todos from storage
            await this.todoManager.loadTodos();
            
            // Render initial UI
            this.uiController.render();
            
            // Set up event listeners
            this.eventHandler.setupEventListeners();
            
            // Initialize drag and drop
            this.initializeDragAndDrop();
            
            // Set up keyboard shortcuts
            this.setupKeyboardShortcuts();
            
            // Initialize accessibility features
            this.initializeAccessibility();
            
            this.isInitialized = true;
            console.log('✅ Todo App initialized successfully');
            
        } catch (error) {
            console.error('❌ Failed to initialize Todo App:', error);
            this.showError('Failed to initialize application. Please refresh the page.');
        } finally {
            this.showLoading(false);
        }
    }

    // Initialize drag and drop functionality
    initializeDragAndDrop() {
        const todoList = document.getElementById('todoList');
        if (!todoList) return;

        let draggedElement = null;
        let draggedIndex = null;

        // Make todo items draggable
        todoList.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('todo-item')) {
                draggedElement = e.target;
                draggedIndex = Array.from(todoList.children).indexOf(draggedElement);
                e.target.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', e.target.outerHTML);
            }
        });

        todoList.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('todo-item')) {
                e.target.classList.remove('dragging');
                draggedElement = null;
                draggedIndex = null;
            }
        });

        todoList.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            const afterElement = this.getDragAfterElement(todoList, e.clientY);
            if (afterElement == null) {
                todoList.appendChild(draggedElement);
            } else {
                todoList.insertBefore(draggedElement, afterElement);
            }
        });

        todoList.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedElement) {
                const newIndex = Array.from(todoList.children).indexOf(draggedElement);
                if (newIndex !== draggedIndex) {
                    this.todoManager.reorderTodos(draggedIndex, newIndex);
                    this.uiController.render();
                    this.showToast('Todos reordered successfully', 'success');
                }
            }
        });
    }

    // Get the element after which to drop the dragged element
    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.todo-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // Set up keyboard shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to add todo
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.eventHandler.handleAddTodo();
            }
            
            // Escape to cancel editing
            if (e.key === 'Escape') {
                this.eventHandler.cancelEditing();
            }
            
            // Delete key to remove selected todo
            if (e.key === 'Delete' && document.activeElement.classList.contains('todo-item')) {
                e.preventDefault();
                const todoId = document.activeElement.dataset.todoId;
                if (todoId) {
                    this.todoManager.deleteTodo(todoId);
                    this.uiController.render();
                    this.showToast('Todo deleted', 'success');
                }
            }
        });
    }

    // Initialize accessibility features
    initializeAccessibility() {
        // Set up ARIA live regions
        const todoList = document.getElementById('todoList');
        if (todoList) {
            todoList.setAttribute('aria-live', 'polite');
            todoList.setAttribute('aria-atomic', 'false');
        }

        // Set up focus management
        document.addEventListener('focusin', (e) => {
            if (e.target.classList.contains('todo-item')) {
                e.target.setAttribute('tabindex', '0');
            }
        });

        // Announce changes to screen readers
        this.announceToScreenReader = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };
    }

    // Show loading overlay
    showLoading(show) {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            if (show) {
                loadingOverlay.classList.add('show');
            } else {
                loadingOverlay.classList.remove('show');
            }
        }
    }

    // Show error message
    showError(message) {
        this.showToast(message, 'error');
        console.error(message);
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        toastContainer.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // Get app instance for global access
    static getInstance() {
        if (!window.todoApp) {
            window.todoApp = new TodoApp();
        }
        return window.todoApp;
    }
}

// Utility Functions
class Utils {
    // Generate unique ID
    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Debounce function
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Format date
    static formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }

    // Sanitize HTML
    static sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    // Validate email
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate URL
    static isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    // Get random color
    static getRandomColor() {
        const colors = [
            '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
            '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Copy to clipboard
    static async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
            return false;
        }
    }

    // Download file
    static downloadFile(content, filename, contentType = 'application/json') {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Read file
    static readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsText(file);
        });
    }
}

// Error Handling
class AppError extends Error {
    constructor(message, code = 'APP_ERROR', statusCode = 500) {
        super(message);
        this.name = 'AppError';
        this.code = code;
        this.statusCode = statusCode;
        this.timestamp = new Date().toISOString();
    }
}

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    if (window.todoApp) {
        window.todoApp.showError('An unexpected error occurred. Please refresh the page.');
    }
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    if (window.todoApp) {
        window.todoApp.showError('An unexpected error occurred. Please refresh the page.');
    }
});

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const app = TodoApp.getInstance();
        await app.init();
        
        // Show welcome message
        app.showToast('Welcome to your Todo List! 🎉', 'success');
        
    } catch (error) {
        console.error('Failed to initialize application:', error);
        document.body.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                text-align: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                color: #ef4444;
            ">
                <h1>❌ Application Error</h1>
                <p>Failed to initialize the Todo List application.</p>
                <p>Please refresh the page to try again.</p>
                <button onclick="location.reload()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                ">Refresh Page</button>
            </div>
        `;
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TodoApp, Utils, AppError };
}
