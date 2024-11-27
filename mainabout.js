const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const deleteBtn = document.getElementById('delete-btn');
const profileImg = document.getElementById('profile-img');

// Trigger file input when Update Photo is clicked
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

// Preview uploaded photo
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Reset to default photo on Delete
deleteBtn.addEventListener('click', () => {
    profileImg.src = 'default-profile.png';
    fileInput.value = ''; // Clear the file input
});

const addSocialLinkBtn = document.getElementById('add-social-link');
const socialLinksContainer = document.getElementById('social-links-container');

// Event Listener for Adding Social Links
addSocialLinkBtn.addEventListener('click', () => {
    // Create a new row for the social link
    const newSocialRow = document.createElement('div');
    newSocialRow.className = 'social-link-row';

    // Dropdown for selecting platform
    const platformDropdown = document.createElement('select');
    platformDropdown.className = 'social-platform';
    platformDropdown.innerHTML = `
        <option value="" disabled selected>Select Platform</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="GitHub">GitHub</option>
        <option value="Threads">Threads</option>
    `;

    // Input field for the link
    const linkInput = document.createElement('input');
    linkInput.type = 'url';
    linkInput.className = 'social-link-input';
    linkInput.placeholder = 'Enter link';

    // Create a Delete button for the row
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-social-link-btn';
    deleteButton.textContent = 'Delete';

    // Add event listener to delete the row
    deleteButton.addEventListener('click', () => {
        newSocialRow.remove();
    });

    // Append dropdown, input, and delete button to the row
    newSocialRow.appendChild(platformDropdown);
    newSocialRow.appendChild(linkInput);
    newSocialRow.appendChild(deleteButton);

    // Add the new row to the container
    socialLinksContainer.appendChild(newSocialRow);
});
