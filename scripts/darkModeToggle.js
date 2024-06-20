// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode preference is already set
const isDarkMode = localStorage.getItem('darkMode') === 'true';
toggleDarkMode(isDarkMode); // Set initial dark mode based on user preference

// Add click event listener to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    const body = document.body;
    const enableDarkMode = body.classList.toggle('dark-mode');

    // Save user preference to localStorage
    localStorage.setItem('darkMode', enableDarkMode);
});

// Function to toggle dark mode based on user preference
function toggleDarkMode(enableDarkMode) {
    const body = document.body;
    if (enableDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}
