# Setup Guide for DOM Lessons

## Required Software

1. Visual Studio Code
   - Download from: https://code.visualstudio.com/
   - Install the recommended version for your operating system

2. Live Server Extension
   - Open VS Code
   - Click the Extensions icon in the sidebar (or press Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey
   - Restart VS Code if prompted

## Browser Requirements

Any modern web browser will work, but we recommend:
- Chrome (preferred for consistent DevTools experience)
- Firefox
- Edge

Make sure you know how to:
- Open Developer Tools (F12 or right-click -> Inspect)
- Use the Console panel
- Use the Elements panel

## Setting Up the Workspace

1. Clone or download this repository
2. Open the folder in VS Code
3. For each lesson:
   - Navigate to the lesson folder
   - Right-click on index.html
   - Select "Open with Live Server"
   - The page will open in your default browser

## Recommended VS Code Extensions

- JavaScript (ES6) code snippets
- ESLint
- Prettier - Code formatter

## Using Developer Tools

1. Opening DevTools:
   - Press F12
   - Right-click and select "Inspect"
   - Press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac)

2. Key DevTools Panels:
   - Elements: Inspect and modify DOM elements
   - Console: View logs and run JavaScript
   - Sources: Debug JavaScript code
   - Network: Monitor requests
   - Application: Inspect storage

## Troubleshooting

1. Live Server not working:
   - Check if the extension is installed
   - Ensure no other server is running on port 5500
   - Try restarting VS Code

2. JavaScript not running:
   - Check the Console for errors
   - Verify script tags are properly linked
   - Clear browser cache

3. Common Issues:
   - CORS errors: Use Live Server instead of opening files directly
   - File paths: Use relative paths from index.html
   - Syntax errors: Check Console for details

## Getting Help

If you encounter issues:
1. Check the Console for error messages
2. Review the lesson README
3. Ask in the course discussion forum
4. Check MDN documentation
5. Contact your instructor

## Next Steps

1. Complete the environment setup
2. Test with a simple HTML file
3. Practice using DevTools
4. Start with Lesson 1: DOM Basics