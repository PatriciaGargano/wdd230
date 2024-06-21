// getDates.js

// Get the last modified date of the document
document.addEventListener('DOMContentLoaded', (event) => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});
