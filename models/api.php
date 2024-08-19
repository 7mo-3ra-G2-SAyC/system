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

        include_once 'user.php';

        $user = new User();

        session_start();
        
        //option es la funcionalidad que queremos utilizar de ese objeto
        switch($_GET['option']){
            
            case 'valid_user':
                //procesar
            break;
        }

        if(isset($response)){
            $user->printJSON($response);
        }
    break;
}