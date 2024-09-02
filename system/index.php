<?php
    
   
    
    // incluye el motor de plantillas
    include_once 'lib/tplengine/TPLEngine.php';

    // inicia o continua la sesion
    session_start();

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

    //contralodores permitidos a los no logueados
    $connected_anonymous=['landing','login'];
    
    // controladores permitidos del Guia
    $connected_guide=['panel','logout'];

    // si inicio sesion
    if (!empty($_SESSION['sayc'])) {
        // carga los controladores no permitidos
        $controller_test=$connected_anonymous;

        // seccion por defecto
        $defualt_section="panel";
    }
    // si no inicio sesion
    else{
        // carga los controladores no permitidos
        $controller_test=$connected_guide;

        // seccion por defecto 
        $defualt_section="landing";
    }

    // analiza los controladores permitidos
    foreach ($controller_test as $key => $value) {
        // si coincide con un controlador que no deberia utilizar
        if ($value == $section) {
            $section = $defualt_section;
            break;
        }
    }

    // Includes section's controller
    include 'controllers/'.$section.'Controller.php';
?>