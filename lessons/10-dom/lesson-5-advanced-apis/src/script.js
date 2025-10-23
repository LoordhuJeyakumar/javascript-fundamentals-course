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

    // MutationObserver Demo
    const observedContent = document.getElementById('observedContent');
    const mutationLog = document.getElementById('mutationLog');

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            let message = '';
            switch(mutation.type) {
                case 'childList':
                    const added = mutation.addedNodes.length;
                    const removed = mutation.removedNodes.length;
                    if (added) message = `Added ${added} node(s)`;
                    if (removed) message = `Removed ${removed} node(s)`;
                    break;
                case 'attributes':
                    message = `Modified ${mutation.attributeName} attribute`;
                    break;
                case 'characterData':
                    message = 'Modified text content';
                    break;
            }
            logWithTime(message, mutationLog);
        });
    });

    observer.observe(observedContent, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    });

    // Demo controls
    document.getElementById('addElement').addEventListener('click', () => {
        const div = document.createElement('div');
        div.textContent = 'New Element ' + Date.now();
        observedContent.appendChild(div);
    });

    document.getElementById('modifyAttribute').addEventListener('click', () => {
        observedContent.setAttribute('data-modified', Date.now());
    });

    document.getElementById('removeElement').addEventListener('click', () => {
        const lastChild = observedContent.lastElementChild;
        if (lastChild && !lastChild.matches('button')) {
            lastChild.remove();
        }
    });

    // IntersectionObserver Demo
    const intersectionLog = document.getElementById('intersectionLog');
    const scrollContent = document.querySelector('.scroll-content');

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            if (entry.isIntersecting) {
                logWithTime(`${element.dataset.imageName || 'Image'} is visible`, 
                           intersectionLog, 'success');
                
                if (!element.dataset.loaded) {
                    loadImage(element);
                }
            } else {
                logWithTime(`${element.dataset.imageName || 'Image'} is hidden`, 
                           intersectionLog);
            }
        });
    }, {
        threshold: 0.1
    });

    function loadImage(element) {
        const img = document.createElement('img');
        img.src = element.dataset.src;
        img.onload = () => {
            element.appendChild(img);
            setTimeout(() => img.classList.add('loaded'), 100);
            element.dataset.loaded = true;
        };
    }

    // Add more images dynamically
    for (let i = 4; i <= 10; i++) {
        const div = document.createElement('div');
        div.className = 'lazy-image';
        div.dataset.src = `https://picsum.photos/300/200?random=${i}`;
        div.dataset.imageName = `Image ${i}`;
        div.innerHTML = `<div class="placeholder">Image ${i}</div>`;
        scrollContent.appendChild(div);
    }

    // Observe all lazy images
    document.querySelectorAll('.lazy-image').forEach(img => {
        intersectionObserver.observe(img);
    });

    // ResizeObserver Demo
    const resizeElement = document.getElementById('resizeElement');
    const resizeLog = document.getElementById('resizeLog');
    const sizeInfo = resizeElement.querySelector('.size-info');

    const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
            const { width, height } = entry.contentRect;
            sizeInfo.textContent = `${Math.round(width)}px × ${Math.round(height)}px`;
            logWithTime(`Resized to ${Math.round(width)}px × ${Math.round(height)}px`, 
                       resizeLog);
        }
    });

    resizeObserver.observe(resizeElement);

    // Toggle size button
    document.getElementById('toggleSize').addEventListener('click', () => {
        resizeElement.style.width = 
            resizeElement.style.width === '100%' ? '50%' : '100%';
    });

    // Advanced Selection Demo
    const selectionLog = document.getElementById('selectionLog');
    const selectorInput = document.getElementById('selectorInput');
    const playground = document.querySelector('.selection-playground');

    document.getElementById('testSelector').addEventListener('click', () => {
        try {
            const selector = selectorInput.value;
            const elements = playground.querySelectorAll(selector);
            
            // Remove previous highlights
            document.querySelectorAll('.highlight').forEach(el => {
                el.classList.remove('highlight');
            });

            // Highlight matched elements
            elements.forEach(el => {
                el.classList.add('highlight');
            });

            logWithTime(`Found ${elements.length} element(s) matching "${selector}"`, 
                       selectionLog, 'success');
        } catch (error) {
            logWithTime(`Invalid selector: ${error.message}`, selectionLog, 'error');
        }
    });

    document.getElementById('findClosest').addEventListener('click', () => {
        const selector = selectorInput.value;
        const target = document.querySelector('.level-4');
        
        try {
            const closest = target.closest(selector);
            if (closest) {
                document.querySelectorAll('.highlight').forEach(el => {
                    el.classList.remove('highlight');
                });
                closest.classList.add('highlight');
                logWithTime(`Found closest "${selector}" from Level 4`, 
                           selectionLog, 'success');
            } else {
                logWithTime(`No matching ancestor found for "${selector}"`, 
                           selectionLog, 'warning');
            }
        } catch (error) {
            logWithTime(`Invalid selector: ${error.message}`, selectionLog, 'error');
        }
    });

    document.getElementById('testMatches').addEventListener('click', () => {
        const selector = selectorInput.value;
        const elements = playground.getElementsByTagName('*');
        
        try {
            let matches = 0;
            Array.from(elements).forEach(el => {
                if (el.matches(selector)) {
                    el.classList.add('highlight');
                    matches++;
                } else {
                    el.classList.remove('highlight');
                }
            });
            
            logWithTime(`${matches} element(s) match "${selector}"`, 
                       selectionLog, matches ? 'success' : 'warning');
        } catch (error) {
            logWithTime(`Invalid selector: ${error.message}`, selectionLog, 'error');
        }
    });

    // Custom Elements Demo
    class CustomTooltip extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('tooltip-template');
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.content.cloneNode(true));
            
            const tooltip = shadowRoot.querySelector('.tooltip-text');
            tooltip.textContent = this.getAttribute('text');
        }
    }

    class CustomModal extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('modal-template');
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.content.cloneNode(true));
            
            const modal = shadowRoot.querySelector('.modal');
            const backdrop = shadowRoot.querySelector('.backdrop');
            const closeBtn = shadowRoot.querySelector('slot[name="footer"]');
            
            closeBtn.addEventListener('slotchange', e => {
                const nodes = e.target.assignedNodes();
                nodes.forEach(node => {
                    if (node.querySelector('button')) {
                        node.querySelector('button').addEventListener('click', () => {
                            this.close();
                        });
                    }
                });
            });
            
            backdrop.addEventListener('click', () => this.close());
        }
        
        show() {
            const modal = this.shadowRoot.querySelector('.modal');
            const backdrop = this.shadowRoot.querySelector('.backdrop');
            modal.classList.add('active');
            backdrop.classList.add('active');
        }
        
        close() {
            const modal = this.shadowRoot.querySelector('.modal');
            const backdrop = this.shadowRoot.querySelector('.backdrop');
            modal.classList.remove('active');
            backdrop.classList.remove('active');
        }
    }

    customElements.define('custom-tooltip', CustomTooltip);
    customElements.define('custom-modal', CustomModal);

    document.getElementById('showModal').addEventListener('click', () => {
        const modal = document.querySelector('custom-modal');
        modal.show();
    });
});