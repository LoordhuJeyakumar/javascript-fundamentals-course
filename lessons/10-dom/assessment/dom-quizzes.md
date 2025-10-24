# DOM Assessment Quizzes

## 📝 **Quiz 1: DOM Selection (Lesson 1A)**

### Question 1
What's the difference between `querySelector` and `querySelectorAll`?

**A)** `querySelector` returns the first match, `querySelectorAll` returns all matches  
**B)** `querySelector` returns all matches, `querySelectorAll` returns the first match  
**C)** They are identical  
**D)** `querySelector` is faster than `querySelectorAll`  

**Answer: A**

### Question 2
Which method should you use to select a single element by ID?

**A)** `document.getElementsByClassName('myId')`  
**B)** `document.getElementById('myId')`  
**C)** `document.querySelectorAll('#myId')`  
**D)** All of the above  

**Answer: B**

### Question 3
What happens if you try to select a non-existent element?

**A)** Returns an empty array  
**B)** Returns `null`  
**C)** Throws an error  
**D)** Returns `undefined`  

**Answer: B**

### Question 4
Which is the most efficient way to select multiple elements with the same class?

**A)** `document.getElementsByClassName('myClass')`  
**B)** `document.querySelectorAll('.myClass')`  
**C)** Both are equally efficient  
**D)** It depends on the browser  

**Answer: A** (slightly more efficient, but both are fine)

---

## 📝 **Quiz 2: DOM Manipulation (Lesson 1B)**

### Question 1
What's the difference between `textContent` and `innerHTML`?

**A)** `textContent` is faster, `innerHTML` is slower  
**B)** `textContent` treats content as text, `innerHTML` treats it as HTML  
**C)** `textContent` is safer, `innerHTML` is dangerous  
**D)** All of the above  

**Answer: D**

### Question 2
How do you safely add user input to the DOM?

**A)** Use `innerHTML`  
**B)** Use `textContent`  
**C)** Use `innerText`  
**D)** Use `outerHTML`  

**Answer: B**

### Question 3
What happens if you create an element but don't append it to the DOM?

**A)** It becomes invisible  
**B)** It's automatically added to the body  
**C)** It exists in memory but isn't visible  
**D)** It throws an error  

**Answer: C**

### Question 4
Which method is best for adding multiple CSS classes to an element?

**A)** `element.className = 'class1 class2'`  
**B)** `element.classList.add('class1', 'class2')`  
**C)** `element.classList.add('class1'); element.classList.add('class2')`  
**D)** All are equally good  

**Answer: B**

---

## 📝 **Quiz 3: Event Handling (Lesson 1C)**

### Question 1
What's the correct way to add an event listener?

**A)** `element.onclick = handler`  
**B)** `element.addEventListener('click', handler)`  
**C)** `element.click(handler)`  
**D)** Both A and B are correct  

**Answer: D** (both work, but addEventListener is preferred)

### Question 2
When should you use event delegation?

**A)** When you have many similar elements  
**B)** When elements are added dynamically  
**C)** When you want better performance  
**D)** All of the above  

**Answer: D**

### Question 3
What's the difference between `e.target` and `e.currentTarget`?

**A)** `e.target` is the element that was clicked, `e.currentTarget` is the element with the listener  
**B)** They are always the same  
**C)** `e.target` is faster than `e.currentTarget`  
**D)** `e.currentTarget` is deprecated  

**Answer: A**

### Question 4
How do you prevent an event from bubbling up?

**A)** `e.preventDefault()`  
**B)** `e.stopPropagation()`  
**C)** `e.stopImmediatePropagation()`  
**D)** `e.cancelBubble = true`  

**Answer: B**

---

## 📝 **Quiz 4: DOM Traversal (Lesson 2)**

### Question 1
What's the difference between `childNodes` and `children`?

**A)** `childNodes` includes text nodes, `children` only includes element nodes  
**B)** `children` includes text nodes, `childNodes` only includes element nodes  
**C)** They are identical  
**D)** `childNodes` is faster than `children`  

**Answer: A**

### Question 2
How do you find the parent element of an element?

**A)** `element.parent`  
**B)** `element.parentElement`  
**C)** `element.parentNode`  
**D)** Both B and C work  

**Answer: D** (both work, but parentElement is preferred for elements)

### Question 3
What happens if you try to access a property of a null element?

**A)** Returns `undefined`  
**B)** Throws an error  
**C)** Returns `null`  
**D)** Returns an empty string  

**Answer: B**

### Question 4
Which method finds the next sibling element?

**A)** `element.nextSibling`  
**B)** `element.nextElementSibling`  
**C)** `element.sibling`  
**D)** `element.next`  

**Answer: B**

---

## 📝 **Quiz 5: Event Flow (Lesson 3)**

### Question 1
What are the three phases of event flow?

**A)** Start, Middle, End  
**B)** Capturing, Target, Bubbling  
**C)** Down, Center, Up  
**D)** Before, During, After  

**Answer: B**

### Question 2
In which phase do event listeners run by default?

**A)** Capturing phase  
**B)** Target phase  
**C)** Bubbling phase  
**D)** All phases  

**Answer: C**

### Question 3
How do you make an event listener run in the capturing phase?

**A)** `element.addEventListener('click', handler, true)`  
**B)** `element.addEventListener('click', handler, false)`  
**C)** `element.addEventListener('click', handler, 'capture')`  
**D)** You can't control the phase  

**Answer: A**

### Question 4
What's the main benefit of event delegation?

**A)** Better performance  
**B)** Works with dynamic content  
**C)** Easier to manage  
**D)** All of the above  

**Answer: D**

---

## 📊 **Assessment Scoring**

### Scoring Guide:
- **90-100%**: Excellent understanding
- **80-89%**: Good understanding with minor gaps
- **70-79%**: Satisfactory understanding, needs review
- **60-69%**: Needs significant review
- **Below 60%**: Requires additional study

### Review Recommendations:
- **Score below 70%**: Review the corresponding lesson materials
- **Score below 60%**: Complete additional exercises and seek help
- **Score above 90%**: Ready to move to next lesson

## 🎯 **Quick Check Questions**

### For Each Lesson, Ask Yourself:
1. **Can I explain this concept to someone else?**
2. **Can I write code without looking at examples?**
3. **Can I debug common errors in this area?**
4. **Do I understand when to use each method?**

### If You Answer "No" to Any Question:
- Review the lesson materials
- Practice with the exercises
- Ask for help or clarification
- Don't move on until you're confident

## 📚 **Additional Practice**

### Code Completion Exercises:
1. **Complete this DOM selection:**
   ```javascript
   const element = document._____('myId');
   ```

2. **Complete this event listener:**
   ```javascript
   element.addEventListener('_____', function(e) {
       console.log('Button clicked');
   });
   ```

3. **Complete this class manipulation:**
   ```javascript
   element.classList._____('active');
   ```

### Debugging Exercises:
1. **Find the error in this code:**
   ```javascript
   const button = document.getElementById('myButton');
   button.style.color = 'red';
   ```

2. **Fix this event delegation:**
   ```javascript
   document.addEventListener('click', function(e) {
       if (e.target.classList.contains('button')) {
           // Handle click
       }
   });
   ```

## 🔗 **Resources for Further Study**

- [MDN: DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info: DOM](https://javascript.info/dom)
- [W3Schools: JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

