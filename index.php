<?php   
    
    // Includes environment variables;
    include_once 'env.php';

    // incluye el motor de plantillas
    include_once 'lib/tplengine/TPLEngine.php';

    // inicia o continua la sesion
    session_start();

    // Default section is landing
    $section = "landing";

    // If slug exists in GET
    if(isset($_GET['slug'])){

        // If slug is not an empty string
        if($_GET['slug'] !== ""){

            // Section is changed to slug's value
            $section = $_GET['slug'];

        }
    }

    // If the file does not exist
    if(!file_exists('controllers/'.$section.'Controller.php')){
        // Section gets changed to error404
        $section = "error404";
    }   

    //contralodores permitidos a los no logueados

    $connected_anonymous = ['landing', 'login'];
    
    // controladores permitidos del Guia
    $connected_guide = ['panel', 'logout', 'cronogramaGuias'];

    // si inicio sesion
    if (!empty($_SESSION['sayc']['user'])) {
        // carga los controladores no permitidos
        $forbidden_sections = $connected_anonymous;

        // seccion por defecto
        $defualt_section = "panel";
    }
    // si no inicio sesion
    else{
        // carga los controladores no permitidos
        $forbidden_sections = $connected_guide;

        // seccion por defecto 
        $defualt_section = "landing";
    }

    // analiza los controladores permitidos
    foreach ($forbidden_sections as $key => $value) {
        // si coincide con un controlador que no deberia utilizar
        if ($value == $section) {
            $section = $defualt_section;
            break;
        }
    }

    // Includes section's controller
    include 'controllers/'.$section.'Controller.php';
?>
