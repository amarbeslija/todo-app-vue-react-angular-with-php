<?php
// Allow Cross Site Request (Be Careful To Not Open This to Cross Site Request Forgery Attack)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

// Open $_POST to take parameters (with checking is paramter sent)
if(isset($_POST['items']) && !empty($_POST['items'])){
    // Take the items
    $items = $_POST['items'];
    // Put items inside the file
    if(file_put_contents('todo.json', $items)){
        // If write is successful then return that file is saved (items are saved)
        echo "Saved";
    }
}
?>