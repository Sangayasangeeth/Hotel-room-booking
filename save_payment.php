<?php

$booking_id = $_POST['booking_id'];
$amount_adv = $_POST['amount_adv'];
$amount_total = $_POST['amount_total'];


if (!empty($booking_id) || !empty($amount_adv) || !empty($amount_total)) {

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "hotel_management";


    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
    } else {
        $SELECT = "SELECT booking_id From payment Where booking_id = ? Limit 1";
        $INSERT = "INSERT Into payment (booking_id , amount_adv , amount_total )values(?,?,?)";

        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $booking_id);
        $stmt->execute();
        $stmt->bind_result($booking_id);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        //checking username
        if ($rnum == 0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sss", $booking_id, $amount_adv, $amount_total);
            $stmt->execute();
            echo "New record inserted sucessfully <a href='view_payment.php'>Click here to view saved details</a>";
        } else {
            echo "Booking Id already Exist";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All field are required";
    die();
}
