// Lesson 5: Styling and Animation
// CSS manipulation and animation techniques

console.log("🎓 Lesson 5: Styling and Animation");
console.log("=================================");

// Note: This lesson is designed to run in a browser environment
// For Node.js, we'll simulate DOM operations

// 📚 1. Understanding CSS Manipulation
console.log("\n📚 1. Understanding CSS Manipulation");
console.log("---------------------------------");

console.log("CSS manipulation allows you to:");
console.log("- Change element styles dynamically");
console.log("- Apply CSS classes conditionally");
console.log("- Create responsive designs");
console.log("- Implement theme switching");

// 📚 2. Style Property Manipulation
console.log("\n📚 2. Style Property Manipulation");
console.log("--------------------------------");

class StyleManager {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const div = {
            id: 'styled-div',
            tagName: 'DIV',
            className: 'container',
            style: {},
            textContent: 'Styled Element'
        };
        
        const button = {
            id: 'styled-button',
            tagName: 'BUTTON',
            className: 'btn',
            style: {},
            textContent: 'Click Me'
        };
        
        const paragraph = {
            id: 'styled-paragraph',
            tagName: 'P',
            className: 'text',
            style: {},
            textContent: 'This is a styled paragraph'
        };
        
        this.elements.set('div', div);
        this.elements.set('button', button);
        this.elements.set('paragraph', paragraph);
    }
    
    setStyle(element, property, value) {
        if (!element.style) {
            element.style = {};
        }
        element.style[property] = value;
        console.log(`Set style ${property}: ${value} on ${element.tagName}`);
    }
    
    getStyle(element, property) {
        const value = element.style ? element.style[property] : '';
        console.log(`Get style ${property} from ${element.tagName}: "${value}"`);
        return value;
    }
    
    setStyles(element, styles) {
        if (!element.style) {
            element.style = {};
        }
        Object.assign(element.style, styles);
        console.log(`Set multiple styles on ${element.tagName}:`, styles);
    }
    
    removeStyle(element, property) {
        if (element.style && element.style.hasOwnProperty(property)) {
            delete element.style[property];
            console.log(`Removed style ${property} from ${element.tagName}`);
        }
    }
    
    getComputedStyle(element) {
        const styles = element.style || {};
        console.log(`Computed styles for ${element.tagName}:`, styles);
        return styles;
    }
    
    setCSSVariable(element, variableName, value) {
        if (!element.style) {
            element.style = {};
        }
        element.style.setProperty(`--${variableName}`, value);
        console.log(`Set CSS variable --${variableName}: ${value} on ${element.tagName}`);
    }
    
    getCSSVariable(element, variableName) {
        const value = element.style ? element.style.getPropertyValue(`--${variableName}`) : '';
        console.log(`Get CSS variable --${variableName} from ${element.tagName}: "${value}"`);
        return value;
    }
}

const styleManager = new StyleManager();

// Get mock elements
const div = styleManager.elements.get('div');
const button = styleManager.elements.get('button');
const paragraph = styleManager.elements.get('paragraph');

// Apply styles
styleManager.setStyle(div, 'backgroundColor', 'lightblue');
styleManager.setStyle(div, 'padding', '20px');
styleManager.setStyle(div, 'border', '2px solid #333');
styleManager.setStyle(div, 'borderRadius', '10px');

// Set multiple styles at once
styleManager.setStyles(button, {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
});

// Work with CSS variables
styleManager.setCSSVariable(div, 'primary-color', '#007bff');
styleManager.setCSSVariable(div, 'secondary-color', '#6c757d');
styleManager.getCSSVariable(div, 'primary-color');

// 📚 3. Class Manipulation
console.log("\n📚 3. Class Manipulation");
console.log("----------------------");

