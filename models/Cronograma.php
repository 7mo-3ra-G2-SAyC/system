<?php

    include_once 'DBAbstract.php';

    /**
     * 
     * Clase to consult information about the schedule.
     * 
     */
    class Cronograma extends DBAbstract{

        function __construct(){
            parent::__construct();

            $ssql = 'DESCRIBE cronograma';

            $result = $this->query($ssql);

            foreach($result as $key => $value){

                // Stores the field name into a variable.
				$field = $value["Field"];
				
                // Stores the fields names into an array.
				$this->attributes[] = $field;

				/**< pasa como un nuevo atributo el nombre de un campo */
                // Stores as a new attribute a field name.
				$this->$field="";

            }

        }
        function getAttributes(){
            return $this->attributes;
        }



        /**
         * Gets the full schedule table and replaces the external ID's with the external field content.
         * @return $result Query result.
         * 
         */
        function getFullSchedule(){
            $cursos=$this->query("SELECT * FROM cursos");

            $talleristas=$this->query("SELECT * FROM talleristas");

            $sql="SELECT
    cronograma.fecha,
    actividades.presentacion AS 'presentador',
    actividades.nombre AS 'actividad',
    turnos.descripcion AS 'turno',
    ac_cat.nombre,
    aulas.nombre AS 'aula',
    aula_categorias.descripcion AS 'ubicacion'
FROM
    actividades
INNER JOIN cronograma ON cronograma.id_actividad = actividades.id_actividad
INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula
INNER JOIN aula_categorias ON aulas.id_categoria = aula_categorias.id_categoria
INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno
INNER JOIN actividades_categorias AS ac_cat
ON
    actividades.id_categoria = ac_cat.id_categoria;";
        
            $cronograma = $this->query($sql);

            return $cronograma;

            $c=0;
            foreach ($cronograma as $item) {
                if($item['id_curso']){
                    foreach ($cursos as $cur) {
                        if($cur['id_curso'] == $item['id_curso']){
                            $result[$c]=[
                                "fecha"=>$item['fecha'],
                                "presentador" => $cur['curso']." ".$cur['division'],
                                "actividad" => $item['actividad'],
                                "turno" => $item['turno'],
                                "categoria" => $item['nombre'],
                                "aula" => $item['aula'],
                                "piso" => $item['ubicacion'],
                            ];
                        }
                    }
                }
                elseif ($item['id_tallerista']) {
                    foreach ($talleristas as $tal) {
                        if($tal['id_tallerista'] == $item['id_tallerista']){
                            $result[$c]=[
                                "fecha"=>$item['fecha'],
                                "presentador" => $tal['nombre']." ".$tal['apellido'],
                                "actividad" => $item['actividad'],
                                "turno" => $item['turno'],
                                "categoria" => $item['nombre'],
                                "aula" => $item['aula'],
                                "piso" => $item['ubicacion'],
                            ];
                        }
                    }
                }

                $c++;
            }

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
            $result = $this->query("SELECT actividades.descripcion AS 'actividad', actividades.duracion, actividades.descanso, turnos.descripcion AS 'turno', actividades_categorias.nombre AS 'categoria', aulas.nombre AS 'aula', aula_categorias.descripcion AS 'ubicacion' FROM actividades INNER JOIN cronograma ON cronograma.id_actividad = actividades.id_actividad INNER JOIN actividades_categorias ON actividades_categorias.id_categoria = actividades.id_categoria INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria=aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno WHERE cronograma.fecha = '$day'");
            return $result;
        }

        /**
         * Function to get all activities of the SAyc/expo of a specific day and specific floor
         * @param $day day to filter
         * @return array associative array with activities of this day and floor
         */
        function getCronogramaByCategory($params){  

            // si los parametros no fueron declarados
            if (!isset($params['category'])) {
                return [ 
                    'errno' => 400 , 
                    'error' => "Falta definir la variable category"
                ];
            }

            if($params['category']==''){
                return [ 
                    'errno' => 401 , 
                    'error' => "Falta especificar la categoria"
                ];
            }

            $category = $params['category'];
            $day = !isset($params['day'])? date("Y-m-d") : $params['day'];

            $sql="SELECT actividades.nombre as actividad, actividades.descripcion, actividades_categorias.nombre as categoria, actividades.duracion, actividades.descanso, cronograma.id_aula, aulas.nombre as aula, aula_categorias.descripcion as piso FROM cronograma INNER JOIN actividades ON cronograma.id_actividad = actividades.id_actividad INNER JOIN actividades_categorias ON actividades.id_categoria = actividades_categorias.id_categoria INNER JOIN aulas ON aulas.id_aula = cronograma.id_aula INNER JOIN aula_categorias ON aulas.id_categoria = aula_categorias.id_categoria WHERE cronograma.fecha = '$day' AND aula_categorias.id_categoria = '$category'";

            $result = $this->query($sql);

            return $result;
        }
        /**
         * function to get the activities that would be done in a specific classroom
         * @param $id_class id of te class to filter
         * @return an associative array with information about the activities
         */

        function getActivitiesForThisClassroom($params){
            $id_class = $params['id_class'];
             $result = $this->query("SELECT actividades.duracion, actividades.descanso, actividades.nombre AS 'activity_name', actividades_categorias.nombre AS 'activity_category', turnos.inicio, turnos.fin, aulas.nombre, aulas.capacidad, aula_categorias.descripcion AS 'ubicacion' FROM actividades INNER JOIN actividades_categorias ON actividades.id_categoria = actividades_categorias.id_categoria INNER JOIN cronograma ON actividades.id_actividad = cronograma.id_actividad INNER JOIN aulas ON cronograma.id_aula = aulas.id_aula INNER JOIN aula_categorias ON aulas.id_categoria = aula_categorias.id_categoria INNER JOIN turnos ON cronograma.id_turno = turnos.id_turno WHERE cronograma.id_aula = '$id_class' ");
            return $result;
        }
    }

?>