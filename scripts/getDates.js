
// Get the current year for the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get the last modified date/time and display it in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

