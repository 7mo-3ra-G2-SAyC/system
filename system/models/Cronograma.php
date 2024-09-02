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
        function getAttributes(){
            return $this->attributes;
        }

        function getFullCronograma(){

            $ssql = "SELECT actividades.descripcion AS 'actividad', turnos.descripcion AS 'turno', actividades_categorias.nombre AS 'categoria', aulas.nombre AS 'aula', aula_categorias.descripcion AS 'ubicacion' FROM actividades INNER JOIN cronograma ON cronograma.id_actividad = actividades.id_actividad INNER JOIN actividades_categorias ON actividades_categorias.id_categoria = actividades.id_categoria INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria=aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno";
            $result = $this->query($ssql);

            if(count($result)==0){ return false; }

			return $result;

        }

        function getByActivityId($params){
            $id = $params['id'];
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
        function getActivitiesByDay($params){
            $day = $params['day'];
            $result = $this->query("SELECT actividades.descripcion AS 'actividad', turnos.descripcion AS 'turno', actividades_categorias.nombre AS 'categoria', aulas.nombre AS 'aula', aula_categorias.descripcion AS 'ubicacion' FROM actividades INNER JOIN cronograma ON cronograma.id_actividad = actividades.id_actividad INNER JOIN actividades_categorias ON actividades_categorias.id_categoria = actividades.id_categoria INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria=aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno WHERE cronograma.fecha = '$day'");
            return $result;
        }

        function getEstateOfCoursesByCategory($params){
            $category = $params['category'];
            $day = $params['day'];
            $result = $this->query("SELECT actividades.duracion, actividades.descanso, cronograma.id_aula FROM cronograma INNER JOIN actividades ON cronograma.id_actividad = actividades.id_actividad INNER JOIN aula_categorias ON aula_categorias.id_aula = cronograma.id_aula WHERE cronograma.fecha = '$day' AND aula_categorias.id_categoria = '$category'");
            return $result;
        }
        /**
         * function to get the activities that would be done in a specific classroom
         * @param $id_class id of te class to filter
         * @return an associative array with information about the activities
         */

        function getActivitiesForThisClassroom($params){
            $id_class = $params['id_class'];
             $result = $this->query("SELECT actividades.nombre AS 'activity_name', actividades_categorias.nombre AS 'activity_category', turnos.inicio, turnos.fin, aulas.nombre, aulas.capacidad, aula_categorias.descripcion AS 'ubicacion' FROM actividades INNER JOIN actividades_categorias ON actividades.id_categoria = actividades_categorias.id_categoria INNER JOIN cronograma ON actividades.id_actividad = cronograma.id_actividad INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria = aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno WHERE cronograma.id_aula = '$id_class' ");
            return $result;
        }
    }

?>