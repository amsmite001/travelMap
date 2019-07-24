<?php
$host = "localhost";
$dbusername = "root";
$dbpassword = "kcp3pp3r";
$dbname = "trip";
$conn = mysqli_connect($host,$dbusername,$dbpassword);
if (!$conn) {
   echo "no";
    echo('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
}
if (!mysqli_select_db($conn, 'travelTracker')) {
    echo "issue with db";
}
else {
    $start = $_POST['startDate_InputFields'];
    $end = $_POST['endDate_InputFields'];
    $dest = $_POST['destinations'];
    $status = 'W';
    echo "wth";
    
    $sql = "INSERT INTO trip (startDate, endDate, destination, stat) VALUES ('$start', '$end', '$dest', 'A')";
    if (mysqli_query($conn,$sql)) {
        echo "New Record is inserted.";
    }
    else {
        echo "error: ";
    }
}

mysql_close();
?>