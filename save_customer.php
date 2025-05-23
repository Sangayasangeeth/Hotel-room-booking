<?php

// Fetching form data using the correct field names
$cust_id = $_POST['cust_id'];
$cust_name = $_POST['cust_name'];
$gender = $_POST['gender'];
$cust_num = $_POST['cust_num'];
$cust_email = $_POST['cust_email'];
$cust_add = $_POST['cust_add'];
$proof = $_POST['proof'];
$cust_proof_no = $_POST['cust_proof_no'];

// Checking if none of the fields are empty
if (!empty($cust_id) && !empty($cust_name) && !empty($gender) && !empty($cust_num)
    && !empty($cust_email) && !empty($cust_add) && !empty($proof) && !empty($cust_proof_no)) {

    // Database connection details
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "hotel_management";

    // Create connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die('Connect Error ('. $conn->connect_errno .') '. $conn->connect_error);
    } else {
        // Prepare statements to check if Customer ID or Email already exists
        $SELECT_ID = "SELECT cust_id FROM customer WHERE cust_id = ? LIMIT 1";
        $SELECT_EMAIL = "SELECT cust_email FROM customer WHERE cust_email = ? LIMIT 1";
        $INSERT = "INSERT INTO customer (cust_id, cust_name, gender, cust_num, cust_email, cust_add, proof, cust_proof_id)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        // Check if customer ID already exists
        $stmt_id = $conn->prepare($SELECT_ID);
        $stmt_id->bind_param("s", $cust_id);
        $stmt_id->execute();
        $stmt_id->store_result();
        $id_exists = $stmt_id->num_rows;

        // Check if email already exists
        $stmt_email = $conn->prepare($SELECT_EMAIL);
        $stmt_email->bind_param("s", $cust_email);
        $stmt_email->execute();
        $stmt_email->store_result();
        $email_exists = $stmt_email->num_rows;

        // Handle the result for duplicate ID or Email
        if ($id_exists > 0) {
            echo "Customer ID already exists.";
        } elseif ($email_exists > 0) {
            echo "Email ID already exists.";
        } else {
            // If neither exists, insert the new record
            $stmt_insert = $conn->prepare($INSERT);
            $stmt_insert->bind_param("ssssssss", $cust_id, $cust_name, $gender, $cust_num, $cust_email, $cust_add, $proof, $cust_proof_no);
            $stmt_insert->execute();
            echo "New record inserted successfully. <a href='view_branches.php'>Click here to view saved details</a>";
            $stmt_insert->close();
        }

        // Close the prepared statements and connection only once
        $stmt_id->close();
        $stmt_email->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>
