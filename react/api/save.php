<?php
// Allow Cross Site Request (Be Careful To Not Open This to Cross Site Request Forgery Attack)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

// Open $_POST to take parameters (with checking is paramter sent)
if(isset($_POST['item']) && !empty($_POST['item'])){
    // Take the item
    $item = $_POST['item'];
    // Encode the item from JSON
    $item = json_decode($item, true);
    // Load the database JSON file
    $database = file_get_contents('todo.json');
    // If File is not empty (First time it is empty), then docode loaded JSON file
    if(!empty($database)){
        $temporaryArray = json_decode($database);
    }
    // Add new item to the current database
    $temporaryArray[] = $item;
    // Encode database with added item
    $databaseEncoded = json_encode($temporaryArray);
    // Put the database inside the file
    if(file_put_contents('todo.json', $databaseEncoded)){
        // If write is successful then return that file is saved
        echo "Saved";
    }
}
?>