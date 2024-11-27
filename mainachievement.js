const addAchievementBtn = document.getElementById('add-achievement-btn');

addAchievementBtn.addEventListener('click', () => {
    const newAchievementRow = createAchievementRow();
    const achievementsContainer = document.getElementById('achievements-container');
    achievementsContainer.appendChild(newAchievementRow);
});


function createAchievementRow() {
    const achievementRow = document.createElement('div');
    achievementRow.className = 'achievement-row';

    // Title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    titleLabel.className = 'achievement-label';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'achievement-title';
    titleInput.placeholder = 'What did you achieve?';

    // Description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    descriptionLabel.className = 'achievement-label';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.className = 'achievement-description';
    descriptionInput.placeholder = 'Describe the achievement briefly.';

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-achievement-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        const achievementsContainer = document.getElementById('achievements-container');
        achievementsContainer.removeChild(achievementRow);
    });

    // Append elements
    achievementRow.appendChild(titleLabel);
    achievementRow.appendChild(titleInput);
    achievementRow.appendChild(descriptionLabel);
    achievementRow.appendChild(descriptionInput);
    achievementRow.appendChild(deleteBtn);

    return achievementRow;
}
