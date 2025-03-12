// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Add your project config files here...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth Functions
const auth = getAuth();

document.querySelector("#signup").addEventListener("click", signUp)
document.querySelector("#login").addEventListener("click", login)
document.querySelector("#logout").addEventListener("click", logout)

async function signUp() {

    console.log('signing up...')

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('created user:', user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code:', errorCode)
        console.log('error message:', errorMessage)
        // ..
      });
}

async function login() {

  console.log('logging in...')

  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user logged in:', user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error code:', errorCode)
      console.log('error message:', errorMessage)
    });

}

async function logout() {

  console.log('logging out...')

  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('sign out successful')
  }).catch((error) => {
    // An error happened.
    console.log('error signing out:', error)
  });

}