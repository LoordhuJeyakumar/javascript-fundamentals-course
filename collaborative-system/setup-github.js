#!/usr/bin/env node

/**
 * GitHub Integration Setup
 * Sets up the repository for GitHub-based student submissions
 */

const fs = require('fs');
const path = require('path');

class GitHubSetup {
    constructor() {
        this.basePath = path.join(__dirname, '..');
    }

    async setup() {
        console.log('🔗 Setting up GitHub Integration');
        console.log('================================\n');
        
        try {
            await this.createGitHubTemplates();
            await this.createGitHubActions();
            await this.createStudentInstructions();
            await this.updateMainReadme();
            
            console.log('\n✅ GitHub integration setup completed!');
            console.log('\n📚 Next Steps:');
            console.log('1. Commit these changes to your repository');
            console.log('2. Push to GitHub');
            console.log('3. Students can now use: node collaborative-system/github-submit.js');
            console.log('4. Set up branch protection rules in GitHub repository settings');
            
        } catch (error) {
            console.error('❌ Setup failed:', error.message);
            process.exit(1);
        }
    }

    async createGitHubTemplates() {
        console.log('📝 Creating GitHub templates...');
        
        const templatesDir = path.join(this.basePath, '.github', 'ISSUE_TEMPLATE');
        fs.mkdirSync(templatesDir, { recursive: true });
        
        // Exercise submission template
        const exerciseTemplate = `---
name: Exercise Submission
about: Submit a completed exercise
title: "[EXERCISE] Student XXX - Exercise Name"
labels: exercise, submission
assignees: 
---

## Student Information
- **Student ID**: 
- **Name**: 
- **GitHub Username**: 
- **Exercise**: 
- **Module**: 

## Submission Details
- **Files Submitted**: 
- **Completion Status**: 
- **Notes**: 

## Code
\`\`\`javascript
// Paste your code here
\`\`\`

## Checklist
- [ ] Code follows the requirements
- [ ] Code is properly commented
- [ ] All files are included
- [ ] Ready for review
`;

        fs.writeFileSync(path.join(templatesDir, 'exercise-submission.md'), exerciseTemplate);
        console.log('   ✅ Created: exercise-submission.md');

        // Assignment submission template
        const assignmentTemplate = `---
name: Assignment Submission
about: Submit a completed assignment
title: "[ASSIGNMENT] Student XXX - Assignment Name"
labels: assignment, submission
assignees: 
---

## Student Information
- **Student ID**: 
- **Name**: 
- **GitHub Username**: 
- **Assignment**: 
- **Module**: 

## Submission Details
- **Files Submitted**: 
- **Completion Status**: 
- **Notes**: 

## Code
\`\`\`javascript
// Paste your code here
\`\`\`

## Checklist
- [ ] Code follows the requirements
- [ ] Code is properly commented
- [ ] All files are included
- [ ] Ready for review
`;

        fs.writeFileSync(path.join(templatesDir, 'assignment-submission.md'), assignmentTemplate);
        console.log('   ✅ Created: assignment-submission.md');

        // Question/Help template
        const questionTemplate = `---
name: Question/Help Request
about: Ask a question or request help
title: "[QUESTION] Brief description"
labels: question, help
assignees: 
---

## Question
What do you need help with?

## Context
Provide any relevant context or background information.

## What you've tried
Describe what you've already tried to solve this problem.

## Code (if applicable)
\`\`\`javascript
// Paste relevant code here
\`\`\`

## Additional Information
Add any other information that might be helpful.
`;

        fs.writeFileSync(path.join(templatesDir, 'question-help.md'), questionTemplate);
        console.log('   ✅ Created: question-help.md');
    }

