<?php
include 'connectPDO.php';

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

$sql = "SELECT count(*) FROM user_accounts WHERE user_username = :username AND user_password = :pass"; //check all entries in the user_accounts table for a match of the username and password entered by the user

$stmt = $conn->prepare($sql);//create statment

//bind parameters
$stmt->bindParam(':username', $username);
$stmt->bindParam(':pass', $password);

$stmt->execute();

$rowCount = $stmt->fetchColumn();

if($rowCount > 0)
{
    echo "Valid User";
}
else{
   echo "Invalid User";
}



?>