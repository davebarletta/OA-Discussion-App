// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Handle messages from the background script (e.g., receiving chat messages)
    // Use message data as needed
  });
  
  // Example: Sending a message from the content script to the background script
  function sendMessageToBackground(data) {
    chrome.runtime.sendMessage({ action: 'chatMessageReceived', data: data });
  }
  
  // Example: Sending a chat message to the background script
  function sendChatMessage(message) {
    // Replace this with the logic to send the chat message
    // You may want to use fetch or other methods to send the message to your server or external database
    const chatMessage = {
      content: message,
      sender: 'user@example.com', // Replace with the sender's email or user ID
      timestamp: Date.now(),
    };
    sendMessageToBackground(chatMessage);
  }
  
  // Example: Listen for user interactions in the web page and trigger sending a chat message
  document.addEventListener('keydown', function (event) {
    // Check if the user pressed the 'Enter' key in an input field (e.g., chat input)
    if (event.key === 'Enter' && event.target.tagName.toLowerCase() === 'input') {
      const message = event.target.value.trim();
      if (message !== '') {
        sendChatMessage(message);
        event.target.value = ''; // Clear the input field after sending the message
      }
    }
  });
  