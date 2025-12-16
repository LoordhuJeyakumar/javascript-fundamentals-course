# 📄 DOCUMENT 1A

## Project 1 – Real-World Project

### **Task Manager Application (API Based CRUD Project)**

---

## 👋 Introduction (Encouraging)

You already know JavaScript, HTML, and CSS.
Now it’s time to **build something like a real software developer**.

This project will help you understand:

* How real websites **talk to servers**
* How data is **created, read, updated, and deleted (CRUD)**
* How JavaScript is used in **real-world projects**

Don’t worry if it feels hard at first — **that’s a good sign you’re learning** 🚀

---

## 🎯 Project Goal

Build a **Task Manager Web App** where users can:

* View tasks from an API
* Add a new task
* Update task status
* Delete a task

You will use a **public API** to simulate backend behavior.

---

## 🛠 Technologies to Use

* HTML
* CSS
* JavaScript (ES6 allowed)
* API: `https://jsonplaceholder.typicode.com/todos`

---

## 🌍 Real-World Concept You Are Learning

| Feature     | Real-World Meaning       |
| ----------- | ------------------------ |
| Fetch tasks | Getting data from server |
| Add task    | Creating data (POST)     |
| Update task | Editing data (PUT/PATCH) |
| Delete task | Removing data (DELETE)   |

This is **exactly how real apps work**.

---

## 📌 Features to Implement

### 1️⃣ Fetch & Display Tasks (READ)

* Call API using `fetch`
* Display first **10 tasks**
* Show:

  * Task title
  * Status (Completed / Not Completed)

💡 **Hint:**
Start by logging API response in `console.log()` before showing it on UI.

---

### 2️⃣ Add New Task (CREATE)

* Input field for task name
* Button: **Add Task**
* On click:

  * Send `POST` request
  * Add task to UI immediately

💡 **Hint:**
The API will not save permanently — that’s OK.
Focus on **request + response**.

---

### 3️⃣ Update Task Status (UPDATE)

* Checkbox or button: **Mark as Completed**
* When clicked:

  * Change UI style
  * Send `PUT` or `PATCH` request

💡 **Hint:**
You don’t need complex logic — just update UI after success response.

---

### 4️⃣ Delete Task (DELETE)

* Delete button for each task
* Remove task from UI
* Send `DELETE` request to API

💡 **Hint:**
Delete from UI first, then call API.

---

### 5️⃣ Loading & Error Handling

* Show “Loading tasks…” while fetching
* Show error message if API fails

💡 **Hint:**
Use `try...catch` or `.catch()` in fetch.

---

## 🎨 UI Guidelines

* Simple and clean design
* Completed tasks → line-through text
* Buttons clearly visible
* Mobile friendly layout

---

## 📁 Folder Structure (Mandatory)

```
task-manager/
 ├── index.html
 ├── css/
 │    └── style.css
 ├── js/
 │    └── script.js
```

---

## ❌ Restrictions

* ❌ No React
* ❌ No frameworks
* ❌ No backend code

---

## ⏱ Estimated Time

**10–12 hours**

---

## 🌱 Learning Outcome

By finishing this project, you will understand:

* API communication
* CRUD operations
* How real frontend apps work

---
