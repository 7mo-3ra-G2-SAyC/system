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

        $ = new User();

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

    case 'cronograma':

        include_once 'Cronograma.php';
        $cronograma = new Cronograma;

        switch($_GET['option']){

            case 'getFullCronograma':
                $response = $cronograma->getFullCronograma();
                break;
            
            case 'getByActivityId':
                $response = $cronograma->getByActivityId($_GET['id_actividad']);
                break;
            case 'getActivitiesByDay':
                $response = $cronograma->getActivitiesByDay($_GET['day']);
                break;
            case 'getActivitiesForThisClassroom':
                $response = $cronograma->getActivitiesForThisClassroom($_GET['classroom']);
                break;


        }

        if(isset($response)){ $cronograma->printJSON($response); }

        break;

    case 'courses':
        include 'courses.php';
        $course = new Course();
        switch ($_GET['option']) {
            case 'getCourseScheduleByDay':
                $response = $course->getCourseScheduleByDay();
                break;
            
            default:
                // code...
                break;
        }
        if(isset($response)){
            $course->printJSON($response);
        }
    break;
}