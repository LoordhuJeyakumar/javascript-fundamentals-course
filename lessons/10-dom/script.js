const mainElement = document.getElementById('main');

mainElement.innerHTML = `<h1>DOM Basics</h1>`;


//create a new paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'This paragraph was created and added to the DOM using JavaScript.';

mainElement.appendChild(paragraph);


//remove the paragraph after 3 seconds
setTimeout(() => {
  mainElement.removeChild(paragraph);
}, 3000);