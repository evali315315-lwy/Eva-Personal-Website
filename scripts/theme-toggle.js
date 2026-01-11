// Dark Mode Toggle
(function() {
    const darkStylesheet = document.getElementById('dark-mode-stylesheet');
    const themeToggle = document.getElementById('theme-toggle');

    if (!darkStylesheet || !themeToggle) {
        console.warn('Theme toggle elements not found');
        return;
    }

    // Check localStorage for saved preference
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    // Apply saved preference on page load
    if (darkModeEnabled) {
        darkStylesheet.disabled = false;
        themeToggle.textContent = '☀️';
    }

    // Toggle function
    themeToggle.addEventListener('click', function() {
        const isEnabled = !darkStylesheet.disabled;
        darkStylesheet.disabled = !isEnabled;

        // Update button icon
        themeToggle.textContent = isEnabled ? '🌙' : '☀️';

        // Save preference
        localStorage.setItem('darkMode', !isEnabled);
    });
})();
