const rootElement = document.getElementById("root");
const listGroup = rootElement.querySelector(".list-group");
const firstItem = document.getElementsByClassName("list-group-item");
console.log(firstItem);

console.dir(listGroup);

// Practice selecting each element using different methods
const container = document.getElementById("container");
const title = document.querySelector(".title");
const content = document.querySelectorAll(".content");
const button = document.getElementsByTagName("button")[0];

// ❌ Wrong - can cause errors
// const element = document.getElementById('nonExistent');
// element.style.color = 'red'; // Error!

// ✅ Correct - check first
const element2 = document.getElementById("nonExistent");
if (element2) {
  element2.style.color = "red";
}

title.textContent = "chnage title from js";
title.style.color = "red";
title.style.fontSize = "54px";


console.log(title);

/* Creating an element */

const description = document.createElement("p");

container.appendChild(description);

description.textContent = "This is a dynamically created paragraph.";
description.style.fontSize = "18px";
description.style.color = "blue";

/* Add attributes */

description.setAttribute("id", "dynamic-description");
description.setAttribute("class", "dynamic-content");

description.className = "dynamic-content highlighted";

console.log(description);

/* Remove elements */

// const listGroupremove = document.querySelector(".list-group");
// listGroupremove.remove();


console.log("Description removed from DOM");

/* Text content vs Inner HTML */

const textContentElement = document.createElement("div");
textContentElement.textContent = "<strong>This will not be bold</strong>";
container.appendChild(textContentElement);

const innerHtmlElement = document.createElement("div");
innerHtmlElement.innerHTML = "<strong>This will be bold</strong>";
container.appendChild(innerHtmlElement);

/* Modifying styles */
innerHtmlElement.style.backgroundColor = "lightgray";
innerHtmlElement.style.padding = "10px";


const addList = (text) => {
  const listItem = document.createElement("li");
  listItem.textContent = text;
  listItem.className = "list-group-item";
  listGroup.appendChild(listItem);
}

const inputField = document.getElementById("input-field");

// Handle both Enter key and change event  
inputField.addEventListener("change", function(e) {

  console.log(e)

  if(e.key === "Enter") {
    const inputValue = inputField.value.trim();
    if (inputValue) {
      addList(inputValue);
      inputField.value = "";
    }
  }

  if(e.type === "change") {
    const inputValue = inputField.value.trim();
    if (inputValue) {
      addList(inputValue);
      inputField.value = "";
    }
  }

})


/* Event listeners */

button.addEventListener("click", function () {

  const inputValue = inputField.value.trim();
  if (inputValue) {
    addList(inputValue);
    inputField.value = "";
  }


});

const countButton = document.createElement("button");
countButton.classList.add("btn", "btn-info");
const counter = document.createElement("div");
counter.classList.add("counter-display", "mt-3", "p-2", "border", "border-secondary", "rounded");

container.appendChild(counter);
countButton.textContent = "Increment Counter";
container.appendChild(countButton);

let clickCount = 0;


countButton.addEventListener('click', function() {
    clickCount++;
    counter.textContent = `Clicks: ${clickCount}`;
});


const colorButton = document.createElement("button");
colorButton.classList.add("btn", "btn-warning", "mt-3");
const colorBox = document.createElement("div");
colorBox.classList.add("color-box", "mt-2", "p-5", "border", "border-dark", "rounded");
container.appendChild(colorBox);
colorButton.textContent = "Change Color";

const colors = ['red', 'blue', 'green', 'yellow'];
let currentColor = 0;

colorButton.addEventListener('click', function() {
    currentColor = (currentColor + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentColor];
});
container.appendChild(colorButton);
