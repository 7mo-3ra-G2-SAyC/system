<?php
    include_once 'DBAbstract.php';

    /**
     * 
     * Class to consult information about courses
     * 
     */
    class Course extends DBAbstract{
        
        // execute connect parent's method
        function __construct(){
            parent::__construct();
        }

        /**
         * encode a string to json format
         * @param $json strin to format
         */

        function printJSON($json){
            echo json_encode($json);
        }
        /**
         * function to get the schedule of a course for a specific day
         * @param $id_course id of the course to filter
         * @param $day day to get the schedule
         * @return an array with information about the schedule
         * --schedule = cronograma
         */
        function getCourseScheduleByDay($id_course,$day){
            $result = $this->query("SELECT actividades.descripcion, actividades_categorias.nombre AS 'categoria', CONVERT(cronograma_cursos.fecha_hora, time) AS 'horario' FROM cronograma_cursos INNER JOIN actividades ON cronograma_cursos.id_actividad = actividades.id_actividad INNER JOIN actividades_categorias ON actividades_categorias.id_categoria = actividades.id_categoria WHERE cronograma_cursos.id_curso = '$id_course' AND CONVERT(cronograma_cursos.fecha_hora, date) = '$day'");
            return $result;
        }