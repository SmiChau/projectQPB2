// Get references to key elements
const templatesLink = document.getElementById('template-link'); // Updated to match your HTML
const sidebarTwo = document.querySelector('.sidebartwo');
const templates = document.querySelectorAll('.template');
const mainPreview = document.getElementById('main-preview');

// Show Sidebar Two when "Templates" link is clicked
templatesLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent anchor default behavior
    sidebarTwo.style.display = 'block'; // Show Sidebar Two
});

// Add click event listeners to all template images
templates.forEach((template) => {
    template.addEventListener('click', () => {
        const templateImage = template.getAttribute('data-template');
        mainPreview.src = templateImage; // Update the main preview
    });
});


//show sidebar two
templatesLink.addEventListener('click', (event) => {
    event.preventDefault();
    sidebarTwo.style.display = 'block'; // Show Sidebar Two
    document.querySelector('#template-section').scrollIntoView({ behavior: 'smooth' });
});