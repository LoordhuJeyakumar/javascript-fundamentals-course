document.addEventListener('DOMContentLoaded', () => {
    // Performance measurement utilities
    const performance = window.performance;
    
    function measureOperation(name, operation) {
        const start = performance.now();
        operation();
        const end = performance.now();
        return {
            name,
            duration: end - start,
            timestamp: new Date().toISOString()
        };
    }

    // Performance Comparison Demo
    const itemCount = document.getElementById('itemCount');
    const testOutput = document.getElementById('testOutput');
    const performanceMetrics = document.getElementById('performanceMetrics');

    function clearOutput() {
        testOutput.innerHTML = '';
        performanceMetrics.innerHTML = '';
    }

    function displayMetrics(metrics) {
        const card = document.createElement('div');
        card.className = 'metric-card';
        card.innerHTML = `
            <h4>${metrics.name}</h4>
            <p>Duration: ${metrics.duration.toFixed(2)}ms</p>
            <p>Memory: ${(performance.memory?.usedJSHeapSize / 1048576).toFixed(2)}MB</p>
        `;
        performanceMetrics.appendChild(card);
    }

    // innerHTML approach
    document.getElementById('runInnerHTML').addEventListener('click', () => {
        clearOutput();
        const count = parseInt(itemCount.value);
        
        const metrics = measureOperation('innerHTML', () => {
            let html = '<div class="generated-content">';
            for (let i = 0; i < count; i++) {
                html += `<div class="item">Item ${i}</div>`;
            }
            html += '</div>';
            testOutput.innerHTML = html;
        });
        
        displayMetrics(metrics);
    });

    // createElement approach
    document.getElementById('runCreateElement').addEventListener('click', () => {
        clearOutput();
        const count = parseInt(itemCount.value);
        
        const metrics = measureOperation('createElement', () => {
            const container = document.createElement('div');
            container.className = 'generated-content';
            
            for (let i = 0; i < count; i++) {
                const item = document.createElement('div');
                item.className = 'item';
                item.textContent = `Item ${i}`;
                container.appendChild(item);
            }
            
            testOutput.appendChild(container);
        });
        
        displayMetrics(metrics);
    });

    // DocumentFragment approach
    document.getElementById('runFragment').addEventListener('click', () => {
        clearOutput();
        const count = parseInt(itemCount.value);
        
        const metrics = measureOperation('DocumentFragment', () => {
            const fragment = document.createDocumentFragment();
            const container = document.createElement('div');
            container.className = 'generated-content';
            
            for (let i = 0; i < count; i++) {
                const item = document.createElement('div');
                item.className = 'item';
                item.textContent = `Item ${i}`;
                container.appendChild(item);
            }
            
            fragment.appendChild(container);
            testOutput.appendChild(fragment);
        });
        
        displayMetrics(metrics);
    });

    // Template approach
    document.getElementById('runTemplate').addEventListener('click', () => {
        clearOutput();
        const count = parseInt(itemCount.value);
        
        const metrics = measureOperation('Template', () => {
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="item">
                    <span class="item-content"></span>
                </div>
            `;
            
            const container = document.createElement('div');
            container.className = 'generated-content';
            
            for (let i = 0; i < count; i++) {
                const clone = template.content.cloneNode(true);
                clone.querySelector('.item-content').textContent = `Item ${i}`;
                container.appendChild(clone);
            }
            
            testOutput.appendChild(container);
        });
        
        displayMetrics(metrics);
    });

    // Virtual List Implementation
    class VirtualList {
        constructor(container, options) {
            this.container = container;
            this.options = {
                itemHeight: options.itemHeight || 50,
                totalItems: options.totalItems || 0,
                bufferSize: options.bufferSize || 10,
                renderItem: options.renderItem
            };
            
            this.visibleItems = new Map();
            this.scrollTop = 0;
            this.startIndex = 0;
            this.endIndex = 0;
            
            this.setupContainer();
            this.bindEvents();
            this.render();
        }
        
        setupContainer() {
            this.container.style.position = 'relative';
            this.container.style.height = '400px';
            this.container.style.overflow = 'auto';
            
            this.content = document.createElement('div');
            this.content.style.position = 'absolute';
            this.content.style.width = '100%';
            this.content.style.height = `${this.options.totalItems * this.options.itemHeight}px`;
            
            this.container.appendChild(this.content);
        }
        
        bindEvents() {
            this.container.addEventListener('scroll', () => {
                window.requestAnimationFrame(() => this.render());
            });
        }
        
        render() {
            const scrollTop = this.container.scrollTop;
            const viewportHeight = this.container.clientHeight;
            
            const startIndex = Math.floor(scrollTop / this.options.itemHeight);
            const endIndex = Math.min(
                Math.ceil((scrollTop + viewportHeight) / this.options.itemHeight),
                this.options.totalItems
            );
            
            // Update visible range display
            document.getElementById('visibleRange').textContent = 
                `${startIndex} - ${endIndex}`;
            document.getElementById('totalCount').textContent = 
                this.options.totalItems;
            
            // Remove items that are no longer visible
            for (const [index, element] of this.visibleItems.entries()) {
                if (index < startIndex - this.options.bufferSize || 
                    index > endIndex + this.options.bufferSize) {
                    element.remove();
                    this.visibleItems.delete(index);
                }
            }
            
            // Add new visible items
            for (let i = startIndex - this.options.bufferSize; 
                 i <= endIndex + this.options.bufferSize; i++) {
                if (i >= 0 && i < this.options.totalItems && !this.visibleItems.has(i)) {
                    const item = this.options.renderItem(i);
                    item.style.position = 'absolute';
                    item.style.top = `${i * this.options.itemHeight}px`;
                    this.content.appendChild(item);
                    this.visibleItems.set(i, item);
                }
            }
        }
        
        updateTotalItems(count) {
            this.options.totalItems = count;
            this.content.style.height = `${count * this.options.itemHeight}px`;
            this.visibleItems.clear();
            this.content.innerHTML = '';
            this.render();
        }
    }

    // Initialize Virtual List
    const virtualListContainer = document.getElementById('virtualList');
    const totalItemsInput = document.getElementById('totalItems');
    const listItemTemplate = document.getElementById('list-item-template');
    
    let virtualList = new VirtualList(virtualListContainer, {
        itemHeight: 50,
        totalItems: parseInt(totalItemsInput.value),
        renderItem: (index) => {
            const clone = listItemTemplate.content.cloneNode(true);
            const item = clone.querySelector('.list-item');
            item.querySelector('.item-index').textContent = `#${index}`;
            item.querySelector('.item-content').textContent = 
                `Virtual Item ${index}`;
            return item;
        }
    });

    document.getElementById('updateList').addEventListener('click', () => {
        virtualList.updateTotalItems(parseInt(totalItemsInput.value));
    });

    // Real-time Updates Demo
    let updateInterval;
    const updateSpeed = document.getElementById('updateSpeed');
    const speedValue = document.getElementById('speedValue');
    const frameRate = document.getElementById('frameRate');
    const memoryUsage = document.getElementById('memoryUsage');
    const updateRate = document.getElementById('updateRate');

    function startUpdates() {
        const widgets = document.querySelectorAll('.widget');
        widgets.forEach(widget => widget.classList.add('updating'));
        
        let lastTime = performance.now();
        let frames = 0;
        let updates = 0;
        
        function updateWidgets() {
            // Update widgets with random data
            document.querySelector('#widget1 .widget-content').textContent = 
                Math.random().toFixed(4);
            
            const time = new Date().toLocaleTimeString();
            document.querySelector('#widget2 .widget-content').textContent = time;
            
            // Calculate moving average
            const numbers = Array.from({length: 10}, () => Math.random());
            const average = numbers.reduce((a, b) => a + b) / numbers.length;
            document.querySelector('#widget3 .widget-content').textContent = 
                average.toFixed(4);
            
            updates++;
        }
        
        function updateMetrics() {
            const now = performance.now();
            const elapsed = now - lastTime;
            
            if (elapsed >= 1000) {
                frameRate.textContent = `${Math.round(frames * 1000 / elapsed)} FPS`;
                updateRate.textContent = Math.round(updates * 1000 / elapsed);
                
                if (performance.memory) {
                    memoryUsage.textContent = 
                        `${(performance.memory.usedJSHeapSize / 1048576).toFixed(2)} MB`;
                }
                
                frames = 0;
                updates = 0;
                lastTime = now;
            }
            
            frames++;
            requestAnimationFrame(updateMetrics);
        }
        
        updateInterval = setInterval(updateWidgets, 1000 / parseInt(updateSpeed.value));
        requestAnimationFrame(updateMetrics);
    }

    function stopUpdates() {
        clearInterval(updateInterval);
        const widgets = document.querySelectorAll('.widget');
        widgets.forEach(widget => widget.classList.remove('updating'));
    }

    document.getElementById('startUpdates').addEventListener('click', startUpdates);
    document.getElementById('stopUpdates').addEventListener('click', stopUpdates);
    
    updateSpeed.addEventListener('input', () => {
        speedValue.textContent = updateSpeed.value;
        if (updateInterval) {
            stopUpdates();
            startUpdates();
        }
    });

    // Shadow DOM Demo
    class CustomCard extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('custom-card-template');
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define('custom-card', CustomCard);
});