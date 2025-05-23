<?php

$branch_id = $_POST['branch_id'];
$branch_name = $_POST['branch_name'];
$branch_add = $_POST['branch_add'];
$branch_num = $_POST['branch_num'];




if (!empty($branch_id) || !empty($branch_name) || !empty($branch_add) || !empty($branch_num) ) 
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
  $SELECT = "SELECT branch_id From branches Where branch_id = ? Limit 1";
  $INSERT = "INSERT Into branches (branch_id , branch_name ,branch_add, branch_num )values(?,?,?,?)";

//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $branch_id);
     $stmt->execute();
     $stmt->bind_result($branch_id);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssss", $branch_id,$branch_name,$branch_add,$branch_num);
      $stmt->execute();
      echo "New record inserted sucessfully <a href='view_branches.php'>Click here to view saved details</a>";
     } else {
      echo "Branch Id already Exist";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>
