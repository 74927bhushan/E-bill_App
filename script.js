// ... your common.js code ... 

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