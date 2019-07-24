<?php
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "trip";
$conn = mysqli_connect($host,$dbusername,$dbpassword);
if (!$conn) {
    die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
}
if (!mysqli_select_db($conn, 'travelTracker')) {
    echo "Issue with db";
}
else {
    $start = $_POST['startDate_InputFields'];
    $end = $_POST['endDate_InputFields'];
    $dest = $_POST['destinations'];
    
    $sql = "INSERT INTO trip (startDate, endDate, destination, stat) VALUES ('$start', '$end', '$dest', 'N')";
    if (mysqli_query($conn,$sql)) {
        echo "New Record is inserted.";
    }
    else {
        die('Error: ' . mysql_error());
}

mysql_close();
?>
