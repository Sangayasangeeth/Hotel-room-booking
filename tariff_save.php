<?php

$room_type_id = $_POST['room_type_id'];
$tariff = $_POST['tariff'];


if (!empty($room_type_id) || !empty($tariff) ) {

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "hotel_management";


    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
    } else {
        $INSERT = "INSERT Into room_tariff (room_type_id , tariff )values(?,?)";

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ss", $room_type_id, $tariff);
            $stmt->execute();
            echo "New record inserted sucessfully <a href='tariff_view.php'>Click here to view saved details</a>";
        
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All field are required";
    die();
}
