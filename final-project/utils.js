// Utility Functions
// Common utility functions used throughout the application

class Utils {
    // Generate unique ID
    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Debounce function - delays execution until after wait time has passed
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

    // Throttle function - limits execution to once per wait time
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

    // Format date for display
    static formatDate(date) {
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }

    // Format relative time (e.g., "2 hours ago")
    static formatRelativeTime(date) {
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) {
            return 'Just now';
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < 2592000) {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else {
            return this.formatDate(date);
        }
    }

    // Sanitize HTML to prevent XSS attacks
    static sanitizeHTML(str) {
        if (typeof str !== 'string') return '';
        
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    // Validate email address
    static isValidEmail(email) {
        if (typeof email !== 'string') return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate URL
    static isValidURL(url) {
        if (typeof url !== 'string') return false;
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    // Validate text input
    static validateText(text, minLength = 1, maxLength = 1000) {
        if (typeof text !== 'string') return false;
        const trimmed = text.trim();
        return trimmed.length >= minLength && trimmed.length <= maxLength;
    }

    // Get random color from predefined palette
    static getRandomColor() {
        const colors = [
            '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
            '#8b5cf6', '#06b6d4', '#84cc16', '#f97316',
            '#ec4899', '#6366f1', '#14b8a6', '#f59e0b'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Generate random string
    static generateRandomString(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Copy text to clipboard
    static async copyToClipboard(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const result = document.execCommand('copy');
                document.body.removeChild(textArea);
                return result;
            }
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
            return false;
        }
    }

    // Download file
    static downloadFile(content, filename, contentType = 'application/json') {
        try {
            const blob = new Blob([content], { type: contentType });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            return true;
        } catch (err) {
            console.error('Failed to download file:', err);
            return false;
        }
    }

    // Read file as text
    static readFile(file) {
        return new Promise((resolve, reject) => {
            if (!file || !(file instanceof File)) {
                reject(new Error('Invalid file'));
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    // Parse JSON safely
    static parseJSON(jsonString, defaultValue = null) {
        try {
            return JSON.parse(jsonString);
        } catch (err) {
            console.error('Failed to parse JSON:', err);
            return defaultValue;
        }
    }

    // Stringify JSON safely
    static stringifyJSON(obj, space = 2) {
        try {
            return JSON.stringify(obj, null, space);
        } catch (err) {
            console.error('Failed to stringify JSON:', err);
            return '{}';
        }
    }

    // Deep clone object
    static deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Date) return new Date(obj.getTime());
        if (obj instanceof Array) return obj.map(item => this.deepClone(item));
        if (typeof obj === 'object') {
            const clonedObj = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    clonedObj[key] = this.deepClone(obj[key]);
                }
            }
            return clonedObj;
        }
    }

    // Check if object is empty
    static isEmpty(obj) {
        if (obj === null || obj === undefined) return true;
        if (typeof obj === 'string') return obj.trim().length === 0;
        if (Array.isArray(obj)) return obj.length === 0;
        if (typeof obj === 'object') return Object.keys(obj).length === 0;
        return false;
    }

    // Get nested property safely
    static getNestedProperty(obj, path, defaultValue = undefined) {
        if (!obj || typeof obj !== 'object') return defaultValue;
        
        const keys = path.split('.');
        let current = obj;
        
        for (const key of keys) {
            if (current === null || current === undefined || !(key in current)) {
                return defaultValue;
            }
            current = current[key];
        }
        
        return current;
    }

    // Set nested property safely
    static setNestedProperty(obj, path, value) {
        if (!obj || typeof obj !== 'object') return false;
        
        const keys = path.split('.');
        const lastKey = keys.pop();
        let current = obj;
        
        for (const key of keys) {
            if (!(key in current) || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        }
        
        current[lastKey] = value;
        return true;
    }

    // Capitalize first letter
    static capitalize(str) {
        if (typeof str !== 'string' || str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // Convert to title case
    static toTitleCase(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/\w\S*/g, (txt) => 
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    }

    // Truncate text
    static truncateText(text, maxLength, suffix = '...') {
        if (typeof text !== 'string') return text;
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength - suffix.length) + suffix;
    }

    // Remove duplicates from array
    static removeDuplicates(array, key = null) {
        if (!Array.isArray(array)) return [];
        
        if (key) {
            const seen = new Set();
            return array.filter(item => {
                const value = this.getNestedProperty(item, key);
                if (seen.has(value)) return false;
                seen.add(value);
                return true;
            });
        } else {
            return [...new Set(array)];
        }
    }

    // Group array by key
    static groupBy(array, key) {
        if (!Array.isArray(array)) return {};
        
        return array.reduce((groups, item) => {
            const groupKey = this.getNestedProperty(item, key);
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(item);
            return groups;
        }, {});
    }

    // Sort array by key
    static sortBy(array, key, direction = 'asc') {
        if (!Array.isArray(array)) return [];
        
        return array.sort((a, b) => {
            const aVal = this.getNestedProperty(a, key);
            const bVal = this.getNestedProperty(b, key);
            
            if (aVal < bVal) return direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // Format file size
    static formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Check if device is mobile
    static isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Check if device is touch
    static isTouch() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    // Get browser info
    static getBrowserInfo() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        let version = 'Unknown';
        
        if (ua.indexOf('Chrome') > -1) {
            browser = 'Chrome';
            version = ua.match(/Chrome\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('Firefox') > -1) {
            browser = 'Firefox';
            version = ua.match(/Firefox\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('Safari') > -1) {
            browser = 'Safari';
            version = ua.match(/Version\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('Edge') > -1) {
            browser = 'Edge';
            version = ua.match(/Edge\/(\d+)/)?.[1] || 'Unknown';
        }
        
        return { browser, version };
    }

    // Check if feature is supported
    static isFeatureSupported(feature) {
        const features = {
            'localStorage': typeof Storage !== 'undefined',
            'sessionStorage': typeof Storage !== 'undefined',
            'clipboard': 'clipboard' in navigator,
            'geolocation': 'geolocation' in navigator,
            'camera': 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices,
            'notifications': 'Notification' in window,
            'serviceWorker': 'serviceWorker' in navigator,
            'webGL': !!document.createElement('canvas').getContext('webgl'),
            'webGL2': !!document.createElement('canvas').getContext('webgl2'),
            'webRTC': 'RTCPeerConnection' in window,
            'webAudio': 'AudioContext' in window || 'webkitAudioContext' in window
        };
        
        return features[feature] || false;
    }

    // Sleep function
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Retry function with exponential backoff
    static async retry(fn, maxAttempts = 3, delay = 1000) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                if (attempt === maxAttempts) {
                    throw lastError;
                }
                
                const waitTime = delay * Math.pow(2, attempt - 1);
                await this.sleep(waitTime);
            }
        }
    }

    // Create a simple hash
    static simpleHash(str) {
        let hash = 0;
        if (str.length === 0) return hash;
        
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        
        return Math.abs(hash).toString(36);
    }

    // Check if value is a valid number
    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    }

    // Check if value is a valid integer
    static isInteger(value) {
        return this.isNumber(value) && Number.isInteger(value);
    }

    // Check if value is a valid positive number
    static isPositiveNumber(value) {
        return this.isNumber(value) && value > 0;
    }

    // Check if value is a valid negative number
    static isNegativeNumber(value) {
        return this.isNumber(value) && value < 0;
    }

    // Check if value is zero
    static isZero(value) {
        return this.isNumber(value) && value === 0;
    }

    // Round number to specified decimal places
    static roundToDecimals(num, decimals = 2) {
        if (!this.isNumber(num)) return 0;
        return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    // Clamp number between min and max
    static clamp(num, min, max) {
        if (!this.isNumber(num)) return min;
        return Math.min(Math.max(num, min), max);
    }

    // Generate random number between min and max
    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Generate random integer between min and max (inclusive)
    static randomIntBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Shuffle array
    static shuffleArray(array) {
        if (!Array.isArray(array)) return [];
        
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Pick random element from array
    static pickRandom(array) {
        if (!Array.isArray(array) || array.length === 0) return undefined;
        return array[Math.floor(Math.random() * array.length)];
    }

    // Create range array
    static range(start, end, step = 1) {
        const result = [];
        if (step > 0) {
            for (let i = start; i < end; i += step) {
                result.push(i);
            }
        } else {
            for (let i = start; i > end; i += step) {
                result.push(i);
            }
        }
        return result;
    }

    // Check if two objects are equal
    static isEqual(obj1, obj2) {
        if (obj1 === obj2) return true;
        if (obj1 == null || obj2 == null) return false;
        if (typeof obj1 !== typeof obj2) return false;
        
        if (typeof obj1 !== 'object') return obj1 === obj2;
        
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        
        if (keys1.length !== keys2.length) return false;
        
        for (const key of keys1) {
            if (!keys2.includes(key)) return false;
            if (!this.isEqual(obj1[key], obj2[key])) return false;
        }
        
        return true;
    }
}

// Export for Node.js if available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
