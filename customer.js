document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to allow validation

    // Fetching all input fields
    const custId = document.getElementById("cust_id");
    const custName = document.getElementById("cust_name");
    const gender = document.getElementById("gender");
    const custNum = document.getElementById("cust_num");
    const custEmail = document.getElementById("cust_email");
    const custAdd = document.getElementById("cust_add");
    const proofType = document.getElementById("proof");
    const proofNo = document.getElementById("cust_proof_no");

    // Validating fields on form submission
    validateField(custId);
    validateField(custName);
    validateFieldSelect(gender);
    validatePhoneNumber(custNum);
    validateEmail(custEmail);
    validateField(custAdd);
    validateFieldSelect(proofType);
    validateField(proofNo);

});

// Function to validate text input fields
function validateField(input) {
    const smallTag = input.nextElementSibling; // Get the <small> tag next to the input
    if (input.value.trim() === "") {
        smallTag.style.display = "block";
        smallTag.textContent = "This field is required"; // General error message
        input.classList.add("invalid"); // Add invalid class
        input.classList.remove("valid"); // Remove valid class
    } else {
        smallTag.style.display = "none"; // Hide error if field is filled
        input.classList.add("valid"); // Add valid class
        input.classList.remove("invalid"); // Remove invalid class
    }
}

// Function to validate select input fields
function validateFieldSelect(select) {
    const smallTag = select.nextElementSibling;
    if (select.value === "Select") {
        smallTag.style.display = "block";
        smallTag.textContent = "Please select an option"; // General error message
        select.classList.add("invalid");
        select.classList.remove("valid");
    } else {
        smallTag.style.display = "none";
        select.classList.add("valid");
        select.classList.remove("invalid");
    }
}

// Function to validate phone number
function validatePhoneNumber(input) {
    const smallTag = input.nextElementSibling;
    const phonePattern = /^[0-9]{10}$/; // Only 10 digits allowed
    if (!phonePattern.test(input.value.trim())) {
        smallTag.style.display = "block";
        smallTag.textContent = "Phone number must be 10 digits"; // Specific error message
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        smallTag.style.display = "none";
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
}

// Function to validate email address
function validateEmail(input) {
    const smallTag = input.nextElementSibling;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(input.value.trim())) {
        smallTag.style.display = "block";
        smallTag.textContent = "Please enter a valid email"; // Specific error message
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else {
        smallTag.style.display = "none";
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
}

// Add event listeners for live validation
document.querySelectorAll("input, select").forEach(input => {
    input.addEventListener("input", () => {
        if (input.tagName.toLowerCase() === 'select') {
            validateFieldSelect(input);
        } else {
            validateField(input);
            if (input.id === 'cust_num') {
                validatePhoneNumber(input);
            } else if (input.id === 'cust_email') {
                validateEmail(input);
            }
        }
    });
});
