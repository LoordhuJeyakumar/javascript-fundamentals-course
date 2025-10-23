// Test Suite for DOM Basics Exercises

describe('Element Selection Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="container">
                <div class="item">Item 1</div>
                <div class="item special">Item 2</div>
                <div class="item">Item 3</div>
                <article>
                    <h2>Title</h2>
                    <p>Paragraph 1</p>
                    <p class="special">Paragraph 2</p>
                </article>
            </div>
            <div id="results"></div>
        `;
    });

    it('should select element by ID', () => {
        const container = document.getElementById('container');
        expect(container).toBeTruthy();
        expect(container.id).toBe('container');
    });

    it('should select elements by class name', () => {
        const items = document.getElementsByClassName('item');
        expect(items.length).toBe(3);
    });

    it('should select elements by tag name', () => {
        const paragraphs = document.getElementsByTagName('p');
        expect(paragraphs.length).toBe(2);
    });

    it('should use querySelector correctly', () => {
        const specialItem = document.querySelector('.item.special');
        expect(specialItem).toBeTruthy();
        expect(specialItem.textContent).toBe('Item 2');
    });

    it('should use querySelectorAll effectively', () => {
        const specials = document.querySelectorAll('.special');
        expect(specials.length).toBe(2);
    });
});

describe('DOM Manipulation Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <div id="controls">
                    <input type="text" id="content-input">
                    <button id="add">Add</button>
                </div>
                <div id="content-list"></div>
            </div>
        `;
    });

    it('should create and append elements', () => {
        const list = document.getElementById('content-list');
        const div = document.createElement('div');
        div.textContent = 'New Item';
        list.appendChild(div);
        expect(list.children.length).toBe(1);
        expect(list.firstChild.textContent).toBe('New Item');
    });

    it('should modify element content', () => {
        const div = document.createElement('div');
        div.textContent = 'Original';
        div.textContent = 'Modified';
        expect(div.textContent).toBe('Modified');
    });

    it('should handle attributes', () => {
        const div = document.createElement('div');
        div.setAttribute('data-test', 'value');
        expect(div.getAttribute('data-test')).toBe('value');
    });

    it('should remove elements', () => {
        const list = document.getElementById('content-list');
        const div = document.createElement('div');
        list.appendChild(div);
        expect(list.children.length).toBe(1);
        div.remove();
        expect(list.children.length).toBe(0);
    });
});

describe('Event Handling Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="event-container">
                <button id="btn1">Click Me</button>
                <div id="hover-area">Hover Area</div>
                <form id="test-form">
                    <input type="text" id="test-input">
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div id="event-log"></div>
        `;
    });

    it('should handle click events', (done) => {
        const btn = document.getElementById('btn1');
        btn.addEventListener('click', (e) => {
            expect(e.type).toBe('click');
            done();
        });
        btn.click();
    });

    it('should handle form submission', (done) => {
        const form = document.getElementById('test-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            expect(e.type).toBe('submit');
            done();
        });
        form.dispatchEvent(new Event('submit'));
    });

    it('should use event delegation', (done) => {
        const container = document.getElementById('event-container');
        container.addEventListener('click', (e) => {
            if (e.target.id === 'btn1') {
                expect(e.target.id).toBe('btn1');
                done();
            }
        });
        document.getElementById('btn1').click();
    });
});

describe('DOM Navigation Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="family-tree">
                <div id="parent">
                    <div id="first-child" class="child">
                        First Child
                        <div class="grandchild">Grandchild 1</div>
                    </div>
                    <div id="second-child" class="child">
                        Second Child
                        <div class="grandchild">Grandchild 2</div>
                    </div>
                </div>
            </div>
        `;
    });

    it('should navigate to parent', () => {
        const firstChild = document.getElementById('first-child');
        expect(firstChild.parentElement.id).toBe('parent');
    });

    it('should navigate to children', () => {
        const parent = document.getElementById('parent');
        expect(parent.children.length).toBe(2);
        expect(parent.firstElementChild.id).toBe('first-child');
    });

    it('should navigate to siblings', () => {
        const firstChild = document.getElementById('first-child');
        expect(firstChild.nextElementSibling.id).toBe('second-child');
    });

    it('should find ancestors', () => {
        const grandchild = document.querySelector('.grandchild');
        expect(grandchild.closest('#parent')).toBeTruthy();
    });
});

describe('Form Validation Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="registration-form">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username">
                    <div class="error"></div>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email">
                    <div class="error"></div>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password">
                    <div class="error"></div>
                </div>
                <button type="submit">Register</button>
            </form>
        `;
    });

    it('should validate username', () => {
        const username = document.getElementById('username');
        username.value = 'a'; // too short
        const isValid = validateUsername(username);
        expect(isValid).toBe(false);
        expect(username.nextElementSibling.textContent)
            .toContain('Username must be at least');
    });

    it('should validate email format', () => {
        const email = document.getElementById('email');
        email.value = 'invalid-email';
        const isValid = validateEmail(email);
        expect(isValid).toBe(false);
        expect(email.nextElementSibling.textContent)
            .toContain('Invalid email format');
    });

    it('should validate password strength', () => {
        const password = document.getElementById('password');
        password.value = 'weak';
        const isValid = validatePassword(password);
        expect(isValid).toBe(false);
        expect(password.nextElementSibling.textContent)
            .toContain('Password must contain');
    });

    it('should handle form submission', (done) => {
        const form = document.getElementById('registration-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isValid = validateForm();
            expect(isValid).toBe(false); // empty form
            done();
        });
        form.dispatchEvent(new Event('submit'));
    });
});

// Performance Test Utilities
const measurePerformance = (fn) => {
    const start = performance.now();
    fn();
    return performance.now() - start;
};

describe('Performance Tests', () => {
    it('should select elements efficiently', () => {
        const time = measurePerformance(() => {
            document.querySelectorAll('.item');
        });
        expect(time).toBeLessThan(1);
    });

    it('should handle DOM manipulation efficiently', () => {
        const time = measurePerformance(() => {
            for (let i = 0; i < 100; i++) {
                const div = document.createElement('div');
                div.textContent = `Item ${i}`;
                document.body.appendChild(div);
            }
        });
        expect(time).toBeLessThan(50);
    });
});