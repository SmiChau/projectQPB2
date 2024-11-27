const referenceContainer = document.getElementById("reference-container");
const addReferenceBtn = document.getElementById("add-reference-btn");

// Function to create a new reference row
function createReferenceRow() {
    const referenceRow = document.createElement("div");
    referenceRow.className = "reference-row";

    // First Name
    const firstNameDiv = document.createElement("div");
    firstNameDiv.className = "form-group";
    const firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First Name";
    const firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.placeholder = "Enter First Name";
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(firstNameInput);

    // Last Name
    const lastNameDiv = document.createElement("div");
    lastNameDiv.className = "form-group";
    const lastNameLabel = document.createElement("label");
    lastNameLabel.textContent = "Last Name";
    const lastNameInput = document.createElement("input");
    lastNameInput.type = "text";
    lastNameInput.placeholder = "Enter Last Name";
    lastNameDiv.appendChild(lastNameLabel);
    lastNameDiv.appendChild(lastNameInput);

    // Company
    const companyDiv = document.createElement("div");
    companyDiv.className = "form-group";
    const companyLabel = document.createElement("label");
    companyLabel.textContent = "Company";
    const companyInput = document.createElement("input");
    companyInput.type = "text";
    companyInput.placeholder = "Enter Company";
    companyDiv.appendChild(companyLabel);
    companyDiv.appendChild(companyInput);

    // Designation
    const designationDiv = document.createElement("div");
    designationDiv.className = "form-group";
    const designationLabel = document.createElement("label");
    designationLabel.textContent = "Designation";
    const designationInput = document.createElement("input");
    designationInput.type = "text";
    designationInput.placeholder = "Enter Designation";
    designationDiv.appendChild(designationLabel);
    designationDiv.appendChild(designationInput);

    // Phone
    const phoneDiv = document.createElement("div");
    phoneDiv.className = "form-group";
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone";
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.placeholder = "Enter Phone Number";
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);

    // Email
    const emailDiv = document.createElement("div");
    emailDiv.className = "form-group";
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Enter Email";
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-reference-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        referenceContainer.removeChild(referenceRow);
    });

    // Append all elements to the reference row
    referenceRow.appendChild(firstNameDiv);
    referenceRow.appendChild(lastNameDiv);
    referenceRow.appendChild(companyDiv);
    referenceRow.appendChild(designationDiv);
    referenceRow.appendChild(phoneDiv);
    referenceRow.appendChild(emailDiv);
    referenceRow.appendChild(deleteBtn);

    return referenceRow;
}

// Add event listener to "+ Add References" button
addReferenceBtn.addEventListener("click", () => {
    const newReferenceRow = createReferenceRow();
    referenceContainer.appendChild(newReferenceRow);
});

// Initialize delete functionality for the initial reference row
document.querySelectorAll(".reference-row").forEach((row) => {
    const deleteBtn = row.querySelector(".delete-reference-btn");
    deleteBtn.addEventListener("click", () => {
        referenceContainer.removeChild(row);
    });
});
