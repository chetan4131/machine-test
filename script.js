document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Password validation
    if (!validatePassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must be 6 characters or more and include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        valid = false;
    }

    if (valid) {
        alert('Hello user welcome back!');
        // Here you can add code to submit the form data to the server
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // Password regex: at least 6 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(password);
}

function togglePasswordVisibility() {
    const passwordField = document.querySelector("#password");
    const eyeIcon = document.querySelector(".show-hide");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "images/view.png";
    } else {
        passwordField.type = "password";
        eyeIcon.src = "images/hide.png";
    }
}
document.querySelector('.show-hide').addEventListener('click', togglePasswordVisibility)