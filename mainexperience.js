const addExperienceButton = document.querySelector('.add-experience-btn');
const experienceSection = document.getElementById('experience-section');

// Add event listener to the "Add Experience" button
addExperienceButton.addEventListener('click', () => {
    const newExperienceEntry = document.querySelector('.experience-entry').cloneNode(true);

    // Clear the inputs in the cloned entry
    newExperienceEntry.querySelectorAll('input, textarea').forEach((input) => {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    // Ensure delete button is visible for new entries
    const deleteButton = newExperienceEntry.querySelector('.delete-experience-btn');
    deleteButton.style.display = 'inline-block'; // Show delete button
    deleteButton.addEventListener('click', () => {
        newExperienceEntry.remove();
    });

    // Append the cloned entry to the section
    experienceSection.insertBefore(newExperienceEntry, addExperienceButton);
});
