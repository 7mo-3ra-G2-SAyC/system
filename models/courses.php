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
         * function to get the schedule of a course for a specific day
         * @param $id_course id of the course to filter
         * @param $day day to get the schedule
         * @return an array with information about the schedule
         * --schedule = cronograma
         */
        function getCourseScheduleByDay($params){
            $id_course = $params['id_course'];
            $day = $params['day'];
            $result = $this->query("SELECT actividades.descripcion AS 'actividad', actividades_categorias.nombre AS 'categoria', CONVERT(cronograma_cursos.fecha_hora, time) AS 'horario', aulas.nombre AS 'aula', aula_categorias.descripcion AS 'ubicacion' FROM cronograma_cursos INNER JOIN actividades ON cronograma_cursos.id_actividad = actividades.id_actividad INNER JOIN cronograma ON cronograma.id_actividad = actividades.id_actividad INNER JOIN actividades_categorias ON actividades_categorias.id_categoria = actividades.id_categoria INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria=aula_categorias.id_categoria WHERE cronograma_cursos.id_curso = 3 AND CONVERT(cronograma_cursos.fecha_hora, date) = '2024-08-20' GROUP BY cronograma_cursos.fecha_hora");
            return $result;
        }
    }