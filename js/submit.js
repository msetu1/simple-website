
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email == 'msetu5673@gmail.com' && password == 'sicret') {
        window.location.href = 'valid user';
    }
    else {
        alert('incorrect password');
    }
})

