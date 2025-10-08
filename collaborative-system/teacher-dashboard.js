#!/usr/bin/env node

/**
 * Teacher Dashboard System
 * Provides comprehensive tracking and management of student submissions
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class TeacherDashboard {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.studentWorkPath = path.join(this.basePath, 'student-work');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        console.log('👨‍🏫 Teacher Dashboard');
        console.log('==================\n');
        
        while (true) {
            const choice = await this.showMainMenu();
            
            switch (choice) {
                case '1':
                    await this.viewAllSubmissions();
                    break;
                case '2':
                    await this.viewStudentProgress();
                    break;
                case '3':
                    await this.gradeSubmission();
                    break;
                case '4':
                    await this.generateReport();
                    break;
                case '5':
                    await this.manageStudents();
                    break;
                case '6':
                    await this.viewClassStatistics();
                    break;
                case '0':
                    console.log('Goodbye! 👋');
                    this.rl.close();
                    return;
                default:
                    console.log('Invalid choice. Please try again.');
            }
            
            await this.question('\nPress Enter to continue...');
        }
    }

    async showMainMenu() {
        console.log('\n📊 Teacher Dashboard Menu');
        console.log('========================');
        console.log('1. View All Submissions');
        console.log('2. View Student Progress');
        console.log('3. Grade Submission');
        console.log('4. Generate Report');
        console.log('5. Manage Students');
        console.log('6. View Class Statistics');
        console.log('0. Exit');
        
        return await this.question('\nEnter your choice: ');
    }

    async viewAllSubmissions() {
        console.log('\n📝 All Student Submissions');
        console.log('===========================');
        
        const submissions = this.getAllSubmissions();
        
        if (submissions.length === 0) {
            console.log('No submissions found.');
            return;
        }

        // Group by student
        const groupedSubmissions = this.groupSubmissionsByStudent(submissions);
        
        for (const [studentId, studentSubmissions] of Object.entries(groupedSubmissions)) {
            console.log(`\n👤 Student ${studentId}:`);
            console.log('─'.repeat(30));
            
            for (const submission of studentSubmissions) {
                const status = submission.status === 'graded' ? '✅' : '⏳';
                const date = submission.timestamp.split('T')[0];
                console.log(`${status} ${submission.submissionType} - ${date} (${submission.files.length} files)`);
            }
        }
    }

    async viewStudentProgress() {
        const studentId = await this.question('Enter student ID to view progress: ');
        const studentPath = path.join(this.studentWorkPath, `student-${studentId.padStart(3, '0')}-*`);
        
        const studentFolders = fs.readdirSync(this.studentWorkPath)
            .filter(folder => folder.startsWith(`student-${studentId.padStart(3, '0')}-`));
        
        if (studentFolders.length === 0) {
            console.log('Student not found.');
            return;
        }
        
        const studentFolder = studentFolders[0];
        const progressFile = path.join(this.studentWorkPath, studentFolder, 'progress.md');
        
        if (fs.existsSync(progressFile)) {
            console.log(`\n📊 Progress for Student ${studentId}:`);
            console.log('='.repeat(40));
            console.log(fs.readFileSync(progressFile, 'utf8'));
        } else {
            console.log('No progress file found for this student.');
        }
    }

    async gradeSubmission() {
        console.log('\n📝 Grade Submission');
        console.log('==================');
        
        const submissions = this.getAllSubmissions().filter(s => s.status === 'submitted');
        
        if (submissions.length === 0) {
            console.log('No pending submissions to grade.');
            return;
        }
        
        // Show pending submissions
        console.log('\nPending Submissions:');
        submissions.forEach((submission, index) => {
            console.log(`${index + 1}. Student ${submission.studentId} - ${submission.submissionType} (${submission.timestamp.split('T')[0]})`);
        });
        
        const choice = await this.question('\nEnter submission number to grade: ');
        const selectedSubmission = submissions[parseInt(choice) - 1];
        
        if (!selectedSubmission) {
            console.log('Invalid selection.');
            return;
        }
        
        await this.gradeSubmissionDetails(selectedSubmission);
    }

    async gradeSubmissionDetails(submission) {
        console.log(`\n📝 Grading Submission for Student ${submission.studentId}`);
        console.log('='.repeat(50));
        console.log(`Type: ${submission.submissionType}`);
        console.log(`Date: ${submission.timestamp.split('T')[0]}`);
        console.log(`Files: ${submission.files.join(', ')}`);
        
        // Display files for review
        const submissionPath = this.getSubmissionPath(submission);
        console.log('\n📁 Files to review:');
        const files = fs.readdirSync(submissionPath).filter(f => f !== 'submission-info.json');
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
        
        const fileChoice = await this.question('\nEnter file number to review (or 0 to skip): ');
        if (fileChoice !== '0') {
            const selectedFile = files[parseInt(fileChoice) - 1];
            if (selectedFile) {
                const filePath = path.join(submissionPath, selectedFile);
                console.log(`\n📄 Content of ${selectedFile}:`);
                console.log('─'.repeat(40));
                console.log(fs.readFileSync(filePath, 'utf8'));
                console.log('─'.repeat(40));
            }
        }
        
        // Grade the submission
        const grade = await this.question('\nEnter grade (0-100): ');
        const feedback = await this.question('Enter feedback: ');
        
        // Update submission with grade
        submission.status = 'graded';
        submission.grade = parseInt(grade);
        submission.feedback = feedback;
        submission.gradedAt = new Date().toISOString();
        
        // Save updated submission
        this.saveSubmission(submission);
        
        // Update student progress
        this.updateStudentGrade(submission);
        
        console.log('✅ Submission graded successfully!');
    }

    async generateReport() {
        console.log('\n📊 Generate Report');
        console.log('=================');
        
        const reportType = await this.question('Report type (1: Class Summary, 2: Student Details, 3: Module Progress): ');
        
        switch (reportType) {
            case '1':
                await this.generateClassSummary();
                break;
            case '2':
                await this.generateStudentDetails();
                break;
            case '3':
                await this.generateModuleProgress();
                break;
            default:
                console.log('Invalid report type.');
        }
    }

    async generateClassSummary() {
        const submissions = this.getAllSubmissions();
        const students = this.getUniqueStudents(submissions);
        
        console.log('\n📊 Class Summary Report');
        console.log('======================');
        console.log(`Total Students: ${students.length}`);
        console.log(`Total Submissions: ${submissions.length}`);
        console.log(`Graded Submissions: ${submissions.filter(s => s.status === 'graded').length}`);
        console.log(`Pending Submissions: ${submissions.filter(s => s.status === 'submitted').length}`);
        
        // Average grades
        const gradedSubmissions = submissions.filter(s => s.status === 'graded' && s.grade);
        if (gradedSubmissions.length > 0) {
            const avgGrade = gradedSubmissions.reduce((sum, s) => sum + s.grade, 0) / gradedSubmissions.length;
            console.log(`Average Grade: ${avgGrade.toFixed(1)}%`);
        }
        
        // Module completion
        console.log('\n📚 Module Completion:');
        const modules = ['01-basics', '02-functions', '03-loops', '04-arrays', '05-strings', 
                        '06-numbers', '07-objects', '08-error-handling', '09-promises', '10-dom'];
        
        for (const module of modules) {
            const moduleSubmissions = submissions.filter(s => s.submissionType === 'exercise' && s.files.some(f => f.includes(module)));
            const completedStudents = new Set(moduleSubmissions.map(s => s.studentId)).size;
            const completionRate = (completedStudents / students.length * 100).toFixed(1);
            console.log(`${module}: ${completedStudents}/${students.length} students (${completionRate}%)`);
        }
    }

    async generateStudentDetails() {
        const studentId = await this.question('Enter student ID for detailed report: ');
        const submissions = this.getAllSubmissions().filter(s => s.studentId === studentId);
        
        if (submissions.length === 0) {
            console.log('No submissions found for this student.');
            return;
        }
        
        console.log(`\n📊 Detailed Report for Student ${studentId}`);
        console.log('='.repeat(50));
        
        const student = submissions[0];
        console.log(`Name: ${student.studentName}`);
        console.log(`Email: ${student.email}`);
        console.log(`Total Submissions: ${submissions.length}`);
        
        // Grade breakdown
        const gradedSubmissions = submissions.filter(s => s.status === 'graded');
        if (gradedSubmissions.length > 0) {
            const avgGrade = gradedSubmissions.reduce((sum, s) => sum + s.grade, 0) / gradedSubmissions.length;
            console.log(`Average Grade: ${avgGrade.toFixed(1)}%`);
            
            console.log('\n📝 Submission History:');
            gradedSubmissions.forEach(submission => {
                console.log(`- ${submission.submissionType}: ${submission.grade}% (${submission.timestamp.split('T')[0]})`);
            });
        }
    }

    async generateModuleProgress() {
        const module = await this.question('Enter module number (01-10): ');
        const moduleSubmissions = this.getAllSubmissions().filter(s => 
            s.files.some(f => f.includes(module.padStart(2, '0')))
        );
        
        console.log(`\n📊 Module ${module} Progress Report`);
        console.log('='.repeat(40));
        
        const students = this.getUniqueStudents(moduleSubmissions);
        console.log(`Students with submissions: ${students.length}`);
        
        const exerciseSubmissions = moduleSubmissions.filter(s => s.submissionType === 'exercise');
        const assignmentSubmissions = moduleSubmissions.filter(s => s.submissionType === 'assignment');
        
        console.log(`Exercise submissions: ${exerciseSubmissions.length}`);
        console.log(`Assignment submissions: ${assignmentSubmissions.length}`);
        
        // Show individual progress
        console.log('\n👥 Individual Progress:');
        for (const student of students) {
            const studentSubmissions = moduleSubmissions.filter(s => s.studentId === student);
            const exercises = studentSubmissions.filter(s => s.submissionType === 'exercise').length;
            const assignments = studentSubmissions.filter(s => s.submissionType === 'assignment').length;
            console.log(`Student ${student}: ${exercises} exercises, ${assignments} assignments`);
        }
    }

    async manageStudents() {
        console.log('\n👥 Manage Students');
        console.log('=================');
        console.log('1. Add New Student');
        console.log('2. Remove Student');
        console.log('3. List All Students');
        console.log('4. Reset Student Progress');
        
        const choice = await this.question('Enter your choice: ');
        
        switch (choice) {
            case '1':
                await this.addStudent();
                break;
            case '2':
                await this.removeStudent();
                break;
            case '3':
                await this.listStudents();
                break;
            case '4':
                await this.resetStudentProgress();
                break;
            default:
                console.log('Invalid choice.');
        }
    }

    async addStudent() {
        const studentId = await this.question('Enter student ID: ');
        const studentName = await this.question('Enter student name: ');
        const email = await this.question('Enter student email: ');
        
        const studentFolder = `student-${studentId.padStart(3, '0')}-${studentName.toLowerCase().replace(/\s+/g, '-')}`;
        const studentPath = path.join(this.studentWorkPath, studentFolder);
        
        if (fs.existsSync(studentPath)) {
            console.log('Student folder already exists.');
            return;
        }
        
        // Create student structure
        fs.mkdirSync(studentPath, { recursive: true });
        this.createStudentStructure(studentPath, studentId, studentName, email);
        
        console.log(`✅ Student ${studentName} added successfully!`);
    }

    async listStudents() {
        const students = fs.readdirSync(this.studentWorkPath)
            .filter(folder => folder.startsWith('student-'))
            .map(folder => {
                const parts = folder.split('-');
                return {
                    id: parts[1],
                    name: parts.slice(2).join(' ').replace(/-/g, ' ')
                };
            });
        
        console.log('\n👥 Registered Students:');
        console.log('='.repeat(30));
        students.forEach(student => {
            console.log(`${student.id}: ${student.name}`);
        });
    }

    async viewClassStatistics() {
        const submissions = this.getAllSubmissions();
        const students = this.getUniqueStudents(submissions);
        
        console.log('\n📊 Class Statistics');
        console.log('==================');
        console.log(`Total Students: ${students.length}`);
        console.log(`Total Submissions: ${submissions.length}`);
        
        // Submission types
        const types = {};
        submissions.forEach(s => {
            types[s.submissionType] = (types[s.submissionType] || 0) + 1;
        });
        
        console.log('\n📝 Submission Types:');
        Object.entries(types).forEach(([type, count]) => {
            console.log(`${type}: ${count}`);
        });
        
        // Recent activity
        const recentSubmissions = submissions
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, 5);
        
        console.log('\n🕒 Recent Activity:');
        recentSubmissions.forEach(s => {
            const date = s.timestamp.split('T')[0];
            console.log(`${s.studentId} - ${s.submissionType} (${date})`);
        });
    }

    // Helper methods
    getAllSubmissions() {
        const submissions = [];
        
        if (!fs.existsSync(this.studentWorkPath)) {
            return submissions;
        }
        
        const studentFolders = fs.readdirSync(this.studentWorkPath)
            .filter(folder => folder.startsWith('student-'));
        
        for (const folder of studentFolders) {
            const submissionsPath = path.join(this.studentWorkPath, folder, 'submissions');
            if (fs.existsSync(submissionsPath)) {
                const submissionFolders = fs.readdirSync(submissionsPath);
                
                for (const submissionFolder of submissionFolders) {
                    const infoFile = path.join(submissionsPath, submissionFolder, 'submission-info.json');
                    if (fs.existsSync(infoFile)) {
                        const submission = JSON.parse(fs.readFileSync(infoFile, 'utf8'));
                        submissions.push(submission);
                    }
                }
            }
        }
        
        return submissions;
    }

    groupSubmissionsByStudent(submissions) {
        const grouped = {};
        submissions.forEach(submission => {
            if (!grouped[submission.studentId]) {
                grouped[submission.studentId] = [];
            }
            grouped[submission.studentId].push(submission);
        });
        return grouped;
    }

    getUniqueStudents(submissions) {
        return [...new Set(submissions.map(s => s.studentId))];
    }

    getSubmissionPath(submission) {
        const studentFolder = `student-${submission.studentId.padStart(3, '0')}-${submission.studentName.toLowerCase().replace(/\s+/g, '-')}`;
        const submissionFolder = `${submission.submissionType}-${submission.timestamp.split('T')[0]}`;
        return path.join(this.studentWorkPath, studentFolder, 'submissions', submissionFolder);
    }

    saveSubmission(submission) {
        const submissionPath = this.getSubmissionPath(submission);
        const infoFile = path.join(submissionPath, 'submission-info.json');
        fs.writeFileSync(infoFile, JSON.stringify(submission, null, 2));
    }

    updateStudentGrade(submission) {
        const studentFolder = `student-${submission.studentId.padStart(3, '0')}-${submission.studentName.toLowerCase().replace(/\s+/g, '-')}`;
        const progressFile = path.join(this.studentWorkPath, studentFolder, 'progress.md');
        
        if (fs.existsSync(progressFile)) {
            let progress = fs.readFileSync(progressFile, 'utf8');
            const gradeEntry = `\n## Grade Update - ${submission.timestamp.split('T')[0]}\n\n` +
                `- **Type**: ${submission.submissionType}\n` +
                `- **Grade**: ${submission.grade}%\n` +
                `- **Feedback**: ${submission.feedback}\n\n`;
            
            progress += gradeEntry;
            fs.writeFileSync(progressFile, progress);
        }
    }

    createStudentStructure(studentPath, studentId, studentName, email) {
        const structure = {
            'exercises': {},
            'assignments': {},
            'submissions': {},
            'progress.md': this.getProgressTemplate(studentId, studentName, email),
            'README.md': this.getStudentReadmeTemplate(studentName)
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

    getProgressTemplate(studentId, studentName, email) {
        return `# My Learning Progress

## Student Information
- **Student ID**: ${studentId}
- **Name**: ${studentName}
- **Email**: ${email}
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

    getStudentReadmeTemplate(studentName) {
        return `# ${studentName}'s JavaScript Learning Journey

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

// Run the dashboard if this file is executed directly
if (require.main === module) {
    const dashboard = new TeacherDashboard();
    dashboard.start().catch(console.error);
}

module.exports = TeacherDashboard;
