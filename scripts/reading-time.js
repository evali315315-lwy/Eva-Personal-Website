// Reading Time Calculator
(function() {
    function calculateReadingTime(element) {
        if (!element) return 0;

        const text = element.textContent || element.innerText;
        const wordCount = text.trim().split(/\s+/).length;
        const wordsPerMinute = 200; // Average reading speed
        const minutes = Math.ceil(wordCount / wordsPerMinute);

        return minutes;
    }

    // Auto-run on essay pages
    document.addEventListener('DOMContentLoaded', function() {
        const essayBody = document.getElementById('essay-body');
        const readingTimeElement = document.getElementById('reading-time');

        if (essayBody && readingTimeElement) {
            const readingTime = calculateReadingTime(essayBody);
            readingTimeElement.textContent = `${readingTime} min read`;
        }
    });
})();