class ClassManager {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'class-element',
            tagName: 'DIV',
            className: 'base-class',
            classList: ['base-class']
        };
        
        this.elements.set('element', element);
    }
    
    addClass(element, className) {
        if (!element.classList) {
            element.classList = element.className ? element.className.split(' ') : [];
        }
        
        if (!element.classList.includes(className)) {
            element.classList.push(className);
            element.className = element.classList.join(' ');
            console.log(`Added class "${className}" to ${element.tagName}`);
        }
    }
    
    removeClass(element, className) {
        if (element.classList) {
            const index = element.classList.indexOf(className);
            if (index > -1) {
                element.classList.splice(index, 1);
                element.className = element.classList.join(' ');
                console.log(`Removed class "${className}" from ${element.tagName}`);
            }
        }
    }
    
    toggleClass(element, className) {
        if (element.classList && element.classList.includes(className)) {
            this.removeClass(element, className);
        } else {
            this.addClass(element, className);
        }
    }
    
    hasClass(element, className) {
        const hasClass = element.classList ? element.classList.includes(className) : false;
        console.log(`${element.tagName} has class "${className}": ${hasClass}`);
        return hasClass;
    }
    
    replaceClass(element, oldClass, newClass) {
        if (element.classList) {
            const index = element.classList.indexOf(oldClass);
            if (index > -1) {
                element.classList[index] = newClass;
                element.className = element.classList.join(' ');
                console.log(`Replaced class "${oldClass}" with "${newClass}" on ${element.tagName}`);
            }
        }
    }
    
    getClasses(element) {
        const classes = element.classList || [];
        console.log(`Classes on ${element.tagName}:`, classes);
        return classes;
    }
}

const classManager = new ClassManager();

// Get mock element
const classElement = classManager.elements.get('element');

// Test class manipulation
classManager.addClass(classElement, 'active');
classManager.addClass(classElement, 'highlighted');
classManager.hasClass(classElement, 'active');
classManager.toggleClass(classElement, 'hidden');
classManager.replaceClass(classElement, 'base-class', 'new-base-class');
classManager.getClasses(classElement);

// 📚 4. Animation Techniques
console.log("\n📚 4. Animation Techniques");
console.log("-------------------------");

class AnimationManager {
    constructor() {
        this.elements = new Map();
        this.animations = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'animated-element',
            tagName: 'DIV',
            className: 'box',
            style: {
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                position: 'relative',
                left: '0px',
                top: '0px'
            }
        };
        
        this.elements.set('element', element);
    }
    
    animate(element, properties, duration = 1000, easing = 'ease') {
        const animationId = `animation-${Date.now()}`;
        const startTime = Date.now();
        const startValues = {};
        
        // Store initial values
        Object.keys(properties).forEach(prop => {
            startValues[prop] = this.parseValue(element.style[prop] || '0px');
        });
        
        const animation = {
            id: animationId,
            element: element,
            properties: properties,
            duration: duration,
            easing: easing,
            startTime: startTime,
            startValues: startValues,
            isRunning: true
        };
        
        this.animations.set(animationId, animation);
        console.log(`Started animation ${animationId} for ${element.tagName}`);
        
        // Simulate animation
        this.runAnimation(animation);
        
        return animationId;
    }
    
    parseValue(value) {
        if (typeof value === 'number') return value;
        if (typeof value === 'string') {
            const num = parseFloat(value);
            return isNaN(num) ? 0 : num;
        }
        return 0;
    }
    
    runAnimation(animation) {
        const { element, properties, duration, startTime, startValues } = animation;
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (progress < 1) {
            // Apply easing
            const easedProgress = this.applyEasing(progress, animation.easing);
            
            // Update properties
            Object.keys(properties).forEach(prop => {
                const startValue = startValues[prop];
                const endValue = this.parseValue(properties[prop]);
                const currentValue = startValue + (endValue - startValue) * easedProgress;
                
                if (prop.includes('color')) {
                    element.style[prop] = this.interpolateColor(startValue, endValue, easedProgress);
                } else {
                    element.style[prop] = `${currentValue}px`;
                }
            });
            
            // Continue animation
            setTimeout(() => this.runAnimation(animation), 16); // ~60fps
        } else {
            // Animation complete
            animation.isRunning = false;
            console.log(`Animation ${animation.id} completed`);
        }
    }
    
    applyEasing(progress, easing) {
        switch (easing) {
            case 'ease-in':
                return progress * progress;
            case 'ease-out':
                return 1 - Math.pow(1 - progress, 2);
            case 'ease-in-out':
                return progress < 0.5 
                    ? 2 * progress * progress 
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            case 'linear':
            default:
                return progress;
        }
    }
    
    interpolateColor(start, end, progress) {
        // Simple color interpolation (in real implementation, you'd use proper color parsing)
        return `rgb(${Math.round(255 * progress)}, ${Math.round(255 * (1 - progress))}, 0)`;
    }
    
    stopAnimation(animationId) {
        const animation = this.animations.get(animationId);
        if (animation) {
            animation.isRunning = false;
            this.animations.delete(animationId);
            console.log(`Stopped animation ${animationId}`);
        }
    }
    
    pauseAnimation(animationId) {
        const animation = this.animations.get(animationId);
        if (animation) {
            animation.isPaused = true;
            console.log(`Paused animation ${animationId}`);
        }
    }
    
    resumeAnimation(animationId) {
        const animation = this.animations.get(animationId);
        if (animation) {
            animation.isPaused = false;
            console.log(`Resumed animation ${animationId}`);
        }
    }
}

