document.addEventListener("DOMContentLoaded", function() {
    // Wait for the page to fully load
    const body = document.querySelector('body');
    
    // Add the 'visible' class to trigger the fade-in effect
    setTimeout(() => {
        body.classList.add('visible');
    }, 100); // Delay to ensure the transition is noticeable
});