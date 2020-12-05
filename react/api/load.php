<?php
// Allow Cross Site Request (Be Careful To Not Open This to Cross Site Request Forgery Attack)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

// Take the database file in while (because we have no filtration here)
$database = file_get_contents('todo.json');
// Echo the JSON encoded database
echo $database;
?>