const animationManager = new AnimationManager();

// Get mock element
const animatedElement = animationManager.elements.get('element');

// Test animations
const animationId1 = animationManager.animate(animatedElement, {
    left: '200px',
    backgroundColor: 'blue'
}, 2000, 'ease-in-out');

const animationId2 = animationManager.animate(animatedElement, {
    width: '200px',
    height: '200px'
}, 1500, 'ease-out');

// 📚 5. Transition Effects
console.log("\n📚 5. Transition Effects");
console.log("----------------------");

class TransitionManager {
    constructor() {
        this.elements = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'transition-element',
            tagName: 'DIV',
            className: 'transition-box',
            style: {
                width: '100px',
                height: '100px',
                backgroundColor: 'green',
                transition: 'all 0.3s ease'
            }
        };
        
        this.elements.set('element', element);
    }
    
    setTransition(element, property, duration, easing = 'ease') {
        if (!element.style) {
            element.style = {};
        }
        
        const transition = `${property} ${duration}ms ${easing}`;
        element.style.transition = transition;
        console.log(`Set transition on ${element.tagName}: ${transition}`);
    }
    
    setMultipleTransitions(element, transitions) {
        if (!element.style) {
            element.style = {};
        }
        
        const transitionString = Object.entries(transitions)
            .map(([prop, config]) => `${prop} ${config.duration}ms ${config.easing}`)
            .join(', ');
        
        element.style.transition = transitionString;
        console.log(`Set multiple transitions on ${element.tagName}: ${transitionString}`);
    }
    
    triggerTransition(element, property, value) {
        if (!element.style) {
            element.style = {};
        }
        
        console.log(`Triggering transition: ${property} = ${value}`);
        element.style[property] = value;
        
        // Simulate transition completion
        setTimeout(() => {
            console.log(`Transition completed: ${property} = ${value}`);
        }, 300);
    }
    
    removeTransition(element, property = null) {
        if (!element.style) {
            element.style = {};
        }
        
        if (property) {
            // Remove specific property from transition
            const transitions = element.style.transition.split(',');
            const filteredTransitions = transitions.filter(t => !t.includes(property));
            element.style.transition = filteredTransitions.join(',');
            console.log(`Removed transition for ${property} from ${element.tagName}`);
        } else {
            // Remove all transitions
            element.style.transition = 'none';
            console.log(`Removed all transitions from ${element.tagName}`);
        }
    }
}

const transitionManager = new TransitionManager();

// Get mock element
const transitionElement = transitionManager.elements.get('element');

// Test transitions
transitionManager.setTransition(transitionElement, 'width', 500, 'ease-in-out');
transitionManager.setTransition(transitionElement, 'height', 300, 'ease-out');

transitionManager.setMultipleTransitions(transitionElement, {
    width: { duration: 400, easing: 'ease' },
    height: { duration: 400, easing: 'ease' },
    backgroundColor: { duration: 200, easing: 'linear' }
});

transitionManager.triggerTransition(transitionElement, 'width', '200px');
transitionManager.triggerTransition(transitionElement, 'height', '150px');

// 📚 6. Responsive Design
console.log("\n📚 6. Responsive Design");
console.log("---------------------");

