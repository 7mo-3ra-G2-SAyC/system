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

    }

?>