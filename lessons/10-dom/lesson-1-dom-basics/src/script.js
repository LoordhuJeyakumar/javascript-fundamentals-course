document.addEventListener('DOMContentLoaded', () => {
    // Part 1: DOM Selection Methods
    const demoBox = document.querySelector('.demo-box');
    const highlightedElements = document.getElementsByClassName('highlight');
    const demoList = document.getElementById('demo-list');
    const listItems = demoList.getElementsByTagName('li');

    demoBox.addEventListener('click', () => {
        console.log('Selected by querySelector:', demoBox);
        console.log('Selected by className:', highlightedElements);
        console.log('Selected by id:', demoList);
        console.log('Selected by tagName:', listItems);
    });

    // Part 2: DOM Manipulation
    const contentBox = document.getElementById('content-box');
    const changeContentBtn = document.getElementById('change-content');
    const toggleClassBtn = document.getElementById('toggle-class');
    const addItemBtn = document.getElementById('add-item');

    changeContentBtn.addEventListener('click', () => {
        contentBox.textContent = 'Content changed!';
        contentBox.style.color = '#0056b3';
    });

    toggleClassBtn.addEventListener('click', () => {
        contentBox.classList.toggle('modified');
    });

    let itemCount = demoList.children.length;
    addItemBtn.addEventListener('click', () => {
        itemCount++;
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemCount}`;
        demoList.appendChild(newItem);
    });

    // Part 3: Event Handling
    const inputField = document.getElementById('input-field');
    const eventOutput = document.getElementById('event-output');

    function logEvent(eventType, details = '') {
        const event = document.createElement('div');
        event.textContent = `${eventType}: ${details}`;
        eventOutput.prepend(event);
        
        // Keep only last 5 events
        while (eventOutput.children.length > 5) {
            eventOutput.removeChild(eventOutput.lastChild);
        }
    }

    inputField.addEventListener('keyup', (e) => {
        logEvent('Keyup', `Key pressed: ${e.key}`);
    });

    inputField.addEventListener('focus', () => {
        logEvent('Focus', 'Input field focused');
    });

    inputField.addEventListener('blur', () => {
        logEvent('Blur', 'Input field lost focus');
    });

    // Event delegation example
    demoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            logEvent('Click', `Clicked on: ${e.target.textContent}`);
        }
    });
});