document.addEventListener('DOMContentLoaded', function () {
    // Initialize Google Sign-In client
    function initializeGoogleSignIn() {
      gapi.load('auth2', function () {
        gapi.auth2.init({
          client_id: 'YOUR_GOOGLE_OAUTH2_CLIENT_ID',
          scope: 'profile email',
        });
      });
    }
  
    // Handle user sign-in status
    function updateSignInStatus(isSignedIn) {
      const signInButton = document.getElementById('sign-in');
      const signOutButton = document.getElementById('sign-out');
      const userInfoDiv = document.getElementById('user-info');
  
      if (isSignedIn) {
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
        userInfoDiv.style.display = 'block';
  
        const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
        const profile = googleUser.getBasicProfile();
  
        const userAvatar = document.getElementById('user-avatar');
        const userName = document.getElementById('user-name');
  
        userAvatar.src = profile.getImageUrl();
        userName.textContent = `Hello, ${profile.getName()}`;
  
        // Implement chat functionality here (e.g., fetching chat messages, sending messages)
      } else {
        signInButton.style.display = 'block';
        signOutButton.style.display = 'none';
        userInfoDiv.style.display = 'none';
  
        // Implement sign-out functionality here (e.g., clearing user data, signing out)
      }
    }
  
    // Sign in with Google
    function signInWithGoogle() {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(updateSignInStatus);
    }
  
    // Sign out with Google
    function signOutWithGoogle() {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(updateSignInStatus);
    }
  
    // Set up event listeners for buttons
    document.getElementById('sign-in').addEventListener('click', signInWithGoogle);
    document.getElementById('sign-out').addEventListener('click', signOutWithGoogle);
  
    // Initialize Google Sign-In on page load
    initializeGoogleSignIn();
  });
  