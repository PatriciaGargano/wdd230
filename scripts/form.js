function validateForm(event) {
    const password1 = document.getElementById('password').value;
    const password2 = document.getElementById('confirm_password').value;
    if (password1 !== password2) {
        alert("Passwords do not match. Please try again.");
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';
        document.getElementById('password').focus();
        event.preventDefault();
    }
}

function updateRangeValue(value) {
    document.getElementById('rangeValue').textContent = value;
}
