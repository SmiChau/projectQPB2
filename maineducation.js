const addEducationButton = document.querySelector('.add-education-btn');
const educationSection = document.getElementById('education-section');

// Add event listener to the "Add Education" button
addEducationButton.addEventListener('click', () => {
    const newEducationEntry = document.querySelector('.education-entry').cloneNode(true);

    // Clear the inputs in the cloned entry
    newEducationEntry.querySelectorAll('input, textarea').forEach((input) => {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    // Ensure delete button is visible for new entries
    const deleteButton = newEducationEntry.querySelector('.delete-education-btn');
    deleteButton.style.display = 'inline-block'; // Show delete button
    deleteButton.addEventListener('click', () => {
        newEducationEntry.remove();
    });

    // Append the cloned entry to the section
    educationSection.insertBefore(newEducationEntry, addEducationButton);
});
