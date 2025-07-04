// Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');       // Form Selection
    const feedbackDiv = document.getElementById('form-feedback');    // Feedback Division Selection

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation Logic
        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must contain '@' and '.'.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying Feedback
        feedbackDiv.style.display = "block"; // Show the feedback div

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red for error
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
