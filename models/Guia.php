<?php

	/**
	* @file Guia.php
	* @brief Implementación de las funciones para el manejo la tabla Guias.
	*/

	include_once 'DBAbstract.php';

	/**
	 * 
	 * Clase para trabajar con la tabla de Guias
	 * 
	 * */
	class Guia extends DBAbstract{

		/**
		 * 
		 * Crea el objeto y crea de forma automática los atributos
		 * basandose en las columnas de la tabla que representa
		 * 
		 * */
		function __construct($carnet, $dni){
			parent::__construct();

			$sql = "DESCRIBE users;";

			$result = $this->query($sql);

			foreach ($result as $key => $value) {

				/**< Pasa el nombre del campo a una variable */
				$variable = $value["Field"];
				
				/**< Pasa los nombres de los campos a un vector*/
				$this->attributes[] = $variable;

				/**< pasa como un nuevo atributo el nombre de un campo */
				$this->$variable="";
			}

			$this->carnet = $carnet;
			$this->dni = $dni;

		}

		/**
		 * 
		 * Busca al guia por su numero de carnet
		 * @return array|bool arreglo con los datos del usuario|si no lo encontro false
		 * 
		 * */
		function getByNroCarnet(){

			$result = $this->query("SELECT * FROM guias WHERE carnet = '".$this->carnet."'");

			if(count($result)==0){
				return false;
			}

			return $result;
		}

		/**
		 * 
		 * Cierra la sesión del guia
		 * 
		 * */
		function logout(){
			session_unset();
			session_destroy();
		}

		/**
		 * 
		 * valida el usuario y la contraseña
		 * @return array arreglo con el resultado del intento de login
		 * 
		 * */
		function login(){

			$vector_error = ["error" => "", "errno" => 0];

			// se agrego las comillas alrededor de email para que no tire error de mysql
			$ssql = "SELECT guias WHERE carnet = '".$this->carnet."'";

			$result = $this->query($ssql);

			// no se encontro el numero de carnet
			if(count($result)==0){
				$vector_error["error"] = "No existe el numero de carnet";
				$vector_error["errno"] = 404;

				return $vector_error;
			}

			$result = $result[0];

			// El DNI no es correcto
			if($result["dni"]!=md5($this->dni)){
				$vector_error["error"] = "El DNI no es valido";
				$vector_error["errno"] = 405;

				return $vector_error;
			}

			// se agrega al arreglo los mensajes de error
			$result = array_merge($vector_error, $result);

			// aqui deberiamos colocar la autocarga de los atributos de ese usuarios
			//===================

			foreach ($this->attributes as $key => $attribute) {
				$this->$attribute = $result[$attribute];
			}


			return $result;
			
		}
	}

	/**
	 * 
	 * Clase para trabajar con muchos usuarios
	 * 
	 * */
	class Guias extends DBAbstract{

		/**
		 * 
		 * Constructor de la clase
		 * 
		 * */
		function __construct(){

			parent::__construct();

		}

		/**
		 * 
		 * retorna la cantidad de guias en la tabla de guias
		 * @return int cantidad de guias en la tabla de guias
		 * 
		 * */
		function getCant(){

			return count($this->query("SELECT * FROM guias"));
		}

	}


 ?>