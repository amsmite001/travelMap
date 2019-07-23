<?php
define('DB_NAME', 'trip');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_HOST', 'localhost');
echo "Test";
$conn = new mysqli ('localhost', 'root', '', 'trip');
if (mysqli_connect_error()) {
    die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
}
else {
    $start = $_POST['startDate_InputField'];
    $end = $_POST['endDate_InputField'];
    $dest = $_POST['destination'];
    $status = $_POST["Not Approved"];
    
    
    $sql = "INSERT INTO trip (sDate, eDate, destination, status) VALUES ('$start', '($end'), '($dest)','($status)'";
    if (!conn->query($sql)) {
        die('Error: ' . mysql_error());
    }
    else {
        echo "New Record is inserted.";
    }
}

mysql_close();
?>