    async createGitHubActions() {
        console.log('⚙️ Creating GitHub Actions...');
        
        const workflowsDir = path.join(this.basePath, '.github', 'workflows');
        fs.mkdirSync(workflowsDir, { recursive: true });
        
        // Auto-grade workflow
        const autoGradeWorkflow = `name: Auto-Grade Submissions

on:
  pull_request:
    paths:
      - 'student-work/**'
    types: [opened, synchronize]

jobs:
  grade:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
          
      - name: Install dependencies
        run: |
          cd collaborative-system
          npm install
          
      - name: Run Auto-Grader
        id: grade
        run: |
          cd collaborative-system
          echo "Running auto-grader on PR"
          node auto-grader.js || echo "Auto-grader completed with warnings"
          
      - name: Comment Results
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const path = require('path');
            
            // Look for grading results
            const resultsPath = 'collaborative-system/grading-results.json';
            if (fs.existsSync(resultsPath)) {
              const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
              
              const comment = \`## 🤖 Auto-Grading Results
              
              **Overall Score**: \${results.overallScore}/100
              
              **Feedback**:
              \${results.feedback.map(f => \`- \${f}\`).join('\\n')}
              
              **Files Graded**: \${results.files.length}
              
              ---
              *This is an automated grading result. Please review and provide additional feedback if needed.*\`;
              
              github.rest.issues.createComment({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: comment
              });
            } else {
              github.rest.issues.createComment({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: '## 🤖 Auto-Grader\n\nAuto-grader completed. Please check the logs for any issues.'
              });
            }
`;

        fs.writeFileSync(path.join(workflowsDir, 'auto-grade.yml'), autoGradeWorkflow);
        console.log('   ✅ Created: auto-grade.yml');

        // Welcome workflow
        const welcomeWorkflow = `name: Welcome New Students

on:
  issues:
    types: [opened]

jobs:
  welcome:
    runs-on: ubuntu-latest
    steps:
      - name: Welcome new student
        uses: actions/github-script@v6
        with:
          script: |
            const issue = context.payload.issue;
            const isSubmission = issue.title.includes('[EXERCISE]') || issue.title.includes('[ASSIGNMENT]');
            
            if (isSubmission) {
              const comment = \`## 👋 Welcome to the JavaScript Learning Course!
              
              Thank you for your submission! Here's what happens next:
              
              1. **Review**: Your submission will be reviewed by the teacher
              2. **Feedback**: You'll receive detailed feedback and a grade
              3. **Progress**: Your progress will be tracked in the system
              
              **Tips for success**:
              - Make sure your code is well-commented
              - Test your code before submitting
              - Ask questions if you need help
              
              Good luck with your learning journey! 🚀\`;
              
              github.rest.issues.createComment({
                issue_number: issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: comment
              });
            }
`;

        fs.writeFileSync(path.join(workflowsDir, 'welcome.yml'), welcomeWorkflow);
        console.log('   ✅ Created: welcome.yml');
    }

