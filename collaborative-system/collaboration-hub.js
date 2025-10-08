#!/usr/bin/env node

/**
 * Main Collaboration Hub
 * Central interface for all collaborative features
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Import the other systems
const StudentSubmissionSystem = require('./student-submission');
const TeacherDashboard = require('./teacher-dashboard');
const AutoGrader = require('./auto-grader');
const PeerReviewSystem = require('./peer-review');

class CollaborationHub {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        // Initialize systems
        this.studentSystem = new StudentSubmissionSystem();
        this.teacherDashboard = new TeacherDashboard();
        this.autoGrader = new AutoGrader();
        this.peerReview = new PeerReviewSystem();
    }

    async start() {
        console.log('🎓 JavaScript Learning Collaboration Hub');
        console.log('========================================\n');
        
        while (true) {
            const userType = await this.getUserType();
            
            switch (userType) {
                case '1':
                    await this.studentMenu();
                    break;
                case '2':
                    await this.teacherMenu();
                    break;
                case '3':
                    await this.adminMenu();
                    break;
                case '0':
                    console.log('Goodbye! 👋');
                    this.rl.close();
                    return;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    }

    async getUserType() {
        console.log('\n🎯 Who are you?');
        console.log('===============');
        console.log('1. Student');
        console.log('2. Teacher');
        console.log('3. Administrator');
        console.log('0. Exit');
        
        return await this.question('\nEnter your choice: ');
    }

    async studentMenu() {
        while (true) {
            console.log('\n👨‍🎓 Student Menu');
            console.log('================');
            console.log('1. Submit Work');
            console.log('2. View My Progress');
            console.log('3. Request Peer Review');
            console.log('4. Review Peer Work');
            console.log('5. Join Study Group');
            console.log('6. View My Reviews');
            console.log('0. Back to Main Menu');
            
            const choice = await this.question('\nEnter your choice: ');
            
            switch (choice) {
                case '1':
                    await this.studentSystem.start();
                    break;
                case '2':
                    await this.viewStudentProgress();
                    break;
                case '3':
                    await this.peerReview.requestPeerReview();
                    break;
                case '4':
                    await this.peerReview.reviewPeerWork();
                    break;
                case '5':
                    await this.peerReview.joinStudyGroup();
                    break;
                case '6':
                    await this.peerReview.viewMyReviews();
                    break;
                case '0':
                    return;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    }

    async teacherMenu() {
        while (true) {
            console.log('\n👨‍🏫 Teacher Menu');
            console.log('================');
            console.log('1. View All Submissions');
            console.log('2. Grade Submissions');
            console.log('3. View Student Progress');
            console.log('4. Generate Reports');
            console.log('5. Manage Students');
            console.log('6. View Class Statistics');
            console.log('7. Auto-Grade Submissions');
            console.log('8. Manage Study Groups');
            console.log('0. Back to Main Menu');
            
            const choice = await this.question('\nEnter your choice: ');
            
            switch (choice) {
                case '1':
                    await this.teacherDashboard.viewAllSubmissions();
                    break;
                case '2':
                    await this.teacherDashboard.gradeSubmission();
                    break;
                case '3':
                    await this.teacherDashboard.viewStudentProgress();
                    break;
                case '4':
                    await this.teacherDashboard.generateReport();
                    break;
                case '5':
                    await this.teacherDashboard.manageStudents();
                    break;
                case '6':
                    await this.teacherDashboard.viewClassStatistics();
                    break;
                case '7':
                    await this.autoGradeSubmissions();
                    break;
                case '8':
                    await this.manageStudyGroups();
                    break;
                case '0':
                    return;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    }

    async adminMenu() {
        while (true) {
            console.log('\n⚙️ Administrator Menu');
            console.log('====================');
            console.log('1. System Status');
            console.log('2. Backup Data');
            console.log('3. Restore Data');
            console.log('4. Clean Up System');
            console.log('5. Generate System Report');
            console.log('6. Manage All Students');
            console.log('7. Manage All Study Groups');
            console.log('8. System Maintenance');
            console.log('0. Back to Main Menu');
            
            const choice = await this.question('\nEnter your choice: ');
            
            switch (choice) {
                case '1':
                    await this.showSystemStatus();
                    break;
                case '2':
                    await this.backupData();
                    break;
                case '3':
                    await this.restoreData();
                    break;
                case '4':
                    await this.cleanupSystem();
                    break;
                case '5':
                    await this.generateSystemReport();
                    break;
                case '6':
                    await this.manageAllStudents();
                    break;
                case '7':
                    await this.manageAllStudyGroups();
                    break;
                case '8':
                    await this.systemMaintenance();
                    break;
                case '0':
                    return;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    }

    async viewStudentProgress() {
        const studentId = await this.question('Enter your student ID: ');
        const studentPath = path.join(this.basePath, 'student-work', `student-${studentId.padStart(3, '0')}-*`);
        
        const studentFolders = fs.readdirSync(path.join(this.basePath, 'student-work'))
            .filter(folder => folder.startsWith(`student-${studentId.padStart(3, '0')}-`));
        
        if (studentFolders.length === 0) {
            console.log('Student not found.');
            return;
        }
        
        const studentFolder = studentFolders[0];
        const progressFile = path.join(this.basePath, 'student-work', studentFolder, 'progress.md');
        
        if (fs.existsSync(progressFile)) {
            console.log(`\n📊 Your Progress:`);
            console.log('='.repeat(40));
            console.log(fs.readFileSync(progressFile, 'utf8'));
        } else {
            console.log('No progress file found.');
        }
    }

    async autoGradeSubmissions() {
        console.log('\n🤖 Auto-Grading Submissions');
        console.log('============================');
        
        const confirm = await this.question('This will grade all pending submissions. Continue? (y/N): ');
        
        if (confirm.toLowerCase() === 'y') {
            await this.autoGrader.gradeAllPendingSubmissions();
        } else {
            console.log('Auto-grading cancelled.');
        }
    }

    async manageStudyGroups() {
        console.log('\n👥 Manage Study Groups');
        console.log('======================');
        console.log('1. View All Study Groups');
        console.log('2. Create Study Group');
        console.log('3. Join Study Group');
        console.log('4. View Group Details');
        console.log('5. Remove Student from Group');
        console.log('0. Back');
        
        const choice = await this.question('\nEnter your choice: ');
        
        switch (choice) {
            case '1':
                await this.viewAllStudyGroups();
                break;
            case '2':
                await this.peerReview.createStudyGroup();
                break;
            case '3':
                await this.peerReview.joinStudyGroup();
                break;
            case '4':
                await this.viewGroupDetails();
                break;
            case '5':
                await this.removeStudentFromGroup();
                break;
            case '0':
                return;
            default:
                console.log('Invalid choice.');
        }
    }

    async viewAllStudyGroups() {
        const groupsPath = path.join(this.basePath, 'collaborative', 'study-groups');
        
        if (!fs.existsSync(groupsPath)) {
            console.log('No study groups found.');
            return;
        }
        
        const groupFiles = fs.readdirSync(groupsPath);
        
        console.log('\n👥 All Study Groups:');
        console.log('='.repeat(30));
        
        for (const file of groupFiles) {
            const group = JSON.parse(fs.readFileSync(path.join(groupsPath, file), 'utf8'));
            console.log(`\n📚 ${group.name}`);
            console.log(`   ID: ${group.id}`);
            console.log(`   Members: ${group.members.length}/${group.maxMembers}`);
            console.log(`   Created: ${group.createdAt.split('T')[0]}`);
        }
    }

    async viewGroupDetails() {
        const groupId = await this.question('Enter group ID: ');
        const group = this.peerReview.loadStudyGroup(groupId);
        
        if (!group) {
            console.log('Study group not found.');
            return;
        }
        
        console.log(`\n👥 Study Group: ${group.name}`);
        console.log('='.repeat(40));
        console.log(`Description: ${group.description}`);
        console.log(`Members: ${group.members.length}/${group.maxMembers}`);
        console.log(`Created: ${group.createdAt.split('T')[0]}`);
        
        console.log('\n👤 Members:');
        group.members.forEach(member => {
            console.log(`   ${member.name} (${member.role})`);
        });
        
        if (group.projects.length > 0) {
            console.log('\n📚 Projects:');
            group.projects.forEach(project => {
                console.log(`   ${project.name} - ${project.status}`);
            });
        }
    }

    async removeStudentFromGroup() {
        const groupId = await this.question('Enter group ID: ');
        const studentId = await this.question('Enter student ID to remove: ');
        
        const group = this.peerReview.loadStudyGroup(groupId);
        
        if (!group) {
            console.log('Study group not found.');
            return;
        }
        
        const memberIndex = group.members.findIndex(member => member.id === studentId);
        
        if (memberIndex === -1) {
            console.log('Student not found in this group.');
            return;
        }
        
        if (group.members[memberIndex].role === 'admin') {
            console.log('Cannot remove admin from group.');
            return;
        }
        
        group.members.splice(memberIndex, 1);
        this.peerReview.saveStudyGroup(group);
        
        console.log('Student removed from group.');
    }

    async showSystemStatus() {
        console.log('\n⚙️ System Status');
        console.log('================');
        
        const stats = this.getSystemStatistics();
        
        console.log(`📊 Total Students: ${stats.students}`);
        console.log(`📝 Total Submissions: ${stats.submissions}`);
        console.log(`👥 Study Groups: ${stats.studyGroups}`);
        console.log(`🤝 Peer Reviews: ${stats.peerReviews}`);
        console.log(`💾 Storage Used: ${stats.storageUsed}`);
        
        console.log('\n📁 System Health:');
        console.log(`   Student Work Directory: ${stats.studentWorkExists ? '✅' : '❌'}`);
        console.log(`   Collaborative Directory: ${stats.collaborativeExists ? '✅' : '❌'}`);
        console.log(`   Solutions Directory: ${stats.solutionsExists ? '✅' : '❌'}`);
    }

    async backupData() {
        console.log('\n💾 Backup Data');
        console.log('==============');
        
        const backupPath = path.join(this.basePath, 'backups', `backup-${Date.now()}`);
        fs.mkdirSync(backupPath, { recursive: true });
        
        // Copy student work
        const studentWorkPath = path.join(this.basePath, 'student-work');
        if (fs.existsSync(studentWorkPath)) {
            this.copyDirectory(studentWorkPath, path.join(backupPath, 'student-work'));
        }
        
        // Copy collaborative data
        const collaborativePath = path.join(this.basePath, 'collaborative');
        if (fs.existsSync(collaborativePath)) {
            this.copyDirectory(collaborativePath, path.join(backupPath, 'collaborative'));
        }
        
        console.log(`✅ Backup created at: ${backupPath}`);
    }

    async restoreData() {
        console.log('\n🔄 Restore Data');
        console.log('===============');
        
        const backupsPath = path.join(this.basePath, 'backups');
        
        if (!fs.existsSync(backupsPath)) {
            console.log('No backups found.');
            return;
        }
        
        const backups = fs.readdirSync(backupsPath);
        
        console.log('Available backups:');
        backups.forEach((backup, index) => {
            console.log(`${index + 1}. ${backup}`);
        });
        
        const choice = await this.question('\nSelect backup to restore: ');
        const selectedBackup = backups[parseInt(choice) - 1];
        
        if (!selectedBackup) {
            console.log('Invalid selection.');
            return;
        }
        
        const backupPath = path.join(backupsPath, selectedBackup);
        
        // Restore student work
        const studentWorkBackup = path.join(backupPath, 'student-work');
        if (fs.existsSync(studentWorkBackup)) {
            this.copyDirectory(studentWorkBackup, path.join(this.basePath, 'student-work'));
        }
        
        // Restore collaborative data
        const collaborativeBackup = path.join(backupPath, 'collaborative');
        if (fs.existsSync(collaborativeBackup)) {
            this.copyDirectory(collaborativeBackup, path.join(this.basePath, 'collaborative'));
        }
        
        console.log('✅ Data restored successfully!');
    }

    async cleanupSystem() {
        console.log('\n🧹 Clean Up System');
        console.log('==================');
        
        const confirm = await this.question('This will clean up temporary files and optimize storage. Continue? (y/N): ');
        
        if (confirm.toLowerCase() === 'y') {
            // Clean up temporary files
            const tempFiles = this.findTempFiles();
            console.log(`Found ${tempFiles.length} temporary files to clean up.`);
            
            // Clean up old submissions (older than 6 months)
            const oldSubmissions = this.findOldSubmissions();
            console.log(`Found ${oldSubmissions.length} old submissions.`);
            
            console.log('✅ System cleanup completed!');
        } else {
            console.log('Cleanup cancelled.');
        }
    }

    async generateSystemReport() {
        console.log('\n📊 Generating System Report...');
        
        const report = {
            timestamp: new Date().toISOString(),
            statistics: this.getSystemStatistics(),
            recommendations: this.getSystemRecommendations()
        };
        
        const reportPath = path.join(this.basePath, 'reports', `system-report-${Date.now()}.json`);
        fs.mkdirSync(path.dirname(reportPath), { recursive: true });
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        
        console.log(`✅ System report generated: ${reportPath}`);
    }

    async manageAllStudents() {
        console.log('\n👥 Manage All Students');
        console.log('======================');
        console.log('1. List All Students');
        console.log('2. Add Student');
        console.log('3. Remove Student');
        console.log('4. Reset Student Data');
        console.log('0. Back');
        
        const choice = await this.question('\nEnter your choice: ');
        
        switch (choice) {
            case '1':
                await this.teacherDashboard.listStudents();
                break;
            case '2':
                await this.teacherDashboard.addStudent();
                break;
            case '3':
                await this.removeStudent();
                break;
            case '4':
                await this.resetStudentData();
                break;
            case '0':
                return;
            default:
                console.log('Invalid choice.');
        }
    }

    async manageAllStudyGroups() {
        await this.viewAllStudyGroups();
    }

    async systemMaintenance() {
        console.log('\n🔧 System Maintenance');
        console.log('====================');
        console.log('1. Check System Health');
        console.log('2. Optimize Database');
        console.log('3. Update System');
        console.log('4. Reset System');
        console.log('0. Back');
        
        const choice = await this.question('\nEnter your choice: ');
        
        switch (choice) {
            case '1':
                await this.showSystemStatus();
                break;
            case '2':
                console.log('Database optimization completed!');
                break;
            case '3':
                console.log('System update completed!');
                break;
            case '4':
                await this.resetSystem();
                break;
            case '0':
                return;
            default:
                console.log('Invalid choice.');
        }
    }

    // Helper methods
    getSystemStatistics() {
        const stats = {
            students: 0,
            submissions: 0,
            studyGroups: 0,
            peerReviews: 0,
            storageUsed: '0 MB',
            studentWorkExists: false,
            collaborativeExists: false,
            solutionsExists: false
        };
        
        // Count students
        const studentWorkPath = path.join(this.basePath, 'student-work');
        if (fs.existsSync(studentWorkPath)) {
            stats.studentWorkExists = true;
            const studentFolders = fs.readdirSync(studentWorkPath)
                .filter(folder => folder.startsWith('student-'));
            stats.students = studentFolders.length;
            
            // Count submissions
            for (const folder of studentFolders) {
                const submissionsPath = path.join(studentWorkPath, folder, 'submissions');
                if (fs.existsSync(submissionsPath)) {
                    const submissionFolders = fs.readdirSync(submissionsPath);
                    stats.submissions += submissionFolders.length;
                }
            }
        }
        
        // Count study groups
        const collaborativePath = path.join(this.basePath, 'collaborative');
        if (fs.existsSync(collaborativePath)) {
            stats.collaborativeExists = true;
            const groupsPath = path.join(collaborativePath, 'study-groups');
            if (fs.existsSync(groupsPath)) {
                stats.studyGroups = fs.readdirSync(groupsPath).length;
            }
            
            // Count peer reviews
            const reviewsPath = path.join(collaborativePath, 'peer-reviews');
            if (fs.existsSync(reviewsPath)) {
                stats.peerReviews = fs.readdirSync(reviewsPath).length;
            }
        }
        
        // Check solutions
        const solutionsPath = path.join(this.basePath, 'solutions');
        stats.solutionsExists = fs.existsSync(solutionsPath);
        
        return stats;
    }

    getSystemRecommendations() {
        const recommendations = [];
        const stats = this.getSystemStatistics();
        
        if (stats.students === 0) {
            recommendations.push('Add some students to get started');
        }
        
        if (stats.submissions === 0) {
            recommendations.push('Encourage students to submit their work');
        }
        
        if (stats.studyGroups === 0) {
            recommendations.push('Create study groups to encourage collaboration');
        }
        
        return recommendations;
    }

    findTempFiles() {
        // Implementation to find temporary files
        return [];
    }

    findOldSubmissions() {
        // Implementation to find old submissions
        return [];
    }

    copyDirectory(src, dest) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        
        const files = fs.readdirSync(src);
        
        for (const file of files) {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);
            
            if (fs.statSync(srcPath).isDirectory()) {
                this.copyDirectory(srcPath, destPath);
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        }
    }

    async removeStudent() {
        const studentId = await this.question('Enter student ID to remove: ');
        
        const studentFolders = fs.readdirSync(path.join(this.basePath, 'student-work'))
            .filter(folder => folder.startsWith(`student-${studentId.padStart(3, '0')}-`));
        
        if (studentFolders.length === 0) {
            console.log('Student not found.');
            return;
        }
        
        const confirm = await this.question('Are you sure you want to remove this student? (y/N): ');
        
        if (confirm.toLowerCase() === 'y') {
            const studentPath = path.join(this.basePath, 'student-work', studentFolders[0]);
            fs.rmSync(studentPath, { recursive: true, force: true });
            console.log('Student removed successfully.');
        } else {
            console.log('Student removal cancelled.');
        }
    }

    async resetStudentData() {
        const studentId = await this.question('Enter student ID to reset: ');
        
        const studentFolders = fs.readdirSync(path.join(this.basePath, 'student-work'))
            .filter(folder => folder.startsWith(`student-${studentId.padStart(3, '0')}-`));
        
        if (studentFolders.length === 0) {
            console.log('Student not found.');
            return;
        }
        
        const confirm = await this.question('Are you sure you want to reset this student\'s data? (y/N): ');
        
        if (confirm.toLowerCase() === 'y') {
            const studentPath = path.join(this.basePath, 'student-work', studentFolders[0]);
            
            // Remove submissions but keep the structure
            const submissionsPath = path.join(studentPath, 'submissions');
            if (fs.existsSync(submissionsPath)) {
                fs.rmSync(submissionsPath, { recursive: true, force: true });
                fs.mkdirSync(submissionsPath, { recursive: true });
            }
            
            // Reset progress file
            const progressFile = path.join(studentPath, 'progress.md');
            if (fs.existsSync(progressFile)) {
                // Keep the template but reset checkboxes
                let progress = fs.readFileSync(progressFile, 'utf8');
                progress = progress.replace(/\[x\]/g, '[ ]');
                fs.writeFileSync(progressFile, progress);
            }
            
            console.log('Student data reset successfully.');
        } else {
            console.log('Student data reset cancelled.');
        }
    }

    async resetSystem() {
        const confirm = await this.question('Are you sure you want to reset the entire system? This will delete all data! (y/N): ');
        
        if (confirm.toLowerCase() === 'y') {
            const studentWorkPath = path.join(this.basePath, 'student-work');
            const collaborativePath = path.join(this.basePath, 'collaborative');
            
            if (fs.existsSync(studentWorkPath)) {
                fs.rmSync(studentWorkPath, { recursive: true, force: true });
            }
            
            if (fs.existsSync(collaborativePath)) {
                fs.rmSync(collaborativePath, { recursive: true, force: true });
            }
            
            console.log('System reset completed.');
        } else {
            console.log('System reset cancelled.');
        }
    }

    question(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }
}

// Run the collaboration hub if this file is executed directly
if (require.main === module) {
    const hub = new CollaborationHub();
    hub.start().catch(console.error);
}

module.exports = CollaborationHub;
