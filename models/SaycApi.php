<?php

    header('Access-Control-Allow-Origin: *');
    date_default_timezone_set("America/Argentina/Buenos_Aires");

    switch($_GET['agent']){

        case 'cronograma':

            include_once 'Cronograma.php';
            $cronograma = new Cronograma;

            switch($_GET['option']){

                case 'getFullCronograma':
                    $response = $cronograma->getFullCronograma();
                    break;
                
                case 'getByActivityId':
                    $response = $cronograma->getByActivityId($_GET['id_actividad']);

            }

            if(isset($response)){ $cronograma->printJSON($response); }

            break;

    }

?>