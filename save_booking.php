<?php

$booking_id = $_POST['booking_id'];
$booking_date = $_POST['booking_date'];
$room_id = $_POST['room_id'];
$cust_id = $_POST['cust_id'];
$check_in =  $_POST['check_in'];
$check_out =  $_POST['check_out'];


if (!empty($booking_id) || !empty($booking_date) || !empty($room_id) || !empty($cust_id)  || !empty($check_in) || !empty($check_out)) 

{

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "hotel_management";


$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
  $SELECT = "SELECT booking_id From booking_details Where booking_id = ? Limit 1";
  $INSERT = "INSERT Into booking_details (booking_id , booking_date ,room_id ,cust_id , check_in, check_out )values(?,?,?,?,?,?)";

//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $booking_id);
     $stmt->execute();
     $stmt->bind_result($booking_id);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssssss", $booking_id,$booking_date,$room_id,$cust_id,$check_in,$check_out);
      $stmt->execute();
      echo "New record inserted sucessfully <a href='view_booking.php'>Click here to view saved details</a>";
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
?>
