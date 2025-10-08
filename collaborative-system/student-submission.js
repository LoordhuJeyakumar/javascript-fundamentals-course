#!/usr/bin/env node

/**
 * Student Submission System
 * Automates the process of students submitting their work
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class StudentSubmissionSystem {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.studentWorkPath = path.join(this.basePath, 'student-work');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        console.log('🎓 Student Submission System');
        console.log('============================\n');
        
        const studentInfo = await this.getStudentInfo();
        const submissionType = await this.getSubmissionType();
        const files = await this.getFilesToSubmit();
        
        await this.submitWork(studentInfo, submissionType, files);
        
        this.rl.close();
    }

    async getStudentInfo() {
        const studentId = await this.question('Enter your student ID (e.g., 001): ');
        const studentName = await this.question('Enter your full name: ');
        const email = await this.question('Enter your email: ');
        
        return { studentId, studentName, email };
    }

    async getSubmissionType() {
        console.log('\nWhat type of work are you submitting?');
        console.log('1. Exercise');
        console.log('2. Assignment');
        console.log('3. Final Project');
        console.log('4. Progress Update');
        
        const choice = await this.question('Enter your choice (1-4): ');
        const types = {
            '1': 'exercise',
            '2': 'assignment', 
            '3': 'project',
            '4': 'progress'
        };
        
        return types[choice] || 'exercise';
    }

    async getFilesToSubmit() {
        console.log('\nEnter the file paths to submit (one per line, empty line to finish):');
        const files = [];
        
        while (true) {
            const filePath = await this.question('File path: ');
            if (!filePath.trim()) break;
            
            if (fs.existsSync(filePath)) {
                files.push(filePath);
                console.log(`✅ Added: ${filePath}`);
            } else {
                console.log(`❌ File not found: ${filePath}`);
            }
        }
        
        return files;
    }

    async submitWork(studentInfo, submissionType, files) {
        const timestamp = new Date().toISOString();
        const studentFolder = `student-${studentInfo.studentId.padStart(3, '0')}-${studentInfo.studentName.toLowerCase().replace(/\s+/g, '-')}`;
        const studentPath = path.join(this.studentWorkPath, studentFolder);
        
        // Create student folder if it doesn't exist
        if (!fs.existsSync(studentPath)) {
            fs.mkdirSync(studentPath, { recursive: true });
            this.createStudentStructure(studentPath);
        }

        // Create submission folder
        const submissionFolder = `${submissionType}-${timestamp.split('T')[0]}`;
        const submissionPath = path.join(studentPath, 'submissions', submissionFolder);
        fs.mkdirSync(submissionPath, { recursive: true });

        // Copy files to submission folder
        for (const filePath of files) {
            const fileName = path.basename(filePath);
            const destPath = path.join(submissionPath, fileName);
            fs.copyFileSync(filePath, destPath);
        }

        // Create submission metadata
        const metadata = {
            studentId: studentInfo.studentId,
            studentName: studentInfo.studentName,
            email: studentInfo.email,
            submissionType: submissionType,
            timestamp: timestamp,
            files: files.map(f => path.basename(f)),
            status: 'submitted'
        };

        fs.writeFileSync(
            path.join(submissionPath, 'submission-info.json'),
            JSON.stringify(metadata, null, 2)
        );

        // Update progress tracking
        this.updateProgress(studentPath, submissionType, metadata);

        console.log(`\n✅ Submission successful!`);
        console.log(`📁 Files saved to: ${submissionPath}`);
        console.log(`📊 Progress updated in your tracking file`);
    }

    createStudentStructure(studentPath) {
        const structure = {
            'exercises': {},
            'assignments': {},
            'submissions': {},
            'progress.md': this.getProgressTemplate(),
            'README.md': this.getStudentReadmeTemplate()
        };

        // Create module folders
        for (let i = 1; i <= 10; i++) {
            const moduleNum = i.toString().padStart(2, '0');
            structure.exercises[`${moduleNum}-module`] = {};
            structure.assignments[`${moduleNum}-module`] = {};
        }

        this.createNestedStructure(studentPath, structure);
    }

    createNestedStructure(basePath, structure) {
        for (const [name, content] of Object.entries(structure)) {
            const itemPath = path.join(basePath, name);
            
            if (typeof content === 'object' && content !== null) {
                fs.mkdirSync(itemPath, { recursive: true });
                this.createNestedStructure(itemPath, content);
            } else {
                fs.writeFileSync(itemPath, content);
            }
        }
    }

    updateProgress(studentPath, submissionType, metadata) {
        const progressFile = path.join(studentPath, 'progress.md');
        let progress = fs.readFileSync(progressFile, 'utf8');
        
        const updateEntry = `\n## ${submissionType.charAt(0).toUpperCase() + submissionType.slice(1)} Submission - ${metadata.timestamp.split('T')[0]}\n\n` +
            `- **Status**: ${metadata.status}\n` +
            `- **Files**: ${metadata.files.join(', ')}\n` +
            `- **Type**: ${submissionType}\n\n`;
        
        progress += updateEntry;
        fs.writeFileSync(progressFile, progress);
    }

    getProgressTemplate() {
        return `# My Learning Progress

## Student Information
- **Student ID**: [Your ID]
- **Name**: [Your Name]
- **Email**: [Your Email]
- **Course**: JavaScript Fundamentals

## Module Progress

### 01 - JavaScript Basics
- [ ] Exercise 1: Variables and Data Types
- [ ] Exercise 2: Operators and Expressions
- [ ] Exercise 3: Control Flow
- [ ] Assignment 1: Personal Info Manager

### 02 - Functions
- [ ] Exercise 1: Basic Functions
- [ ] Exercise 2: Parameters
- [ ] Exercise 3: Return Values
- [ ] Assignment 1: Calculator

### 03 - Loops
- [ ] Exercise 1: For Loops
- [ ] Exercise 2: For-of Loops
- [ ] Exercise 3: Array Methods
- [ ] Assignment 1: Basic Loops

### 04 - Arrays
- [ ] Exercise 1: Array Basics
- [ ] Exercise 2: Array Methods
- [ ] Exercise 3: Array Search
- [ ] Assignment 1: Shopping Cart

### 05 - Strings
- [ ] Exercise 1: String Basics
- [ ] Exercise 2: String Methods
- [ ] Exercise 3: String Search
- [ ] Assignment 1: Text Processing

### 06 - Numbers
- [ ] Exercise 1: Number Basics
- [ ] Exercise 2: Math Operations
- [ ] Exercise 3: Number Methods
- [ ] Assignment 1: Advanced Calculator

### 07 - Objects
- [ ] Exercise 1: Object Basics
- [ ] Exercise 2: Object Methods
- [ ] Exercise 3: Object Manipulation
- [ ] Assignment 1: Library Management

### 08 - Error Handling
- [ ] Exercise 1: Try-Catch
- [ ] Exercise 2: Error Types
- [ ] Exercise 3: Custom Errors
- [ ] Assignment 1: Error-Resilient Calculator

### 09 - Promises
- [ ] Exercise 1: Basic Promises
- [ ] Exercise 2: Async/Await
- [ ] Exercise 3: Promise Methods
- [ ] Assignment 1: Async Data Manager

### 10 - DOM
- [ ] Exercise 1: DOM Basics
- [ ] Exercise 2: Event Handling
- [ ] Exercise 3: Dynamic Content
- [ ] Assignment 1: Interactive Todo List

## Final Project
- [ ] Project Planning
- [ ] Core Features
- [ ] Testing
- [ ] Documentation
- [ ] Presentation

## Notes and Reflections
*Use this space to track your learning journey, challenges, and insights*

`;
    }

    getStudentReadmeTemplate() {
        return `# My JavaScript Learning Journey

Welcome to my personal workspace for the JavaScript Fundamentals course!

## 📁 Folder Structure

- **exercises/**: My completed exercises organized by module
- **assignments/**: My assignment submissions
- **submissions/**: All my work submissions with timestamps
- **progress.md**: My learning progress tracker

## 🎯 How to Use This Workspace

1. **Complete Exercises**: Work on exercises in the appropriate module folders
2. **Submit Work**: Use the submission system to submit your work
3. **Track Progress**: Update your progress.md file as you complete work
4. **Review Feedback**: Check for teacher feedback in your submissions

## 📚 Learning Resources

- [Course Materials](../README.md)
- [Student Guide](../STUDENT_GUIDE.md)
- [Teacher Guide](../TEACHER_GUIDE.md)

## 🤝 Getting Help

- Ask questions in class
- Use office hours
- Form study groups
- Check the course repository for additional resources

Happy coding! 🚀
`;
    }

    question(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }
}

// Run the system if this file is executed directly
if (require.main === module) {
    const system = new StudentSubmissionSystem();
    system.start().catch(console.error);
}

module.exports = StudentSubmissionSystem;
