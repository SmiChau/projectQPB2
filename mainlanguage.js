const languageContainer = document.getElementById("language-container");
const addLanguageBtn = document.getElementById("add-language-btn");

// Function to handle language level selection
function handleLevelSelection(languageRow) {
    const levelBars = languageRow.querySelectorAll(".level");
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

// Function to create a new language row
function createLanguageRow() {
    const languageRow = document.createElement("div");
    languageRow.className = "language-row";

    // Language name input
    const languageInputDiv = document.createElement("div");
    languageInputDiv.className = "form-group";
    const languageLabel = document.createElement("label");
    languageLabel.textContent = "Language";
    const languageInput = document.createElement("input");
    languageInput.type = "text";
    languageInput.className = "language-input";
    languageInput.placeholder = "Enter language";
    languageInputDiv.appendChild(languageLabel);
    languageInputDiv.appendChild(languageInput);

    // Language level selector
    const levelInputDiv = document.createElement("div");
    levelInputDiv.className = "form-group";
    const levelLabel = document.createElement("label");
    levelLabel.textContent = "Level";
    const levelSelector = document.createElement("div");
    levelSelector.className = "language-level";
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
    deleteBtn.className = "delete-language-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        languageContainer.removeChild(languageRow);
    });

    // Append everything to the row
    languageRow.appendChild(languageInputDiv);
    languageRow.appendChild(levelInputDiv);
    languageRow.appendChild(deleteBtn);

    // Add level selection functionality
    handleLevelSelection(languageRow);

    return languageRow;
}

// Add event listener to "+ Add Language" button
addLanguageBtn.addEventListener("click", () => {
    const newLanguageRow = createLanguageRow();
    languageContainer.appendChild(newLanguageRow);
});

// Initialize level selection and delete button for the initial row
document.querySelectorAll(".language-row").forEach((row) => {
    handleLevelSelection(row);

    const deleteBtn = row.querySelector(".delete-language-btn");
    deleteBtn.addEventListener("click", () => {
        languageContainer.removeChild(row);
    });
});
