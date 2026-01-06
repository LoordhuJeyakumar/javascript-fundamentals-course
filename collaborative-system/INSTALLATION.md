# Installation Guide - Collaborative Learning System

## 🚀 Quick Installation

### Prerequisites
- Node.js (version 14 or higher)
- Basic command line knowledge
- Access to the course repository

### Step 1: Setup the System
```bash
# Navigate to the collaborative system directory
cd collaborative-system

# Run the setup script
node setup.js
```

### Step 2: Start the System
```bash
# Start the main collaboration hub
node collaboration-hub.js

# Or use npm scripts
npm start
```

## 📋 Detailed Installation

### 1. System Requirements
- **Node.js**: Version 14.0.0 or higher
- **Operating System**: Windows, macOS, or Linux
- **Storage**: At least 100MB free space
- **Memory**: 512MB RAM minimum

### 2. Installation Steps

#### Option A: Automatic Setup (Recommended)
```bash
# Clone or download the repository
git clone https://github.com/your-org/javascript-fundamentals-course.git
cd javascript-fundamentals-course

# Navigate to collaborative system
cd collaborative-system

# Run setup
node setup.js

# Start the system
node collaboration-hub.js
```

#### Option B: Manual Setup
```bash
# Create necessary directories
mkdir -p student-work
mkdir -p collaborative/peer-reviews
mkdir -p collaborative/study-groups
mkdir -p backups
mkdir -p reports

# Set permissions (Linux/macOS)
chmod +x *.js

# Start the system
node collaboration-hub.js
```

### 3. Verification
After installation, verify everything works:

```bash
# Test the setup
node setup.js

# Check system status
node collaboration-hub.js
# Select "Administrator" → "System Status"
```

## 🎯 First Time Setup

### For Teachers
1. **Start the system**: `node collaboration-hub.js`
2. **Select "Teacher"** from the main menu
3. **Add students** using "Manage Students"
4. **Set up assignments** and course materials
5. **Configure grading** settings

### For Students
1. **Get your student ID** from your teacher
2. **Start the system**: `node collaboration-hub.js`
3. **Select "Student"** from the main menu
4. **Submit your first assignment**
5. **Join study groups** for collaboration

## 🔧 Configuration

### Basic Configuration
Edit `config.json` to customize:
```json
{
  "settings": {
    "maxFileSize": "10MB",
    "allowedFileTypes": [".js", ".md", ".txt", ".json"],
    "maxStudentsPerGroup": 8,
    "autoGradeEnabled": true
  }
}
```

### Advanced Configuration
- **File permissions**: Edit `permissions.json`
- **User roles**: Modify `roles.json`
- **System paths**: Update `config.json`

## 🚨 Troubleshooting

### Common Issues

#### Issue: "node is not recognized"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

#### Issue: "Permission denied"
**Solution**: 
```bash
# Linux/macOS
chmod +x *.js

# Windows
# Run as administrator or check file properties
```

#### Issue: "Module not found"
**Solution**: Ensure you're in the correct directory
```bash
cd collaborative-system
node collaboration-hub.js
```

#### Issue: "Directory not found"
**Solution**: Run the setup script
```bash
node setup.js
```

### Getting Help
1. Check the error messages
2. Review the logs in `logs/` directory
3. Run the setup script again
4. Check system requirements
5. Contact support

## 📊 System Monitoring

### Health Checks
```bash
# Check system status
node collaboration-hub.js
# Select "Administrator" → "System Status"

# View logs
cat logs/system.log

# Check disk space
df -h  # Linux/macOS
dir    # Windows
```

### Performance Monitoring
- Monitor file sizes in `student-work/`
- Check backup directory size
- Review system logs regularly
- Monitor memory usage

## 🔄 Updates and Maintenance

### Updating the System
```bash
# Backup current data
node collaboration-hub.js
# Select "Administrator" → "Backup Data"

# Download new version
git pull origin main

# Run setup
node setup.js

# Restore data if needed
node collaboration-hub.js
# Select "Administrator" → "Restore Data"
```

### Regular Maintenance
1. **Weekly**: Check system health
2. **Monthly**: Clean up old files
3. **Quarterly**: Update system
4. **As needed**: Backup data

## 🛡️ Security Considerations

### File Permissions
- Ensure only authorized users can access the system
- Set appropriate file permissions
- Regular security updates

### Data Protection
- Regular backups
- Secure storage of student data
- Access control and logging

### Best Practices
- Use strong passwords
- Regular system updates
- Monitor access logs
- Secure network connections

## 📚 Additional Resources

### Documentation
- [User Guide](USER_GUIDE.md)
- [System README](README.md)
- [API Documentation](API.md)

### Support
- GitHub Issues
- Email support
- Community forums
- Video tutorials

## 🎉 Success!

Once installed, you should see:
```
🎓 JavaScript Learning Collaboration Hub
========================================

🎯 Who are you?
===============
1. Student
2. Teacher
3. Administrator
0. Exit
```

**Congratulations! Your collaborative learning system is ready to use! 🚀**

---

**Need help? Check the troubleshooting section or contact support! 📞**
