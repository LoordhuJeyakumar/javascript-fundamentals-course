#!/usr/bin/env node

/**
 * GitHub Submission Helper
 * Helps students submit their work via GitHub Pull Requests
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

class GitHubSubmitter {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        console.log('🚀 GitHub Submission Helper');
        console.log('==========================\n');
        
        const studentInfo = await this.getStudentInfo();
        const submissionType = await this.getSubmissionType();
        const files = await this.getFilesToSubmit();
        
        await this.prepareSubmission(studentInfo, submissionType, files);
        await this.createGitHubSubmission(studentInfo, submissionType, files);
        
        this.rl.close();
    }

    async getStudentInfo() {
        const studentId = await this.question('Enter your student ID (e.g., 001): ');
        const studentName = await this.question('Enter your full name: ');
        const githubUsername = await this.question('Enter your GitHub username: ');
        
        return { studentId, studentName, githubUsername };
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

    async prepareSubmission(studentInfo, submissionType, files) {
        console.log('\n📁 Preparing submission...');
        
        const studentFolder = `student-${studentInfo.studentId.padStart(3, '0')}-${studentInfo.studentName.toLowerCase().replace(/\s+/g, '-')}`;
        const studentPath = path.join(this.basePath, 'student-work', studentFolder);
        
        // Create student folder if it doesn't exist
        if (!fs.existsSync(studentPath)) {
            fs.mkdirSync(studentPath, { recursive: true });
            this.createStudentStructure(studentPath, studentInfo);
        }

        // Create submission folder
        const timestamp = new Date().toISOString().split('T')[0];
        const submissionFolder = `${submissionType}-${timestamp}`;
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
            githubUsername: studentInfo.githubUsername,
            submissionType: submissionType,
            timestamp: new Date().toISOString(),
            files: files.map(f => path.basename(f)),
            status: 'prepared'
        };

        fs.writeFileSync(
            path.join(submissionPath, 'submission-info.json'),
            JSON.stringify(metadata, null, 2)
        );

        console.log(`✅ Files prepared in: ${submissionPath}`);
    }

    async createGitHubSubmission(studentInfo, submissionType, files) {
        console.log('\n🔗 Creating GitHub submission...');
        
        try {
            // Check if we're in a git repository
            execSync('git status', { stdio: 'pipe' });
            
            // Check if we're on the right branch
            const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
            console.log(`📋 Current branch: ${currentBranch}`);
            
            // Create a new branch for this submission
            const branchName = `submission-${studentInfo.studentId}-${submissionType}-${Date.now()}`;
            console.log(`🌿 Creating branch: ${branchName}`);
            
            execSync(`git checkout -b ${branchName}`);
            
            // Add and commit changes
            execSync('git add .');
            execSync(`git commit -m "Submit ${submissionType} - Student ${studentInfo.studentId}"`);
            
            // Push the branch
            execSync(`git push origin ${branchName}`);
            
            console.log('\n✅ GitHub submission prepared!');
            console.log('\n📝 Next steps:');
            console.log('1. Go to your GitHub repository');
            console.log(`2. You should see a prompt to create a Pull Request for branch: ${branchName}`);
            console.log('3. Click "Compare & pull request"');
            console.log('4. Fill in the PR details:');
            console.log(`   - Title: "Student ${studentInfo.studentId} - ${submissionType} submission"`);
            console.log(`   - Description: Include your name, what you submitted, and any notes`);
            console.log('5. Submit the Pull Request');
            
            // Generate PR template
            this.generatePRTemplate(studentInfo, submissionType, files, branchName);
            
        } catch (error) {
            console.log('\n❌ Git operations failed. Please ensure:');
            console.log('1. You have git installed');
            console.log('2. You are in the course repository directory');
            console.log('3. You have a GitHub remote configured');
            console.log('4. You have push access to the repository');
            
            console.log('\n📋 Manual submission steps:');
            console.log('1. Copy your files to the student-work folder');
            console.log('2. Commit and push your changes');
            console.log('3. Create a Pull Request on GitHub');
        }
    }

    generatePRTemplate(studentInfo, submissionType, files, branchName) {
        const template = `# Student ${studentInfo.studentId} - ${submissionType} Submission

## Student Information
- **Student ID**: ${studentInfo.studentId}
- **Name**: ${studentInfo.studentName}
- **GitHub Username**: ${studentInfo.githubUsername}
- **Submission Type**: ${submissionType}
- **Date**: ${new Date().toLocaleDateString()}

## Files Submitted
${files.map(f => `- ${path.basename(f)}`).join('\n')}

## Description
Brief description of what you've completed and any notes for the teacher.

## Checklist
- [ ] All required files are included
- [ ] Code follows the requirements
- [ ] Code is properly commented
- [ ] Ready for review

## Notes
Add any additional notes or questions here.

---
*This submission was prepared using the GitHub Submission Helper*`;

        const templatePath = path.join(this.basePath, 'student-work', `PR_TEMPLATE_${studentInfo.studentId}.md`);
        fs.writeFileSync(templatePath, template);
        
        console.log(`\n📄 PR template created: ${templatePath}`);
        console.log('Copy this content when creating your Pull Request on GitHub.');
    }

    createStudentStructure(studentPath, studentInfo) {
        const structure = {
            'exercises': {},
            'assignments': {},
            'submissions': {},
            'progress.md': this.getProgressTemplate(studentInfo),
            'README.md': this.getStudentReadmeTemplate(studentInfo.studentName)
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

    getProgressTemplate(studentInfo) {
        return `# My Learning Progress

## Student Information
- **Student ID**: ${studentInfo.studentId}
- **Name**: ${studentInfo.studentName}
- **GitHub**: ${studentInfo.githubUsername}
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
2. **Submit Work**: Use the GitHub submission helper to submit your work
3. **Track Progress**: Update your progress.md file as you complete work
4. **Review Feedback**: Check for teacher feedback in Pull Requests

## 📚 Learning Resources

- [Course Materials](../README.md)
- [Student Guide](../STUDENT_GUIDE.md)
- [Teacher Guide](../TEACHER_GUIDE.md)

## 🤝 Getting Help

- Ask questions in class
- Use office hours
- Form study groups
- Check the course repository for additional resources
- Create GitHub Issues for questions

Happy coding! 🚀
`;
    }

    question(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }
}

// Run the GitHub submitter if this file is executed directly
if (require.main === module) {
    const submitter = new GitHubSubmitter();
    submitter.start().catch(console.error);
}

module.exports = GitHubSubmitter;
