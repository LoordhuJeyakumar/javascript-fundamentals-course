#!/usr/bin/env node

/**
 * Setup Script for Collaborative Learning System
 * Initializes the collaborative features and directory structure
 */

const fs = require('fs');
const path = require('path');

class CollaborativeSetup {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.setupPath = path.join(this.basePath, 'collaborative-system');
    }

    async setup() {
        console.log('🚀 Setting up Collaborative Learning System');
        console.log('==========================================\n');
        
        try {
            await this.createDirectoryStructure();
            await this.createConfigurationFiles();
            await this.setupPermissions();
            await this.createDocumentation();
            await this.runInitialTests();
            
            console.log('\n✅ Setup completed successfully!');
            console.log('\n📚 Next Steps:');
            console.log('1. Run: node collaborative-system/collaboration-hub.js');
            console.log('2. Add students using the teacher dashboard');
            console.log('3. Start the learning journey!');
            
        } catch (error) {
            console.error('❌ Setup failed:', error.message);
            process.exit(1);
        }
    }

    async createDirectoryStructure() {
        console.log('📁 Creating directory structure...');
        
        const directories = [
            'collaborative/peer-reviews',
            'collaborative/study-groups',
            'collaborative/group-projects',
            'collaborative/discussions',
            'student-work',
            'backups',
            'reports',
            'logs'
        ];
        
        for (const dir of directories) {
            const dirPath = path.join(this.basePath, dir);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
                console.log(`   ✅ Created: ${dir}`);
            } else {
                console.log(`   ⚠️  Exists: ${dir}`);
            }
        }
    }

    async createConfigurationFiles() {
        console.log('⚙️ Creating configuration files...');
        
        // Main configuration
        const config = {
            system: {
                name: 'JavaScript Learning Collaborative System',
                version: '1.0.0',
                created: new Date().toISOString()
            },
            features: {
                studentSubmissions: true,
                peerReview: true,
                studyGroups: true,
                autoGrading: true,
                teacherDashboard: true
            },
            settings: {
                maxFileSize: '10MB',
                allowedFileTypes: ['.js', '.md', '.txt', '.json'],
                maxStudentsPerGroup: 8,
                autoGradeEnabled: true,
                peerReviewRequired: false
            },
            paths: {
                studentWork: 'student-work',
                collaborative: 'collaborative',
                solutions: 'solutions',
                backups: 'backups',
                reports: 'reports'
            }
        };
        
        const configPath = path.join(this.basePath, 'collaborative-system', 'config.json');
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log('   ✅ Created: config.json');
        
        // User roles configuration
        const roles = {
            student: {
                permissions: [
                    'submit_work',
                    'view_own_progress',
                    'request_peer_review',
                    'review_peer_work',
                    'join_study_groups',
                    'create_study_groups'
                ]
            },
            teacher: {
                permissions: [
                    'view_all_submissions',
                    'grade_submissions',
                    'view_student_progress',
                    'generate_reports',
                    'manage_students',
                    'view_class_statistics',
                    'auto_grade_submissions',
                    'manage_study_groups'
                ]
            },
            admin: {
                permissions: [
                    'system_administration',
                    'backup_data',
                    'restore_data',
                    'cleanup_system',
                    'manage_all_users',
                    'system_maintenance'
                ]
            }
        };
        
        const rolesPath = path.join(this.basePath, 'collaborative-system', 'roles.json');
        fs.writeFileSync(rolesPath, JSON.stringify(roles, null, 2));
        console.log('   ✅ Created: roles.json');
    }

    async setupPermissions() {
        console.log('🔐 Setting up permissions...');
        
        // Create a simple permission system
        const permissions = {
            files: {
                'student-submission.js': { executable: true },
                'teacher-dashboard.js': { executable: true },
                'auto-grader.js': { executable: true },
                'peer-review.js': { executable: true },
                'collaboration-hub.js': { executable: true }
            },
            directories: {
                'student-work': { writable: true },
                'collaborative': { writable: true },
                'backups': { writable: true },
                'reports': { writable: true }
            }
        };
        
        const permissionsPath = path.join(this.basePath, 'collaborative-system', 'permissions.json');
        fs.writeFileSync(permissionsPath, JSON.stringify(permissions, null, 2));
        console.log('   ✅ Created: permissions.json');
    }

    async createDocumentation() {
        console.log('📚 Creating documentation...');
        
        // Main README for collaborative system
        const readme = `# Collaborative Learning System

A comprehensive system for managing student submissions, peer reviews, and collaborative learning in the JavaScript Fundamentals course.

## 🚀 Quick Start

1. **Start the system:**
   \`\`\`bash
   node collaborative-system/collaboration-hub.js
   \`\`\`

2. **For students:**
   \`\`\`bash
   node collaborative-system/student-submission.js
   \`\`\`

3. **For teachers:**
   \`\`\`bash
   node collaborative-system/teacher-dashboard.js
   \`\`\`

## 📁 System Components

### Student Features
- **Submit Work**: Submit exercises, assignments, and projects
- **Track Progress**: Monitor your learning journey
- **Peer Review**: Request and provide peer feedback
- **Study Groups**: Collaborate with classmates
- **View Feedback**: See teacher and peer feedback

### Teacher Features
- **View Submissions**: See all student work
- **Grade Work**: Provide grades and feedback
- **Track Progress**: Monitor individual and class progress
- **Generate Reports**: Create detailed analytics
- **Manage Students**: Add, remove, and manage students
- **Auto-Grade**: Automated grading for basic submissions

### Collaborative Features
- **Peer Review System**: Students can review each other's work
- **Study Groups**: Form study groups for collaboration
- **Group Projects**: Work together on assignments
- **Discussion Forums**: Discuss topics and ask questions

## 🛠️ Technical Details

### File Structure
\`\`\`
collaborative-system/
├── student-submission.js    # Student submission system
├── teacher-dashboard.js     # Teacher management interface
├── auto-grader.js          # Automated grading system
├── peer-review.js          # Peer review functionality
├── collaboration-hub.js    # Main system interface
├── setup.js               # Initial setup script
├── config.json            # System configuration
├── roles.json             # User role definitions
└── permissions.json       # File permissions
\`\`\`

### Data Storage
- **Student Work**: \`student-work/\` directory
- **Collaborative Data**: \`collaborative/\` directory
- **Backups**: \`backups/\` directory
- **Reports**: \`reports/\` directory

## 🔧 Configuration

Edit \`config.json\` to customize:
- File size limits
- Allowed file types
- Group size limits
- Auto-grading settings
- Feature toggles

## 📊 Monitoring

The system provides comprehensive monitoring:
- Student progress tracking
- Submission statistics
- Peer review analytics
- System health monitoring
- Performance metrics

## 🤝 Support

For help and support:
1. Check the documentation
2. Review error logs
3. Contact system administrator
4. Check GitHub issues

## 🔄 Updates

To update the system:
1. Backup your data
2. Download new version
3. Run setup script
4. Restore data if needed

---

**Happy Learning! 🚀**
`;

        const readmePath = path.join(this.basePath, 'collaborative-system', 'README.md');
        fs.writeFileSync(readmePath, readme);
        console.log('   ✅ Created: README.md');
        
        // User guide
        const userGuide = `# User Guide - Collaborative Learning System

## 👨‍🎓 For Students

### Getting Started
1. Run the student submission system
2. Enter your student ID and name
3. Start submitting your work
4. Request peer reviews
5. Join study groups

### Submitting Work
1. Complete your exercises or assignments
2. Run the submission system
3. Select the files to submit
4. Add any notes or comments
5. Submit and track your progress

### Peer Review
1. Request a peer review for your work
2. Share the review ID with classmates
3. Review other students' work
4. Provide constructive feedback
5. Learn from others' feedback

### Study Groups
1. Create or join a study group
2. Collaborate on projects
3. Share resources and ideas
4. Help each other learn
5. Track group progress

## 👨‍🏫 For Teachers

### Getting Started
1. Run the teacher dashboard
2. Add your students
3. Set up assignments
4. Monitor progress
5. Provide feedback

### Managing Students
1. Add new students
2. View student progress
3. Grade submissions
4. Provide feedback
5. Track performance

### Grading and Feedback
1. View all submissions
2. Grade individual work
3. Use auto-grading for basic checks
4. Provide detailed feedback
5. Track grades and progress

### Reports and Analytics
1. Generate class reports
2. View submission statistics
3. Track student progress
4. Identify struggling students
5. Monitor system health

## ⚙️ For Administrators

### System Management
1. Monitor system health
2. Backup and restore data
3. Manage user permissions
4. System maintenance
5. Performance optimization

### Data Management
1. Regular backups
2. Data cleanup
3. Storage optimization
4. Security updates
5. System monitoring

## 🔧 Troubleshooting

### Common Issues
1. **File not found**: Check file paths
2. **Permission denied**: Check file permissions
3. **System errors**: Check logs
4. **Performance issues**: Check system resources

### Getting Help
1. Check error messages
2. Review system logs
3. Contact support
4. Check documentation
5. Report bugs

---

**Need more help? Check the main README or contact support! 📚**
`;

        const userGuidePath = path.join(this.basePath, 'collaborative-system', 'USER_GUIDE.md');
        fs.writeFileSync(userGuidePath, userGuide);
        console.log('   ✅ Created: USER_GUIDE.md');
    }

    async runInitialTests() {
        console.log('🧪 Running initial tests...');
        
        try {
            // Test file creation
            const testFile = path.join(this.basePath, 'collaborative-system', 'test.txt');
            fs.writeFileSync(testFile, 'Test file');
            fs.unlinkSync(testFile);
            console.log('   ✅ File operations test passed');
            
            // Test directory creation
            const testDir = path.join(this.basePath, 'collaborative-system', 'test-dir');
            fs.mkdirSync(testDir);
            fs.rmdirSync(testDir);
            console.log('   ✅ Directory operations test passed');
            
            // Test JSON parsing
            const testConfig = { test: true };
            const testConfigPath = path.join(this.basePath, 'collaborative-system', 'test-config.json');
            fs.writeFileSync(testConfigPath, JSON.stringify(testConfig));
            const loadedConfig = JSON.parse(fs.readFileSync(testConfigPath, 'utf8'));
            fs.unlinkSync(testConfigPath);
            console.log('   ✅ JSON operations test passed');
            
            console.log('   ✅ All initial tests passed');
            
        } catch (error) {
            console.log(`   ❌ Test failed: ${error.message}`);
            throw error;
        }
    }
}

// Run setup if this file is executed directly
if (require.main === module) {
    const setup = new CollaborativeSetup();
    setup.setup().catch(console.error);
}

module.exports = CollaborativeSetup;
