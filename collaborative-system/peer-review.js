#!/usr/bin/env node

/**
 * Peer Review and Collaborative Features System
 * Enables students to review each other's work and collaborate on projects
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class PeerReviewSystem {
    constructor() {
        this.basePath = path.join(__dirname, '..');
        this.studentWorkPath = path.join(this.basePath, 'student-work');
        this.collaborativePath = path.join(this.basePath, 'collaborative');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        console.log('🤝 Peer Review & Collaboration System');
        console.log('====================================\n');
        
        while (true) {
            const choice = await this.showMainMenu();
            
            switch (choice) {
                case '1':
                    await this.requestPeerReview();
                    break;
                case '2':
                    await this.reviewPeerWork();
                    break;
                case '3':
                    await this.viewMyReviews();
                    break;
                case '4':
                    await this.createStudyGroup();
                    break;
                case '5':
                    await this.joinStudyGroup();
                    break;
                case '6':
                    await this.viewGroupProjects();
                    break;
                case '7':
                    await this.manageCollaborations();
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
        console.log('\n🤝 Peer Review & Collaboration Menu');
        console.log('===================================');
        console.log('1. Request Peer Review');
        console.log('2. Review Peer Work');
        console.log('3. View My Reviews');
        console.log('4. Create Study Group');
        console.log('5. Join Study Group');
        console.log('6. View Group Projects');
        console.log('7. Manage Collaborations');
        console.log('0. Exit');
        
        return await this.question('\nEnter your choice: ');
    }

    async requestPeerReview() {
        console.log('\n📝 Request Peer Review');
        console.log('======================');
        
        const studentId = await this.question('Enter your student ID: ');
        const studentName = await this.question('Enter your name: ');
        
        // Find student's submissions
        const submissions = this.getStudentSubmissions(studentId);
        
        if (submissions.length === 0) {
            console.log('No submissions found. Please submit some work first.');
            return;
        }
        
        // Show available submissions
        console.log('\nYour Submissions:');
        submissions.forEach((submission, index) => {
            console.log(`${index + 1}. ${submission.submissionType} - ${submission.timestamp.split('T')[0]}`);
        });
        
        const choice = await this.question('\nSelect submission to review (number): ');
        const selectedSubmission = submissions[parseInt(choice) - 1];
        
        if (!selectedSubmission) {
            console.log('Invalid selection.');
            return;
        }
        
        // Create peer review request
        const reviewRequest = {
            id: this.generateReviewId(),
            studentId,
            studentName,
            submissionId: selectedSubmission.id,
            submissionType: selectedSubmission.submissionType,
            submissionPath: selectedSubmission.path,
            requestedAt: new Date().toISOString(),
            status: 'pending',
            reviewers: [],
            feedback: []
        };
        
        this.saveReviewRequest(reviewRequest);
        
        console.log(`✅ Peer review request created!`);
        console.log(`📋 Review ID: ${reviewRequest.id}`);
        console.log(`📝 Share this ID with your peers for review.`);
    }

    async reviewPeerWork() {
        console.log('\n👀 Review Peer Work');
        console.log('==================');
        
        const reviewId = await this.question('Enter review ID: ');
        const reviewerId = await this.question('Enter your student ID: ');
        const reviewerName = await this.question('Enter your name: ');
        
        const reviewRequest = this.loadReviewRequest(reviewId);
        
        if (!reviewRequest) {
            console.log('Review request not found.');
            return;
        }
        
        if (reviewRequest.studentId === reviewerId) {
            console.log('You cannot review your own work.');
            return;
        }
        
        // Add reviewer to the request
        if (!reviewRequest.reviewers.includes(reviewerId)) {
            reviewRequest.reviewers.push(reviewerId);
        }
        
        // Load the submission files
        const submissionFiles = this.getSubmissionFiles(reviewRequest.submissionPath);
        
        console.log(`\n📄 Reviewing ${reviewRequest.submissionType} by ${reviewRequest.studentName}`);
        console.log('='.repeat(50));
        
        const review = {
            reviewerId,
            reviewerName,
            reviewedAt: new Date().toISOString(),
            files: [],
            overallRating: 0,
            feedback: '',
            suggestions: []
        };
        
        // Review each file
        for (const file of submissionFiles) {
            const fileReview = await this.reviewFile(file, reviewRequest.submissionType);
            review.files.push(fileReview);
        }
        
        // Overall feedback
        review.overallRating = await this.question('Overall rating (1-5): ');
        review.feedback = await this.question('Overall feedback: ');
        
        // Suggestions for improvement
        console.log('\nSuggestions for improvement (one per line, empty line to finish):');
        while (true) {
            const suggestion = await this.question('Suggestion: ');
            if (!suggestion.trim()) break;
            review.suggestions.push(suggestion);
        }
        
        // Add review to the request
        reviewRequest.feedback.push(review);
        this.saveReviewRequest(reviewRequest);
        
        console.log('✅ Review submitted successfully!');
    }

    async reviewFile(filePath, submissionType) {
        const fileName = path.basename(filePath);
        console.log(`\n📄 Reviewing file: ${fileName}`);
        
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Display file content (first 50 lines)
        const lines = content.split('\n');
        const previewLines = lines.slice(0, 50);
        console.log('\n' + '─'.repeat(40));
        console.log(previewLines.join('\n'));
        if (lines.length > 50) {
            console.log(`... (${lines.length - 50} more lines)`);
        }
        console.log('─'.repeat(40));
        
        const fileReview = {
            fileName,
            rating: await this.question('File rating (1-5): '),
            feedback: await this.question('File feedback: '),
            strengths: [],
            improvements: []
        };
        
        // Strengths
        console.log('\nStrengths (one per line, empty line to finish):');
        while (true) {
            const strength = await this.question('Strength: ');
            if (!strength.trim()) break;
            fileReview.strengths.push(strength);
        }
        
        // Areas for improvement
        console.log('\nAreas for improvement (one per line, empty line to finish):');
        while (true) {
            const improvement = await this.question('Improvement: ');
            if (!improvement.trim()) break;
            fileReview.improvements.push(improvement);
        }
        
        return fileReview;
    }

    async viewMyReviews() {
        console.log('\n📊 My Reviews');
        console.log('=============');
        
        const studentId = await this.question('Enter your student ID: ');
        
        // Find reviews by this student
        const myReviews = this.getReviewsByStudent(studentId);
        
        if (myReviews.length === 0) {
            console.log('No reviews found.');
            return;
        }
        
        console.log(`\nFound ${myReviews.length} review(s):`);
        
        for (const review of myReviews) {
            console.log(`\n📝 Review ID: ${review.id}`);
            console.log(`👤 Student: ${review.studentName}`);
            console.log(`📄 Type: ${review.submissionType}`);
            console.log(`📅 Date: ${review.reviewedAt.split('T')[0]}`);
            console.log(`⭐ Rating: ${review.overallRating}/5`);
            console.log(`💬 Feedback: ${review.feedback}`);
        }
    }

    async createStudyGroup() {
        console.log('\n👥 Create Study Group');
        console.log('====================');
        
        const groupName = await this.question('Group name: ');
        const description = await this.question('Group description: ');
        const maxMembers = await this.question('Maximum members (default 5): ') || '5';
        const creatorId = await this.question('Your student ID: ');
        const creatorName = await this.question('Your name: ');
        
        const studyGroup = {
            id: this.generateGroupId(),
            name: groupName,
            description,
            maxMembers: parseInt(maxMembers),
            creator: { id: creatorId, name: creatorName },
            members: [{ id: creatorId, name: creatorName, role: 'admin' }],
            createdAt: new Date().toISOString(),
            projects: [],
            discussions: []
        };
        
        this.saveStudyGroup(studyGroup);
        
        console.log(`✅ Study group created!`);
        console.log(`👥 Group ID: ${studyGroup.id}`);
        console.log(`📝 Share this ID with other students to join.`);
    }

    async joinStudyGroup() {
        console.log('\n🤝 Join Study Group');
        console.log('===================');
        
        const groupId = await this.question('Enter group ID: ');
        const studentId = await this.question('Your student ID: ');
        const studentName = await this.question('Your name: ');
        
        const studyGroup = this.loadStudyGroup(groupId);
        
        if (!studyGroup) {
            console.log('Study group not found.');
            return;
        }
        
        if (studyGroup.members.length >= studyGroup.maxMembers) {
            console.log('Study group is full.');
            return;
        }
        
        if (studyGroup.members.some(member => member.id === studentId)) {
            console.log('You are already a member of this group.');
            return;
        }
        
        studyGroup.members.push({ id: studentId, name: studentName, role: 'member' });
        this.saveStudyGroup(studyGroup);
        
        console.log(`✅ Joined study group: ${studyGroup.name}`);
    }

    async viewGroupProjects() {
        console.log('\n📚 Group Projects');
        console.log('=================');
        
        const groupId = await this.question('Enter group ID: ');
        const studyGroup = this.loadStudyGroup(groupId);
        
        if (!studyGroup) {
            console.log('Study group not found.');
            return;
        }
        
        console.log(`\n👥 Group: ${studyGroup.name}`);
        console.log(`📝 Description: ${studyGroup.description}`);
        console.log(`👤 Members: ${studyGroup.members.length}/${studyGroup.maxMembers}`);
        
        if (studyGroup.projects.length === 0) {
            console.log('\nNo projects yet.');
            return;
        }
        
        console.log('\n📚 Projects:');
        studyGroup.projects.forEach((project, index) => {
            console.log(`${index + 1}. ${project.name} - ${project.status}`);
        });
    }

    async manageCollaborations() {
        console.log('\n🔧 Manage Collaborations');
        console.log('========================');
        
        const studentId = await this.question('Enter your student ID: ');
        
        // Show student's collaborations
        const collaborations = this.getStudentCollaborations(studentId);
        
        if (collaborations.length === 0) {
            console.log('No collaborations found.');
            return;
        }
        
        console.log('\nYour Collaborations:');
        collaborations.forEach((collab, index) => {
            console.log(`${index + 1}. ${collab.type} - ${collab.name}`);
        });
    }

    // Helper methods
    getStudentSubmissions(studentId) {
        const submissions = [];
        const studentFolder = `student-${studentId.padStart(3, '0')}-*`;
        
        if (!fs.existsSync(this.studentWorkPath)) {
            return submissions;
        }
        
        const studentFolders = fs.readdirSync(this.studentWorkPath)
            .filter(folder => folder.startsWith(`student-${studentId.padStart(3, '0')}-`));
        
        for (const folder of studentFolders) {
            const submissionsPath = path.join(this.studentWorkPath, folder, 'submissions');
            if (fs.existsSync(submissionsPath)) {
                const submissionFolders = fs.readdirSync(submissionsPath);
                
                for (const submissionFolder of submissionFolders) {
                    const submissionPath = path.join(submissionsPath, submissionFolder);
                    const infoFile = path.join(submissionPath, 'submission-info.json');
                    
                    if (fs.existsSync(infoFile)) {
                        const submissionInfo = JSON.parse(fs.readFileSync(infoFile, 'utf8'));
                        submissions.push({
                            id: submissionFolder,
                            ...submissionInfo,
                            path: submissionPath
                        });
                    }
                }
            }
        }
        
        return submissions;
    }

    getSubmissionFiles(submissionPath) {
        return fs.readdirSync(submissionPath)
            .filter(file => file !== 'submission-info.json' && file !== 'grading-results.json')
            .map(file => path.join(submissionPath, file));
    }

    generateReviewId() {
        return 'REV-' + Date.now().toString(36).toUpperCase();
    }

    generateGroupId() {
        return 'GRP-' + Date.now().toString(36).toUpperCase();
    }

    saveReviewRequest(reviewRequest) {
        const reviewsPath = path.join(this.collaborativePath, 'peer-reviews');
        fs.mkdirSync(reviewsPath, { recursive: true });
        
        const reviewFile = path.join(reviewsPath, `${reviewRequest.id}.json`);
        fs.writeFileSync(reviewFile, JSON.stringify(reviewRequest, null, 2));
    }

    loadReviewRequest(reviewId) {
        const reviewFile = path.join(this.collaborativePath, 'peer-reviews', `${reviewId}.json`);
        
        if (fs.existsSync(reviewFile)) {
            return JSON.parse(fs.readFileSync(reviewFile, 'utf8'));
        }
        
        return null;
    }

    getReviewsByStudent(studentId) {
        const reviews = [];
        const reviewsPath = path.join(this.collaborativePath, 'peer-reviews');
        
        if (!fs.existsSync(reviewsPath)) {
            return reviews;
        }
        
        const reviewFiles = fs.readdirSync(reviewsPath);
        
        for (const file of reviewFiles) {
            const reviewRequest = JSON.parse(fs.readFileSync(path.join(reviewsPath, file), 'utf8'));
            
            // Find reviews by this student
            const studentReviews = reviewRequest.feedback.filter(review => review.reviewerId === studentId);
            
            for (const review of studentReviews) {
                reviews.push({
                    id: reviewRequest.id,
                    studentName: reviewRequest.studentName,
                    submissionType: reviewRequest.submissionType,
                    ...review
                });
            }
        }
        
        return reviews;
    }

    saveStudyGroup(studyGroup) {
        const groupsPath = path.join(this.collaborativePath, 'study-groups');
        fs.mkdirSync(groupsPath, { recursive: true });
        
        const groupFile = path.join(groupsPath, `${studyGroup.id}.json`);
        fs.writeFileSync(groupFile, JSON.stringify(studyGroup, null, 2));
    }

    loadStudyGroup(groupId) {
        const groupFile = path.join(this.collaborativePath, 'study-groups', `${groupId}.json`);
        
        if (fs.existsSync(groupFile)) {
            return JSON.parse(fs.readFileSync(groupFile, 'utf8'));
        }
        
        return null;
    }

    getStudentCollaborations(studentId) {
        const collaborations = [];
        
        // Get study groups where student is a member
        const groupsPath = path.join(this.collaborativePath, 'study-groups');
        if (fs.existsSync(groupsPath)) {
            const groupFiles = fs.readdirSync(groupsPath);
            
            for (const file of groupFiles) {
                const studyGroup = JSON.parse(fs.readFileSync(path.join(groupsPath, file), 'utf8'));
                
                if (studyGroup.members.some(member => member.id === studentId)) {
                    collaborations.push({
                        type: 'Study Group',
                        name: studyGroup.name,
                        id: studyGroup.id
                    });
                }
            }
        }
        
        return collaborations;
    }

    question(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }
}

// Run the peer review system if this file is executed directly
if (require.main === module) {
    const peerReview = new PeerReviewSystem();
    peerReview.start().catch(console.error);
}

module.exports = PeerReviewSystem;