class ResponsiveManager {
    constructor() {
        this.elements = new Map();
        this.breakpoints = {
            mobile: 768,
            tablet: 1024,
            desktop: 1200
        };
        this.currentBreakpoint = 'desktop';
        this.setupMockElements();
    }
    
    setupMockElements() {
        const container = {
            id: 'responsive-container',
            tagName: 'DIV',
            className: 'container',
            style: {
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px'
            }
        };
        
        const grid = {
            id: 'responsive-grid',
            tagName: 'DIV',
            className: 'grid',
            style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }
        };
        
        this.elements.set('container', container);
        this.elements.set('grid', grid);
    }
    
    getCurrentBreakpoint() {
        return this.currentBreakpoint;
    }
    
    setBreakpoint(breakpoint) {
        this.currentBreakpoint = breakpoint;
        console.log(`Current breakpoint: ${breakpoint}`);
        this.applyResponsiveStyles();
    }
    
    applyResponsiveStyles() {
        const grid = this.elements.get('grid');
        
        switch (this.currentBreakpoint) {
            case 'mobile':
                grid.style.gridTemplateColumns = '1fr';
                grid.style.gap = '10px';
                console.log('Applied mobile styles');
                break;
            case 'tablet':
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                grid.style.gap = '15px';
                console.log('Applied tablet styles');
                break;
            case 'desktop':
                grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                grid.style.gap = '20px';
                console.log('Applied desktop styles');
                break;
        }
    }
    
    addResponsiveClass(element, className, breakpoint) {
        const responsiveClass = `${className}-${breakpoint}`;
        if (!element.classList) {
            element.classList = element.className ? element.className.split(' ') : [];
        }
        
        if (!element.classList.includes(responsiveClass)) {
            element.classList.push(responsiveClass);
            element.className = element.classList.join(' ');
            console.log(`Added responsive class "${responsiveClass}" to ${element.tagName}`);
        }
    }
    
    removeResponsiveClass(element, className, breakpoint) {
        const responsiveClass = `${className}-${breakpoint}`;
        if (element.classList) {
            const index = element.classList.indexOf(responsiveClass);
            if (index > -1) {
                element.classList.splice(index, 1);
                element.className = element.classList.join(' ');
                console.log(`Removed responsive class "${responsiveClass}" from ${element.tagName}`);
            }
        }
    }
}

const responsiveManager = new ResponsiveManager();

// Test responsive design
responsiveManager.setBreakpoint('mobile');
responsiveManager.setBreakpoint('tablet');
responsiveManager.setBreakpoint('desktop');

// 📚 7. Theme Management
console.log("\n📚 7. Theme Management");
console.log("--------------------");

class ThemeManager {
    constructor() {
        this.elements = new Map();
        this.themes = {
            light: {
                '--primary-color': '#007bff',
                '--secondary-color': '#6c757d',
                '--background-color': '#ffffff',
                '--text-color': '#333333',
                '--border-color': '#dee2e6'
            },
            dark: {
                '--primary-color': '#0d6efd',
                '--secondary-color': '#6c757d',
                '--background-color': '#212529',
                '--text-color': '#ffffff',
                '--border-color': '#495057'
            },
            highContrast: {
                '--primary-color': '#000000',
                '--secondary-color': '#ffffff',
                '--background-color': '#ffffff',
                '--text-color': '#000000',
                '--border-color': '#000000'
            }
        };
        this.currentTheme = 'light';
        this.setupMockElements();
    }
    
    setupMockElements() {
        const root = {
            id: 'root',
            tagName: 'HTML',
            className: '',
            style: {}
        };
        
        this.elements.set('root', root);
    }
    
    setTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            const root = this.elements.get('root');
            
            // Apply theme variables
            Object.entries(this.themes[themeName]).forEach(([variable, value]) => {
                if (!root.style) {
                    root.style = {};
                }
                root.style.setProperty(variable, value);
            });
            
            // Add theme class
            root.className = `theme-${themeName}`;
            
            console.log(`Applied theme: ${themeName}`);
        } else {
            console.log(`Theme "${themeName}" not found`);
        }
    }
    
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    getAvailableThemes() {
        return Object.keys(this.themes);
    }
    
    createCustomTheme(themeName, variables) {
        this.themes[themeName] = variables;
        console.log(`Created custom theme: ${themeName}`);
    }
    
    toggleTheme() {
        const themes = this.getAvailableThemes();
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.setTheme(themes[nextIndex]);
    }
}

