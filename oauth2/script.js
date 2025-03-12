function loadGoogleAPI() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
  
// Initialize Google Sign-In
function initializeGoogleSignIn() {
    // Client ID from Google Cloud Console
    const CLIENT_ID = '454681766076-e0hnku7qlco4nmfncriblrkuks5sacjf.apps.googleusercontent.com';
    
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse
    });
    
    // Optional: Render the Sign In button
    google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { 
        theme: 'outline', 
        size: 'large',
        type: 'standard'
        }
    );
  
    // Optional: Automatically display the One Tap dialog
    google.accounts.id.prompt();
}
  
  // Handle the sign-in response
function handleCredentialResponse(response) {
    // response.credential contains the JWT ID token
    const idToken = response.credential;
    
    // Send the token to your backend for verification
    // or decode it on the client side for user info
    const payload = decodeJwtResponse(idToken);
    console.log('User Info:', payload);
}
  
  // Helper function to decode the JWT token
function decodeJwtResponse(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
  
// Load the API when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadGoogleAPI();
    // Initialize once the API is loaded
    window.onload = initializeGoogleSignIn;
});