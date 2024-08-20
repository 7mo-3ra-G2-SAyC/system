<?php
header('Access-Control-Allow-Origin: *');
/**
 * Generamos un endpoint (solucion provisoria)
 * primero filtra si usara un objeto de la clase usuario, hospital o paciente
 * luego, pregunta por el metodo de esa clase a ejecutar
 */
date_default_timezone_set("America/Argentina/Buenos_Aires");
//agent seria el objeto que vamos a utilizar
switch($_GET['agent']){
    case 'usuarios':

        // incluye la clase Guia
        include_once 'Guia.php';

        session_start();
        
        //option es la funcionalidad que queremos utilizar de ese objeto
        switch($_GET['option']){
            case 'valid_user':
                // crea el objeto Guia con el carnet y dni
                $user = new Guia($_GET['ing_carnet'],$_GET['ing_dni']);

                // verifica el login
                $response=$user->login();

                // si el logueo es valido
                if(empty($response['error'])){ 
                    // guarda el objeto en una variable de sesion
                    $_SESSION['sayc']['guia']=$user; 
                }
            break;

            case 'getGuide':
                    // paso el objeto de la sesion a un variable
                    $user=$_SESSION['sayc']['guia'];

                    // obtiene la data del guia
                    $data=$user->getByNroCarnet();

                    $response=$data[0];
                break;
            default:
                echo json_encode("option esta vacio");
            break;
        }

        if(isset($response)){
            $user->printJSON($response);
        }
    break;
}