const themeManager = new ThemeManager();

// Test theme management
themeManager.setTheme('light');
themeManager.setTheme('dark');
themeManager.setTheme('highContrast');

// Create custom theme
themeManager.createCustomTheme('ocean', {
    '--primary-color': '#0066cc',
    '--secondary-color': '#0099ff',
    '--background-color': '#f0f8ff',
    '--text-color': '#003366',
    '--border-color': '#66ccff'
});

themeManager.setTheme('ocean');

// 📚 8. Performance Optimization
console.log("\n📚 8. Performance Optimization");
console.log("-----------------------------");

class PerformanceOptimizer {
    constructor() {
        this.elements = new Map();
        this.observers = new Map();
        this.setupMockElements();
    }
    
    setupMockElements() {
        const element = {
            id: 'performance-element',
            tagName: 'DIV',
            className: 'performance-box',
            style: {
                width: '100px',
                height: '100px',
                backgroundColor: 'red'
            }
        };
        
        this.elements.set('element', element);
    }
    
    batchStyleUpdates(element, updates) {
        // Disable transitions temporarily
        const originalTransition = element.style.transition;
        element.style.transition = 'none';
        
        // Apply all updates
        Object.entries(updates).forEach(([property, value]) => {
            element.style[property] = value;
        });
        
        // Re-enable transitions
        element.style.transition = originalTransition;
        
        console.log('Batched style updates:', updates);
    }
    
    useRequestAnimationFrame(callback) {
        // Simulate requestAnimationFrame
        setTimeout(() => {
            callback();
        }, 16); // ~60fps
        
        console.log('Used requestAnimationFrame for animation');
    }
    
    debounceStyleUpdate(element, property, value, delay = 100) {
        const key = `${element.id}-${property}`;
        
        if (this.observers.has(key)) {
            clearTimeout(this.observers.get(key));
        }
        
        const timeoutId = setTimeout(() => {
            element.style[property] = value;
            console.log(`Debounced style update: ${property} = ${value}`);
        }, delay);
        
        this.observers.set(key, timeoutId);
    }
    
    throttleStyleUpdate(element, property, value, limit = 100) {
        const key = `${element.id}-${property}`;
        const now = Date.now();
        
        if (!this.observers.has(key)) {
            this.observers.set(key, { lastUpdate: 0 });
        }
        
        const observer = this.observers.get(key);
        
        if (now - observer.lastUpdate >= limit) {
            element.style[property] = value;
            observer.lastUpdate = now;
            console.log(`Throttled style update: ${property} = ${value}`);
        }
    }
}

const performanceOptimizer = new PerformanceOptimizer();

// Get mock element
const perfElement = performanceOptimizer.elements.get('element');

// Test performance optimizations
performanceOptimizer.batchStyleUpdates(perfElement, {
    width: '200px',
    height: '200px',
    backgroundColor: 'blue',
    borderRadius: '10px'
});

performanceOptimizer.useRequestAnimationFrame(() => {
    console.log('Animation frame callback executed');
});

performanceOptimizer.debounceStyleUpdate(perfElement, 'width', '300px', 200);
performanceOptimizer.throttleStyleUpdate(perfElement, 'height', '150px', 100);

// 📚 9. Best Practices Summary
console.log("\n📚 9. Best Practices Summary");
console.log("---------------------------");

console.log("1. Use CSS classes instead of inline styles when possible");
console.log("2. Batch DOM updates to minimize reflows");
console.log("3. Use requestAnimationFrame for smooth animations");
console.log("4. Implement proper responsive design breakpoints");
console.log("5. Use CSS variables for theme management");
console.log("6. Optimize animations for performance");
console.log("7. Test styles across different browsers");
console.log("8. Use semantic CSS class names");
console.log("9. Implement proper fallbacks for older browsers");
console.log("10. Consider accessibility when styling elements");

console.log("\n🎉 Lesson 5 Complete: Styling and Animation");
console.log("You now understand how to manipulate styles and create animations!");
