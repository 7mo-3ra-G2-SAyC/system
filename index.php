<?php

    include_once 'lib/tplengine/TPLEngine.php';

    // Default section is landing
    $section = "landing";

    // If slug exists in GET
    if(isset($_GET['slug'])){
        // Section is changed to slug's value
        $section = $_GET['slug'];
    }

    // If the file does not exist
    if(!file_exists('controllers/'.$section.'Controller.php')){
        // Section gets changed to error404
        $section = "error404";
    }

    // Includes section's controller
    include 'controllers/'.$section.'Controller.php';

?>