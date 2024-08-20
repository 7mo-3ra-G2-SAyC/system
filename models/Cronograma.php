<?php

    include_once 'DBAbstract.php';

    /**
     * 
     * Clase para consultar la información del cronograma
     * 
     */
    class Cronograma extends DBAbstract{

        function __construct(){
            parent::__construct();

            $ssql = 'DESCRIBE cronograma';

            $result = $this->query($ssql);

            foreach($result as $key => $value){

                /**< Pasa el nombre del campo a una variable */
				$field = $value["Field"];
				
				/**< Pasa los nombres de los campos a un vector*/
				$this->attributes[] = $field;

				/**< pasa como un nuevo atributo el nombre de un campo */
				$this->$field="";

            }

        }

        function printJSON($json){
            echo json_encode($json);
        }

        function getAttributes(){
            return $this->attributes;
        }

        function getFullCronograma(){

            $ssql = "SELECT actividades.nombre, cronograma.turno, cronograma.fecha, aulas.nombre  FROM cronograma JOIN actividades ON cronograma.id_actividad = actividades.id_actividad JOIN aulas ON cronograma.id_aula = aulas.id_aula";
            $result = $this->query($ssql);

            if(count($result)==0){ return false; }

			return $result;

        }

        function getByActivityId($id){

            $ssql = "SELECT * FROM cronograma WHERE id_actividad = $id";
            $result = $this->query($ssql);

            if(count($result)==0){ return false; }

			return $result;
        }

        /**
         * Function to get all activities of the SAyc/expo of a specific day
         * @param $day day to filter
         * @return array associative array with activities of this day
         */
        function getActivitiesByDay($day){
            // future stored procedure
            $result = $this->query("SELECT actividades.nombre AS activity_name, actividades_categorias.nombre AS activity_category, turnos.inicio, turnos.fin, aulas.nombre AS 'aula', aulas.capacidad, aula_categorias.descripcion AS ubicacion FROM actividades INNER JOIN actividades_categorias ON actividades.id_categoria = actividades_categorias.id_categoria INNER JOIN cronograma ON actividades.id_actividad = cronograma.id_actividad INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria = aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno WHERE cronograma.fecha = '$day' ");
            return $result;
        }

        /**
         * function to get the activities that would be done in a specific classroom
         * @param $id_class id of te class to filter
         * @return an associative array with information about the activities
         */

        function getActivitiesForThisClassroom($id_class){
             $result = $this->query("SELECT actividades.nombre AS 'activity_name', actividades_categorias.nombre AS 'activity_category', turnos.inicio, turnos.fin, aulas.nombre, aulas.capacidad, aula_categorias.descripcion AS 'ubicacion' FROM actividades INNER JOIN actividades_categorias ON actividades.id_categoria = actividades_categorias.id_categoria INNER JOIN cronograma ON actividades.id_actividad = cronograma.id_actividad INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria = aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno WHERE cronograma.id_aula = '$id_class' ");
            return $result;
        }
    }

?>