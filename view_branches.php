<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); 
}

$sql = "SELECT branch_id, branch_name, branch_add, branch_num FROM branches";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Branches</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
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
            <th>Branch ID</th>
            <th>Branch Name</th>
            <th>Branch Address</th>
            <th>Branch Phone</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . $row['branch_id'] . "</td>
                        <td>" . $row['branch_name'] . "</td>
                        <td>" . $row['branch_add'] . "</td>
                        <td>" . $row['branch_num'] . "</td>
                    </tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No branches found</td></tr>";
        }
        $conn->close();
        ?>
    </table>
    <br><br>
    <a href="branch.html">Click here to add more !!!</a>
</body>
</html>
