#!/usr/bin/env node

/**
 * Automated Grading and Testing System
 * Validates student submissions and provides automated feedback
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutoGrader {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.studentWorkPath = path.join(this.basePath, 'student-work');
        this.solutionsPath = path.join(this.basePath, 'solutions');
    }

    async gradeSubmission(submissionPath) {
        console.log(`🔍 Grading submission: ${submissionPath}`);
        
        const submissionInfo = this.loadSubmissionInfo(submissionPath);
        const files = this.getSubmissionFiles(submissionPath);
        
        const results = {
            submissionInfo,
            files: [],
            overallScore: 0,
            feedback: [],
            errors: [],
            warnings: []
        };

        for (const file of files) {
            const fileResult = await this.gradeFile(file, submissionInfo.submissionType);
            results.files.push(fileResult);
        }

        // Calculate overall score
        results.overallScore = this.calculateOverallScore(results.files);
        
        // Generate feedback
        results.feedback = this.generateFeedback(results);
        
        // Save results
        this.saveGradingResults(submissionPath, results);
        
        return results;
    }

    async gradeFile(filePath, submissionType) {
        const fileName = path.basename(filePath);
        const fileExtension = path.extname(filePath);
        
        console.log(`  📄 Grading file: ${fileName}`);
        
        const result = {
            fileName,
            score: 0,
            maxScore: 100,
            feedback: [],
            errors: [],
            warnings: [],
            tests: []
        };

        try {
            // Read file content
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Basic validation
            const validation = this.validateFile(content, fileName, submissionType);
            result.errors.push(...validation.errors);
            result.warnings.push(...validation.warnings);
            
            // Syntax checking for JavaScript files
            if (fileExtension === '.js') {
                const syntaxCheck = this.checkJavaScriptSyntax(content);
                result.errors.push(...syntaxCheck.errors);
                result.warnings.push(...syntaxCheck.warnings);
            }
            
            // Run specific tests based on file type and submission type
            const tests = await this.runFileTests(filePath, submissionType);
            result.tests = tests;
            
            // Calculate file score
            result.score = this.calculateFileScore(result);
            
        } catch (error) {
            result.errors.push(`File processing error: ${error.message}`);
            result.score = 0;
        }

        return result;
    }

    validateFile(content, fileName, submissionType) {
        const errors = [];
        const warnings = [];
        
        // Check if file is empty
        if (!content.trim()) {
            errors.push('File is empty');
            return { errors, warnings };
        }
        
        // Check minimum length
        if (content.length < 50) {
            warnings.push('File is very short - consider adding more content');
        }
        
        // Check for TODO comments (incomplete work)
        if (content.includes('TODO') || content.includes('FIXME')) {
            warnings.push('File contains TODO/FIXME comments - work may be incomplete');
        }
        
        // Check for console.log statements (debugging)
        const consoleLogCount = (content.match(/console\.log/g) || []).length;
        if (consoleLogCount > 5) {
            warnings.push(`File contains ${consoleLogCount} console.log statements - consider removing debug code`);
        }
        
        // Check for proper file structure based on submission type
        if (submissionType === 'exercise') {
            this.validateExerciseFile(content, fileName, errors, warnings);
        } else if (submissionType === 'assignment') {
            this.validateAssignmentFile(content, fileName, errors, warnings);
        }
        
        return { errors, warnings };
    }

    validateExerciseFile(content, fileName, errors, warnings) {
        // Check for function definitions
        if (!content.includes('function') && !content.includes('=>')) {
            errors.push('Exercise should contain function definitions');
        }
        
        // Check for comments
        if (!content.includes('//') && !content.includes('/*')) {
            warnings.push('Consider adding comments to explain your code');
        }
        
        // Check for variable declarations
        if (!content.includes('let') && !content.includes('const') && !content.includes('var')) {
            warnings.push('Consider using proper variable declarations (let/const)');
        }
    }

    validateAssignmentFile(content, fileName, errors, warnings) {
        // Check for more comprehensive structure
        if (content.length < 200) {
            warnings.push('Assignment file is quite short - ensure all requirements are met');
        }
        
        // Check for error handling
        if (!content.includes('try') && !content.includes('catch') && !content.includes('if')) {
            warnings.push('Consider adding error handling or validation');
        }
        
        // Check for proper formatting
        const lines = content.split('\n');
        const longLines = lines.filter(line => line.length > 100);
        if (longLines.length > 3) {
            warnings.push('Some lines are very long - consider breaking them up for readability');
        }
    }

    checkJavaScriptSyntax(content) {
        const errors = [];
        const warnings = [];
        
        try {
            // Basic syntax check by trying to parse the content
            // This is a simplified check - in production, you'd use a proper parser
            const lines = content.split('\n');
            
            // Check for common syntax errors
            let openBraces = 0;
            let openParens = 0;
            let openBrackets = 0;
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                // Count brackets, braces, parentheses
                for (const char of line) {
                    if (char === '{') openBraces++;
                    if (char === '}') openBraces--;
                    if (char === '(') openParens++;
                    if (char === ')') openParens--;
                    if (char === '[') openBrackets++;
                    if (char === ']') openBrackets--;
                }
                
                // Check for common issues
                if (line.includes('===') && line.includes('==')) {
                    warnings.push(`Line ${i + 1}: Consider using strict equality (===) instead of loose equality (==)`);
                }
                
                if (line.includes('var ')) {
                    warnings.push(`Line ${i + 1}: Consider using 'let' or 'const' instead of 'var'`);
                }
            }
            
            // Check for unmatched brackets
            if (openBraces !== 0) {
                errors.push('Unmatched curly braces { }');
            }
            if (openParens !== 0) {
                errors.push('Unmatched parentheses ( )');
            }
            if (openBrackets !== 0) {
                errors.push('Unmatched square brackets [ ]');
            }
            
        } catch (error) {
            errors.push(`Syntax error: ${error.message}`);
        }
        
        return { errors, warnings };
    }

    async runFileTests(filePath, submissionType) {
        const tests = [];
        
        try {
            // For JavaScript files, we can run basic tests
            if (path.extname(filePath) === '.js') {
                const content = fs.readFileSync(filePath, 'utf8');
                
                // Test 1: File can be executed without syntax errors
                try {
                    // Create a temporary test file
                    const testFile = path.join(path.dirname(filePath), 'test_' + path.basename(filePath));
                    fs.writeFileSync(testFile, content);
                    
                    // Try to run the file
                    execSync(`node "${testFile}"`, { timeout: 5000 });
                    tests.push({
                        name: 'Syntax Check',
                        passed: true,
                        message: 'File executes without syntax errors'
                    });
                    
                    // Clean up test file
                    fs.unlinkSync(testFile);
                } catch (error) {
                    tests.push({
                        name: 'Syntax Check',
                        passed: false,
                        message: `Syntax error: ${error.message}`
                    });
                }
                
                // Test 2: Check for required functions based on file name
                const functionTests = this.getFunctionTests(filePath, content);
                tests.push(...functionTests);
                
                // Test 3: Check for proper code structure
                const structureTests = this.getStructureTests(content);
                tests.push(...structureTests);
            }
            
        } catch (error) {
            tests.push({
                name: 'File Processing',
                passed: false,
                message: `Error processing file: ${error.message}`
            });
        }
        
        return tests;
    }

    getFunctionTests(filePath, content) {
        const tests = [];
        const fileName = path.basename(filePath, '.js');
        
        // Check for specific functions based on file name patterns
        if (fileName.includes('calculator')) {
            const calculatorTests = [
                { pattern: /function\s+\w*add\w*/, name: 'Add function', message: 'Should contain an add function' },
                { pattern: /function\s+\w*subtract\w*/, name: 'Subtract function', message: 'Should contain a subtract function' },
                { pattern: /function\s+\w*multiply\w*/, name: 'Multiply function', message: 'Should contain a multiply function' },
                { pattern: /function\s+\w*divide\w*/, name: 'Divide function', message: 'Should contain a divide function' }
            ];
            
            calculatorTests.forEach(test => {
                tests.push({
                    name: test.name,
                    passed: test.pattern.test(content),
                    message: test.message
                });
            });
        }
        
        if (fileName.includes('array')) {
            const arrayTests = [
                { pattern: /\.map\s*\(/, name: 'Map method', message: 'Should use array map method' },
                { pattern: /\.filter\s*\(/, name: 'Filter method', message: 'Should use array filter method' },
                { pattern: /\.reduce\s*\(/, name: 'Reduce method', message: 'Should use array reduce method' }
            ];
            
            arrayTests.forEach(test => {
                tests.push({
                    name: test.name,
                    passed: test.pattern.test(content),
                    message: test.message
                });
            });
        }
        
        return tests;
    }

    getStructureTests(content) {
        const tests = [];
        
        // Check for proper variable declarations
        tests.push({
            name: 'Variable Declarations',
            passed: content.includes('let ') || content.includes('const '),
            message: 'Should use let or const for variable declarations'
        });
        
        // Check for comments
        tests.push({
            name: 'Code Comments',
            passed: content.includes('//') || content.includes('/*'),
            message: 'Should include comments explaining the code'
        });
        
        // Check for proper indentation (basic check)
        const lines = content.split('\n');
        const indentedLines = lines.filter(line => line.startsWith('  ') || line.startsWith('\t'));
        tests.push({
            name: 'Code Formatting',
            passed: indentedLines.length > lines.length * 0.3,
            message: 'Should have proper indentation'
        });
        
        return tests;
    }

    calculateFileScore(fileResult) {
        let score = 100;
        
        // Deduct points for errors
        score -= fileResult.errors.length * 20;
        
        // Deduct points for warnings
        score -= fileResult.warnings.length * 5;
        
        // Add points for passed tests
        const passedTests = fileResult.tests.filter(test => test.passed).length;
        const totalTests = fileResult.tests.length;
        if (totalTests > 0) {
            const testScore = (passedTests / totalTests) * 30;
            score = Math.max(0, score - 30 + testScore);
        }
        
        return Math.max(0, Math.min(100, Math.round(score)));
    }

    calculateOverallScore(fileResults) {
        if (fileResults.length === 0) return 0;
        
        const totalScore = fileResults.reduce((sum, file) => sum + file.score, 0);
        return Math.round(totalScore / fileResults.length);
    }

    generateFeedback(results) {
        const feedback = [];
        
        // Overall feedback
        if (results.overallScore >= 90) {
            feedback.push('🌟 Excellent work! Your code demonstrates strong understanding of the concepts.');
        } else if (results.overallScore >= 80) {
            feedback.push('👍 Good work! Your code is well-structured with minor areas for improvement.');
        } else if (results.overallScore >= 70) {
            feedback.push('✅ Satisfactory work. Consider reviewing the feedback for areas to improve.');
        } else if (results.overallScore >= 60) {
            feedback.push('⚠️ Needs improvement. Please review the errors and suggestions carefully.');
        } else {
            feedback.push('❌ Significant issues found. Please review the requirements and try again.');
        }
        
        // File-specific feedback
        results.files.forEach(file => {
            if (file.score < 70) {
                feedback.push(`📄 ${file.fileName}: Needs attention (${file.score}/100)`);
            }
            
            if (file.errors.length > 0) {
                feedback.push(`🔴 ${file.fileName} errors: ${file.errors.join(', ')}`);
            }
            
            if (file.warnings.length > 0) {
                feedback.push(`🟡 ${file.fileName} warnings: ${file.warnings.join(', ')}`);
            }
        });
        
        // Test results
        const allTests = results.files.flatMap(file => file.tests);
        const failedTests = allTests.filter(test => !test.passed);
        if (failedTests.length > 0) {
            feedback.push(`🧪 Failed tests: ${failedTests.map(t => t.name).join(', ')}`);
        }
        
        return feedback;
    }

    loadSubmissionInfo(submissionPath) {
        const infoFile = path.join(submissionPath, 'submission-info.json');
        if (fs.existsSync(infoFile)) {
            return JSON.parse(fs.readFileSync(infoFile, 'utf8'));
        }
        return null;
    }

    getSubmissionFiles(submissionPath) {
        return fs.readdirSync(submissionPath)
            .filter(file => file !== 'submission-info.json' && file !== 'grading-results.json')
            .map(file => path.join(submissionPath, file));
    }

    saveGradingResults(submissionPath, results) {
        const resultsFile = path.join(submissionPath, 'grading-results.json');
        fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
        
        // Also update the submission info
        const infoFile = path.join(submissionPath, 'submission-info.json');
        if (fs.existsSync(infoFile)) {
            const submissionInfo = JSON.parse(fs.readFileSync(infoFile, 'utf8'));
            submissionInfo.autoGrade = {
                score: results.overallScore,
                gradedAt: new Date().toISOString(),
                feedback: results.feedback
            };
            fs.writeFileSync(infoFile, JSON.stringify(submissionInfo, null, 2));
        }
    }

    async gradeAllPendingSubmissions() {
        console.log('🔍 Finding all pending submissions...');
        
        const submissions = this.getAllPendingSubmissions();
        console.log(`Found ${submissions.length} pending submissions`);
        
        for (const submission of submissions) {
            try {
                await this.gradeSubmission(submission);
                console.log(`✅ Graded: ${submission}`);
            } catch (error) {
                console.error(`❌ Error grading ${submission}: ${error.message}`);
            }
        }
        
        console.log('🎉 All submissions graded!');
    }

    getAllPendingSubmissions() {
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
                    const submissionPath = path.join(submissionsPath, submissionFolder);
                    const infoFile = path.join(submissionPath, 'submission-info.json');
                    const resultsFile = path.join(submissionPath, 'grading-results.json');
                    
                    // Check if submission exists and hasn't been graded yet
                    if (fs.existsSync(infoFile) && !fs.existsSync(resultsFile)) {
                        const submissionInfo = JSON.parse(fs.readFileSync(infoFile, 'utf8'));
                        if (submissionInfo.status === 'submitted') {
                            submissions.push(submissionPath);
                        }
                    }
                }
            }
        }
        
        return submissions;
    }
}

// Run auto-grader if this file is executed directly
if (require.main === module) {
    const grader = new AutoGrader();
    
    const args = process.argv.slice(2);
    if (args.length > 0) {
        // Grade specific submission
        grader.gradeSubmission(args[0]).catch(console.error);
    } else {
        // Grade all pending submissions
        grader.gradeAllPendingSubmissions().catch(console.error);
    }
}

module.exports = AutoGrader;
