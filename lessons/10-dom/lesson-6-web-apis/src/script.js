//




document.addEventListener('DOMContentLoaded', () => {
    // Storage APIs Demo
    const storageDemo = (() => {
        const storageKey = document.getElementById('storageKey');
        const storageValue = document.getElementById('storageValue');
        const saveBtn = document.getElementById('saveToStorage');
        const storageContent = document.getElementById('storageContent');
        const storageInfo = document.getElementById('storageInfo');

        function getSelectedStorage() {
            return document.querySelector('input[name="storageType"]:checked').value === 'localStorage' 
                ? localStorage : sessionStorage;
        }

        function updateStorageDisplay() {
            const storage = getSelectedStorage();
            storageContent.innerHTML = '';
            for (let i = 0; i < storage.length; i++) {
                const key = storage.key(i);
                const value = storage.getItem(key);
                const item = document.createElement('div');
                item.innerHTML = `
                    <strong>${key}:</strong> ${value}
                    <button onclick="this.parentElement.remove(); ${storage}.removeItem('${key}')">
                        Delete
                    </button>
                `;
                storageContent.appendChild(item);
            }

            // Calculate storage usage
            let totalSize = 0;
            for (let i = 0; i < storage.length; i++) {
                const key = storage.key(i);
                totalSize += key.length + storage.getItem(key).length;
            }

            storageInfo.textContent = `Items: ${storage.length}, Size: ${totalSize} bytes`;
        }

        saveBtn.addEventListener('click', () => {
            if (!storageKey.value) return;
            const storage = getSelectedStorage();
            storage.setItem(storageKey.value, storageValue.value);
            storageKey.value = '';
            storageValue.value = '';
            updateStorageDisplay();
        });

        document.querySelectorAll('input[name="storageType"]').forEach(radio => {
            radio.addEventListener('change', updateStorageDisplay);
        });

        updateStorageDisplay();
    })();

    // Fetch API Demo
    const fetchDemo = (() => {
        const urlInput = document.getElementById('fetchUrl');
        const methodSelect = document.getElementById('fetchMethod');
        const bodyInput = document.getElementById('fetchBody');
        const sendBtn = document.getElementById('sendRequest');
        const abortBtn = document.getElementById('abortRequest');
        const responseContent = document.getElementById('responseContent');

        let controller = null;

        function logResponse(message, isError = false) {
            const div = document.createElement('div');
            div.className = isError ? 'error' : 'success';
            div.textContent = message;
            responseContent.insertBefore(div, responseContent.firstChild);
        }

        sendBtn.addEventListener('click', async () => {
            if (!urlInput.value) return;

            // Abort previous request if exists
            if (controller) controller.abort();
            controller = new AbortController();

            try {
                const options = {
                    method: methodSelect.value,
                    signal: controller.signal,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                if (['POST', 'PUT'].includes(methodSelect.value) && bodyInput.value) {
                    options.body = bodyInput.value;
                }

                logResponse(`Sending ${methodSelect.value} request to ${urlInput.value}...`);
                const response = await fetch(urlInput.value, options);
                const data = await response.json();
                logResponse(`Status: ${response.status} ${response.statusText}`);
                logResponse(JSON.stringify(data, null, 2));
            } catch (error) {
                logResponse(error.message, true);
            }
        });

        abortBtn.addEventListener('click', () => {
            if (controller) {
                controller.abort();
                logResponse('Request aborted', true);
            }
        });
    })();

    // Media APIs Demo
    const mediaDemo = (() => {
        const videoPreview = document.getElementById('videoPreview');
        const audioPreview = document.getElementById('audioPreview');
        const startVideoBtn = document.getElementById('startVideo');
        const startAudioBtn = document.getElementById('startAudio');
        const startRecordingBtn = document.getElementById('startRecording');
        const stopRecordingBtn = document.getElementById('stopRecording');
        const recordingsList = document.getElementById('recordingsList');

        let mediaStream = null;
        let mediaRecorder = null;
        let chunks = [];

        async function startMedia(constraints) {
            try {
                if (mediaStream) {
                    mediaStream.getTracks().forEach(track => track.stop());
                }
                mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
                if (constraints.video) {
                    videoPreview.srcObject = mediaStream;
                } else {
                    audioPreview.srcObject = mediaStream;
                }
                startRecordingBtn.disabled = false;
            } catch (error) {
                console.error('Error accessing media devices:', error);
            }
        }

        startVideoBtn.addEventListener('click', () => {
            startMedia({ video: true, audio: true });
        });

        startAudioBtn.addEventListener('click', () => {
            startMedia({ audio: true });
        });

        startRecordingBtn.addEventListener('click', () => {
            chunks = [];
            mediaRecorder = new MediaRecorder(mediaStream);
            
            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: chunks[0].type });
                const url = URL.createObjectURL(blob);
                const div = document.createElement('div');
                div.innerHTML = `
                    <audio controls src="${url}"></audio>
                    <a href="${url}" download="recording.webm">Download</a>
                `;
                recordingsList.insertBefore(div, recordingsList.firstChild);
            };

            mediaRecorder.start();
            startRecordingBtn.disabled = true;
            stopRecordingBtn.disabled = false;
        });

        stopRecordingBtn.addEventListener('click', () => {
            mediaRecorder.stop();
            startRecordingBtn.disabled = false;
            stopRecordingBtn.disabled = true;
        });
    })();

    // Device APIs Demo
    const deviceDemo = (() => {
        const locationInfo = document.querySelector('#locationInfo .info-content');
        const orientationInfo = document.querySelector('#orientationInfo .info-content');
        const batteryInfo = document.querySelector('#batteryInfo .info-content');
        const networkInfo = document.querySelector('#networkInfo .info-content');
        console.log("Navigator", navigator);
        // Geolocation
        document.getElementById('getLocation').addEventListener('click', () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        locationInfo.innerHTML = `
                            Latitude: ${latitude.toFixed(4)}<br>
                            Longitude: ${longitude.toFixed(4)}
                        `;
                    },
                    error => {
                        locationInfo.innerHTML = `Error: ${error.message}`;
                    }
                );
            } else {
                locationInfo.textContent = 'Geolocation not supported';
            }
        });

        // Device Orientation
        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', event => {
                orientationInfo.innerHTML = `
                    Alpha: ${event.alpha?.toFixed(2)}°<br>
                    Beta: ${event.beta?.toFixed(2)}°<br>
                    Gamma: ${event.gamma?.toFixed(2)}°
                `;
            });
        } else {
            orientationInfo.textContent = 'Device orientation not supported';
        }

        // Battery Status
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {

                console.log("Battery", battery);
                
                function updateBatteryInfo() {
                    batteryInfo.innerHTML = `
                        Level: ${(battery.level * 100).toFixed(2)}%<br>
                        Charging: ${battery.charging ? 'Yes' : 'No'}<br>
                        Time to full: ${battery.chargingTime === Infinity ? 'N/A' : battery.chargingTime + 's'}<br>
                        Time to empty: ${battery.dischargingTime === Infinity ? 'N/A' : battery.dischargingTime + 's'}
                    `;
                }

                battery.addEventListener('levelchange', updateBatteryInfo);
                battery.addEventListener('chargingchange', updateBatteryInfo);
                updateBatteryInfo();
            });
        } else {
            batteryInfo.textContent = 'Battery API not supported';
        }

        // Network Information
        function updateNetworkInfo() {
            if ('connection' in navigator) {
                const connection = navigator.connection;
                networkInfo.innerHTML = `
                    Type: ${connection.effectiveType}<br>
                    Downlink: ${connection.downlink} Mbps<br>
                    RTT: ${connection.rtt} ms<br>
                    Save Data: ${connection.saveData ? 'Yes' : 'No'}
                `;
            } else {
                networkInfo.textContent = 'Network Information API not supported';
            }
        }

        if ('connection' in navigator) {
            navigator.connection.addEventListener('change', updateNetworkInfo);
            updateNetworkInfo();
        }
    })();

    // Real-time APIs Demo
    const realtimeDemo = (() => {
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendMessageBtn = document.getElementById('sendMessage');
        const sseContent = document.getElementById('sseContent');
        const startSSEBtn = document.getElementById('startSSE');
        const stopSSEBtn = document.getElementById('stopSSE');

        // WebSocket Demo
        let ws = null;

        function connectWebSocket() {
            ws = new WebSocket('wss://echo.websocket.org');

            ws.onopen = () => {
                logMessage('WebSocket connected', 'system');
            };

            ws.onmessage = (event) => {
                logMessage(event.data, 'received');
            };

            ws.onclose = () => {
                logMessage('WebSocket disconnected', 'system');
                setTimeout(connectWebSocket, 3000);
            };
        }

        function logMessage(message, type) {
            const div = document.createElement('div');
            div.className = `message ${type}`;
            div.textContent = message;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendMessageBtn.addEventListener('click', () => {
            if (ws && messageInput.value) {
                ws.send(messageInput.value);
                logMessage(messageInput.value, 'sent');
                messageInput.value = '';
            }
        });

        // SSE Demo
        let eventSource = null;

        startSSEBtn.addEventListener('click', () => {
            if (!eventSource) {
                eventSource = new EventSource('https://api.example.com/events');
                
                eventSource.onmessage = (event) => {
                    const div = document.createElement('div');
                    div.textContent = event.data;
                    sseContent.insertBefore(div, sseContent.firstChild);
                };

                startSSEBtn.disabled = true;
                stopSSEBtn.disabled = false;
            }
        });

        stopSSEBtn.addEventListener('click', () => {
            if (eventSource) {
                eventSource.close();
                eventSource = null;
                startSSEBtn.disabled = false;
                stopSSEBtn.disabled = true;
            }
        });

        // Push Notifications
        document.getElementById('requestNotification').addEventListener('click', async () => {
            try {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    document.getElementById('sendNotification').disabled = false;
                }
            } catch (error) {
                console.error('Error requesting notification permission:', error);
            }
        });

        document.getElementById('sendNotification').addEventListener('click', () => {
            if (Notification.permission === 'granted') {
                new Notification('Test Notification', {
                    body: 'This is a test notification',
                    icon: '/path/to/icon.png'
                });
            }
        });

        // Initialize WebSocket
        connectWebSocket();
    })();
});