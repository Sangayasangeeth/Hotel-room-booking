<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT room_id, room_type_id, branch_id FROM room";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Room Details</title>
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
            <th>Room ID</th>
            <th>Room Type ID</th>
            <th>Branch ID</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . $row['room_id'] . "</td>
                        <td>" . $row['room_type_id'] . "</td>                        
                        <td>" . $row['branch_id'] . "</td>
                    </tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No branches found</td></tr>";
        }
        $conn->close();
        ?>
    </table>
    <br><br>
    <a href="room.html">Click here to add more !!!</a>
</body>

</html>