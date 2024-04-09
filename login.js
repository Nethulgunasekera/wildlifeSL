const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Register link click event
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

// Login link click event
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// Register form submission event listener
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('register-username').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();

  if (username && email && password) {
    // Save the registration data to local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    alert('Registration successful!');

    // Clear the registration form fields
    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';

    // Hide the registration form and show the login form
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  } else {
    // Show error message
    alert('Please fill in all fields');
  }
});

// Login form submission event listener
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    // Get the registration data from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username and password match
    let user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      // Redirect to the home page
      window.location.href = 'index.html';
    } else {
      // Show error message
      alert('Invalid username or password');
    }
  } else {
    // Show error message
    alert('Please fill in all fields');
  }
});