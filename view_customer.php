<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT cust_id, cust_name, gender, cust_num, cust_email, cust_add, proof, cust_proof_id FROM customer";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Customer Details</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table,
        th,
        td {
            border: 1px solid black;
        }

        th,
        td {
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        h1 {
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>Saved Branch Details</h1>
    <table>
        <tr>
            <th>Customer ID</th>
            <th>Customer name</th>
            <th>Gender</th>
            <th>Customer Number</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
            <th>Proof</th>
            <th>Proof ID</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . $row['cust_id'] . "</td>
                        <td>" . $row['cust_name'] . "</td>
                        <td>" . $row['gender'] . "</td>
                        <td>" . $row['cust_num'] . "</td>
                        <td>" . $row['cust_email'] . "</td>
                        <td>" . $row['cust_add'] . "</td>
                        <td>" . $row['proof'] . "</td>
                        <td>" . $row['cust_proof_id'] . "</td>
                    </tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No branches found</td></tr>";
        }
        $conn->close();
        ?>
    </table>
    <br><br>
    <a href="customer.html">Click here to add more !!!</a>
</body>

</html>