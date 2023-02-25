document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    console.log(email, password);

})