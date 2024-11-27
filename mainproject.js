const addProjectButton = document.querySelector('.add-project-btn');
const projectSection = document.getElementById('project-section');

// Add event listener to the "Add Project" button
addProjectButton.addEventListener('click', () => {
    const newProjectEntry = document.querySelector('.project-entry').cloneNode(true);

    // Clear the inputs in the cloned entry
    newProjectEntry.querySelectorAll('input, textarea').forEach((input) => {
        input.value = ''; // Reset all input fields
    });

    // Ensure delete button is visible for new entries
    const deleteButton = newProjectEntry.querySelector('.delete-project-btn');
    deleteButton.style.display = 'inline-block'; // Show delete button
    deleteButton.addEventListener('click', () => {
        newProjectEntry.remove();
    });

    // Append the cloned entry before the add button
    projectSection.insertBefore(newProjectEntry, addProjectButton);
});
