// 1. Wrap everything inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // 2. Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 3. Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting to server

        // 4. Get the input values and trim them
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 5. Initialize validation variables
        let isValid = true;
        const messages = [];

        // 6. Validate Username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 7. Validate Email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must include '@' and '.'.");
        }

        // 8. Validate Password
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 9. Display Feedback
        if (isValid) {
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.backgroundColor = '#d4edda';
            feedbackDiv.style.color = '#155724';
            feedbackDiv.textContent = "Registration successful!";
        } else {
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.backgroundColor = '#ffbaba';
            feedbackDiv.style.color = '#d8000c';
            feedbackDiv.innerHTML = messages.join('<br>');
        }
    });
});
