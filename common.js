// Function to check if a user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to redirect to login page
function redirectToLogin() {
    window.location.href = 'login.html';
}

// Function to logout
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userData');
    redirectToLogin();
}

// Function to set the login state 
function setLoginState() {
    if (isLoggedIn()) {
        // Display appropriate nav items
        document.getElementById('logoutButton').style.display = 'block';
        document.getElementById('signupButton').style.display = 'none';
        document.getElementById('loginButton').style.display = 'none';

        // Show user's name or username
        let userName = JSON.parse(localStorage.getItem('userData')).name; 
        document.getElementById('welcomeUser').textContent = `Welcome, ${userName}!`;
    } else {
        // Display appropriate nav items
        document.getElementById('logoutButton').style.display = 'none';
        document.getElementById('signupButton').style.display = 'block';
        document.getElementById('loginButton').style.display = 'block';

        // Hide user's name or username
        document.getElementById('welcomeUser').textContent = ''; 
    }
}

//  Apply the state on page load
window.onload = setLoginState;

// Logout button handling 
const logoutButton = document.getElementById('logoutButton'); 
if (logoutButton) { 
    logoutButton.addEventListener('click', logout); 
}

// Handle "Signin" and "Signup" buttons on Homepage
const homepageSigninButton = document.getElementById('loginButton');
const homepageSignupButton = document.getElementById('signupButton');

if (homepageSigninButton) {
  homepageSigninButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
}

if (homepageSignupButton) {
  homepageSignupButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Handle "FAQ" button on other pages
const faqButton = document.getElementById('faqButton');

if (faqButton) {
  faqButton.addEventListener('click', () => {
    window.location.href = 'faq.html';
  });
}

// Sign up form handling (index.html)
const signupForm = document.querySelector('.signup-form form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Get data from the signup form
    const name = signupForm.querySelector('input[placeholder="Full Name"]').value;
    const email = signupForm.querySelector('input[placeholder="Email"]').value;
    const password = signupForm.querySelector('input[placeholder="Password"]').value;

    // Store user data in local storage
    localStorage.setItem('userData', JSON.stringify({
        name: name,
        email: email,
        password: password
    }));

    // Set login state to true
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to homepage
    window.location.href = 'Homepage_userdashboard.html';
});

// Login form handling (login.html)
const loginForm = document.querySelector('.signin-form form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Get data from the login form
    const email = loginForm.querySelector('input[placeholder="Email"]').value;
    const password = loginForm.querySelector('input[placeholder="Password"]').value;

    // Retrieve user data from local storage
    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if the user exists and the password matches
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        // Set login state to true
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to homepage
        window.location.href = 'Homepage_userdashboard.html';
    } else {
        // Display error message if credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
});