// Listen for extension installation or update
chrome.runtime.onInstalled.addListener(function () {
    // Perform any setup tasks here (e.g., initializing default settings)
  });
  
  // Listen for messages from content scripts
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Handle messages from content scripts (e.g., receiving chat messages)
    // Use message data as needed
  });
  
  // Example: Listen for messages from popup.js
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'sendChatMessage') {
      // Example: Sending a message from the popup to content scripts
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'chatMessageReceived',
          data: message.data,
        });
      });
    }
  });
  
  // Example: Sending a message from background.js to popup.js
  function sendMessageToPopup(data) {
    chrome.runtime.sendMessage({ action: 'updatePopup', data: data });
  }
  
  // Example: Periodic background task (e.g., updating chat messages)
  function updateChatMessages() {
    // Implement the logic to update chat messages here
    // Use chrome.storage or other storage methods as needed
  }
  
  // Example: Schedule the periodic background task
  setInterval(updateChatMessages, 5000); // Update every 5 seconds (adjust as needed)
  