    async createStudentInstructions() {
        console.log('📚 Creating student instructions...');
        
        const instructions = `# 🎓 How to Submit Your Work via GitHub

## Quick Start

### 1. Fork the Repository
1. Go to the main course repository on GitHub
2. Click the "Fork" button in the top-right corner
3. This creates your own copy of the repository

### 2. Clone Your Fork
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/javascript-fundamentals-course.git
cd javascript-fundamentals-course
\`\`\`

### 3. Set Up Your Workspace
\`\`\`bash
# Create your student folder
mkdir -p student-work/student-001-YOUR_NAME
cd student-work/student-001-YOUR_NAME

# Create subfolders
mkdir exercises assignments submissions
\`\`\`

### 4. Submit Your Work
\`\`\`bash
# Use the GitHub submission helper
node collaborative-system/github-submit.js

# Follow the prompts to submit your work
\`\`\`

## Manual Submission

If you prefer to submit manually:

### 1. Complete Your Work
- Work on exercises in your student folder
- Save your files with clear names
- Test your code before submitting

### 2. Commit and Push
\`\`\`bash
# Add your changes
git add .
git commit -m "Complete exercise 1 - variables and data types"
git push origin main
\`\`\`

### 3. Create Pull Request
1. Go to your GitHub repository
2. Click "Compare & pull request"
3. Fill in the details:
   - **Title**: "Student 001 - Exercise 1 Submission"
   - **Description**: Include your name, what you submitted, and any notes
4. Submit the Pull Request

## Using Issues for Questions

### Ask Questions
1. Go to the main repository
2. Click "Issues" tab
3. Click "New Issue"
4. Use the "Question/Help Request" template
5. Describe your question or problem

### Submit via Issues
1. Use the "Exercise Submission" or "Assignment Submission" template
2. Paste your code in the issue
3. Attach files if needed
4. Submit the issue

## Best Practices

### File Organization
\`\`\`
student-work/
└── student-001-YOUR_NAME/
    ├── exercises/
    │   ├── 01-basics/
    │   ├── 02-functions/
    │   └── 03-loops/
    ├── assignments/
    │   ├── 01-basics/
    │   └── 02-functions/
    ├── submissions/
    └── progress.md
\`\`\`

### Naming Conventions
- **Files**: \`exercise-1-variables.js\`, \`assignment-2-calculator.js\`
- **Folders**: \`student-001-john-doe\`, \`01-basics\`
- **Commits**: \`Complete exercise 1 - variables\`

### Code Quality
- Add comments to explain your code
- Use meaningful variable names
- Test your code before submitting
- Follow the coding standards

## Getting Help

### Resources
- [Course Materials](../README.md)
- [Student Guide](../STUDENT_GUIDE.md)
- [GitHub Documentation](https://docs.github.com/)

### Support
- Create GitHub Issues for questions
- Ask in class or office hours
- Form study groups with classmates
- Check the course repository for updates

## Troubleshooting

### Common Issues
1. **"Repository not found"**: Make sure you forked the repository
2. **"Permission denied"**: Check your GitHub authentication
3. **"Merge conflicts"**: Pull the latest changes before submitting
4. **"Files not found"**: Check your file paths

### Getting Help
1. Check the error message
2. Search GitHub Issues for similar problems
3. Ask for help in class
4. Create a new issue with your problem

---

**Happy Learning! 🚀**
`;

        fs.writeFileSync(path.join(this.basePath, 'GITHUB_SUBMISSION_GUIDE.md'), instructions);
        console.log('   ✅ Created: GITHUB_SUBMISSION_GUIDE.md');
    }

    async updateMainReadme() {
        console.log('📖 Updating main README...');
        
        const readmePath = path.join(this.basePath, 'README.md');
        let readme = fs.readFileSync(readmePath, 'utf8');
        
        // Add GitHub submission section
        const githubSection = `

## 🤝 Collaborative Learning System

This course now includes a comprehensive collaborative learning system that enables:

- **Student Submissions**: Easy submission of exercises and assignments via GitHub
- **Teacher Dashboard**: Complete management interface for tracking progress
- **Peer Review**: Students can review each other's work
- **Study Groups**: Collaborative learning through group projects
- **Automated Grading**: AI-powered grading for basic submissions

### Quick Start for Students

1. **Fork this repository** on GitHub
2. **Clone your fork** locally
3. **Set up your workspace**:
   \`\`\`bash
   mkdir -p student-work/student-001-YOUR_NAME
   \`\`\`
4. **Submit your work**:
   \`\`\`bash
   node collaborative-system/github-submit.js
   \`\`\`

### Quick Start for Teachers

1. **Set up the system**:
   \`\`\`bash
   node collaborative-system/setup-github.js
   \`\`\`
2. **Start the teacher dashboard**:
   \`\`\`bash
   node collaborative-system/teacher-dashboard.js
   \`\`\`
3. **Review submissions** via GitHub Pull Requests

### Documentation

- [GitHub Submission Guide](GITHUB_SUBMISSION_GUIDE.md)
- [Collaborative System Guide](COLLABORATIVE_SYSTEM_GUIDE.md)
- [Installation Guide](collaborative-system/INSTALLATION.md)

`;

        // Insert the section before the final line
        const lines = readme.split('\n');
        const lastLine = lines.pop();
        lines.push(githubSection);
        lines.push(lastLine);
        
        fs.writeFileSync(readmePath, lines.join('\n'));
        console.log('   ✅ Updated: README.md');
    }
}

// Run setup if this file is executed directly
if (require.main === module) {
    const setup = new GitHubSetup();
    setup.setup().catch(console.error);
}

module.exports = GitHubSetup;
