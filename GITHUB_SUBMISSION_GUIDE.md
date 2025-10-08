# 🎓 How to Submit Your Work via GitHub

## Quick Start

### 1. Fork the Repository
1. Go to the main course repository on GitHub
2. Click the "Fork" button in the top-right corner
3. This creates your own copy of the repository

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/javascript-fundamentals-course.git
cd javascript-fundamentals-course
```

### 3. Set Up Your Workspace
```bash
# Create your student folder
mkdir -p student-work/student-001-YOUR_NAME
cd student-work/student-001-YOUR_NAME

# Create subfolders
mkdir exercises assignments submissions
```

### 4. Submit Your Work
```bash
# Use the GitHub submission helper
node collaborative-system/github-submit.js

# Follow the prompts to submit your work
```

## Manual Submission

If you prefer to submit manually:

### 1. Complete Your Work
- Work on exercises in your student folder
- Save your files with clear names
- Test your code before submitting

### 2. Commit and Push
```bash
# Add your changes
git add .
git commit -m "Complete exercise 1 - variables and data types"
git push origin main
```

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
```
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
```

### Naming Conventions
- **Files**: `exercise-1-variables.js`, `assignment-2-calculator.js`
- **Folders**: `student-001-john-doe`, `01-basics`
- **Commits**: `Complete exercise 1 - variables`

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
