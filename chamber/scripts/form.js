function validateForm() {
    const password1 = document.getElementById('password').value;
    const password2 = document.getElementById('confirm_password').value;
    if (password1 !== password2) {
        alert("Passwords do not match. Please try again.");
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';
        document.getElementById('password').focus();
        return false;
    }
    return true;
}

function updateRangeValue(value) {
    document.getElementById('rangeValue').textContent = value;
}

function setTimestamp() {
    const timestampField = document.getElementById('timestamp');
    const now = new Date();
    const timestamp = now.toISOString();
    timestampField.value = timestamp;
}

// Set timestamp when the page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimestamp();
});
