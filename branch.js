// Grabbing elements by their ID
var form = document.getElementById("form");
var branch_id = document.getElementById("branch_id");
var branch_name = document.getElementById("branch_name");
var branch_add = document.getElementById("branch_add"); 
var branch_num = document.getElementById("branch_num");

function setError(input, message) {
    const container = input.parentElement;  // The div containing the input and small tag
    const small = container.querySelector("small");

    if (!small) {
        console.error("Small tag not found for input:", input); // Debugging step
        return;
    }

    // Add error message and display the small tag
    small.textContent = message;
    small.classList.add("visible");  // Add the visible class to show the error
    input.style.borderColor = "red";
}

function setSuccess(input) {
    const container = input.parentElement;
    const small = container.querySelector("small");

    if (!small) {
        console.error("Small tag not found for input:", input); // Debugging step
        return;
    }

    // Clear the error message and hide the small tag
    small.textContent = "";
    small.classList.remove("visible");  // Hide the small tag when input is valid
    input.style.borderColor = "green";
}


// Validation for Branch ID
function valid_id() {
    var branch_id_value = branch_id.value.trim();
    if (branch_id_value === "") {
        setError(branch_id, "Branch ID cannot be blank");
    } else if (!/^.{3,}$/.test(branch_id_value)) {
        setError(branch_id, "Must be minimum 3 characters");
    } else {
        setSuccess(branch_id);
    }
}

// Validation for Branch Name
function valid_name() {
    var branch_name_value = branch_name.value.trim();
    if (branch_name_value === "") {
        setError(branch_name, "Branch Name cannot be blank");
    } else if (!/^.{3,}$/.test(branch_name_value)) {
        setError(branch_name, "Must be minimum 3 characters");
    } else {
        setSuccess(branch_name);
    }
}

// Validation for Branch Address
function valid_address() {
    var branch_add_value = branch_add.value.trim();
    if (branch_add_value === "") {
        setError(branch_add, "Branch Address cannot be blank");
    } else if (!/^.{5,}$/.test(branch_add_value)) {
        setError(branch_add, "Must be minimum 5 characters");
    } else {
        setSuccess(branch_add);
    }
}

// Validation for Branch Phone Number
function valid_number() {
    var branch_num_value = branch_num.value.trim();
    if (branch_num_value === "") {
        setError(branch_num, "Branch Phone number cannot be blank");
    } else if (!/^\d{10}$/.test(branch_num_value)) {
        setError(branch_num, "Phone number must be 10 digits");
    } else {
        setSuccess(branch_num);
    }
}

// Event listener for form submission
form.addEventListener("submit", function (event) {
    // Perform all validations
    valid_id();
    valid_name();
    valid_address();
    valid_number();

    // If there are any input fields with errors, prevent form submission
    if (document.querySelectorAll('input[style="border-color: red;"]').length > 0) {
        event.preventDefault();  // Stop form submission
        alert("Please correct the errors in the form");
    }
});
