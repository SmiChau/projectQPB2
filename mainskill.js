const skillContainer = document.getElementById("skill-container");
const addSkillBtn = document.getElementById("add-skill-btn");

// Function to handle skill level selection
function handleLevelSelection(skillRow) {
    const levelBars = skillRow.querySelectorAll(".level");
    levelBars.forEach((bar, index) => {
        bar.addEventListener("click", () => {
            // Reset all previous levels
            levelBars.forEach((b, i) => {
                if (i <= index) {
                    b.classList.add("selected");
                } else {
                    b.classList.remove("selected");
                }
            });
        });
    });
}

// Function to create a new skill row
function createSkillRow() {
    const skillRow = document.createElement("div");
    skillRow.className = "skill-row";

    // Skill name input
    const skillInputDiv = document.createElement("div");
    skillInputDiv.className = "form-group";
    const skillLabel = document.createElement("label");
    skillLabel.textContent = "Skill";
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.className = "skill-input";
    skillInput.placeholder = "Enter skill";
    skillInputDiv.appendChild(skillLabel);
    skillInputDiv.appendChild(skillInput);

    // Skill level selector
    const levelInputDiv = document.createElement("div");
    levelInputDiv.className = "form-group";
    const levelLabel = document.createElement("label");
    levelLabel.textContent = "Level";
    const levelSelector = document.createElement("div");
    levelSelector.className = "skill-level";
    for (let i = 0; i < 5; i++) {
        const levelBar = document.createElement("span");
        levelBar.className = "level";
        levelBar.setAttribute("data-level", i + 1);
        levelSelector.appendChild(levelBar);
    }
    levelInputDiv.appendChild(levelLabel);
    levelInputDiv.appendChild(levelSelector);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-skill-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        skillContainer.removeChild(skillRow);
    });

    // Append everything to skill row
    skillRow.appendChild(skillInputDiv);
    skillRow.appendChild(levelInputDiv);
    skillRow.appendChild(deleteBtn);

    // Add level selection functionality
    handleLevelSelection(skillRow);

    return skillRow;
}

// Add event listener to "+ Add Skill" button
addSkillBtn.addEventListener("click", () => {
    const newSkillRow = createSkillRow();
    skillContainer.appendChild(newSkillRow);
});

// Initialize level selection and delete button for the initial row
document.querySelectorAll(".skill-row").forEach((row) => {
    handleLevelSelection(row);

    const deleteBtn = row.querySelector(".delete-skill-btn");
    deleteBtn.addEventListener("click", () => {
        skillContainer.removeChild(row);
    });
});
