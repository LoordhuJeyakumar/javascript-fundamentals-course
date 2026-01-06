# Web APIs Exercises

## Exercise 1: Offline-Capable Note Taking App
Create a note-taking application that works offline using Storage APIs.

### Requirements:
- Use LocalStorage for data persistence
- Implement offline functionality
- Add sync capabilities when online
- Handle storage limits
- Implement data export/import

### Starter Code:
```html
<!-- notes-app.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Offline Notes</title>
</head>
<body>
    <div id="app">
        <div id="notes-list"></div>
        <div id="editor"></div>
        <div id="status"></div>
    </div>
</body>
</html>
```

## Exercise 2: Media Recorder Application
Build a media recording app with playback and filters.

### Requirements:
- Record audio and video
- Apply real-time filters
- Save recordings
- Implement playback controls
- Handle device permissions

### Starter Code:
```html
<!-- media-recorder.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Media Recorder</title>
</head>
<body>
    <div class="recorder-app">
        <div class="preview"></div>
        <div class="controls"></div>
        <div class="recordings"></div>
    </div>
</body>
</html>
```

## Exercise 3: Location-Based Service
Create a location-aware application with mapping features.

### Requirements:
- Get and track user location
- Display location on a map
- Calculate distances
- Handle permissions
- Implement geofencing

### Starter Code:
```html
<!-- location-service.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Location Service</title>
</head>
<body>
    <div id="map"></div>
    <div id="location-info"></div>
    <div id="controls"></div>
</body>
</html>
```

## Exercise 4: Real-time Chat Application
Build a chat application using WebSocket and Notifications.

### Requirements:
- Implement WebSocket connection
- Add message handling
- Show notifications
- Handle offline status
- Support file sharing

### Starter Code:
```html
<!-- real-time-chat.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Real-time Chat</title>
</head>
<body>
    <div class="chat-app">
        <div class="messages"></div>
        <div class="input-area"></div>
        <div class="status"></div>
    </div>
</body>
</html>
```

## Exercise 5: Network-Aware Application
Create an application that adapts to network conditions.

### Requirements:
- Monitor network status
- Adapt content quality
- Implement offline mode
- Cache resources
- Show connection info

### Starter Code:
```html
<!-- network-aware.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Network-Aware App</title>
</head>
<body>
    <div id="app">
        <div id="content"></div>
        <div id="network-status"></div>
    </div>
</body>
</html>
```

## Bonus Challenge: Progressive Web App
Convert one of the above exercises into a Progressive Web App.

### Requirements:
- Add a manifest file
- Implement service worker
- Enable offline functionality
- Add install prompt
- Optimize performance

## Submission Guidelines
1. Create a separate folder for each exercise
2. Include a README.md with:
   - Setup instructions
   - Implementation details
   - API usage notes
3. Add comments explaining key concepts
4. Include tests for core functionality
5. Document browser support notes