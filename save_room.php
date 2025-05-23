<?php

$room_id = $_POST['room_id'];
$room_type_id = $_POST['room_type_id'];
$branch_id = $_POST['branch_id'];


if (!empty($room_id) || !empty($room_type_id) || !empty($branch_id)) {

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "hotel_management";


    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
    } else {
        $SELECT = "SELECT room_type_id From room Where room_type_id = ? Limit 1";
        $INSERT = "INSERT Into room (room_id , room_type_id , branch_id )values(?,?,?)";

        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $room_type_id);
        $stmt->execute();
        $stmt->bind_result($room_type_id);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        //checking username
        if ($rnum == 0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sss", $room_id, $room_type_id, $branch_id);
            $stmt->execute();
            echo "New record inserted sucessfully <a href='view_room.php'>Click here to view saved details</a>";
        } else {
            echo "Room Id already Exist";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All field are required";
    die();
}
