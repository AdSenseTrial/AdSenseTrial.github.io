document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.getElementById('ad-container');
    
    // Simulate ad loading
    adContainer.textContent = 'Loading ad...';
    
    setTimeout(() => {
        // Simulate ad content
        adContainer.innerHTML = `
            <div style="background-color: #f0f0f0; padding: 10px; text-align: center;">
                <h3>Sample Ad</h3>
                <p>This is where your Google Ad would appear.</p>
                <button>Click me!</button>
            </div>
        `;
    }, 2000); // Simulate a 2-second loading time
});

