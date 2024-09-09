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
		function __construct(){
			parent::__construct();
		}

		function setAttributes($params){
			$carnet = $params['carnet'];
			$dni = $params['dni'];
			$sql = "DESCRIBE guias;";

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

			// si la sesion esta iniciada
			if (!empty($_SESSION['sayc'])) {
				// carga los atributos con la variable de sesion
				$this->setAttributes($_SESSION['sayc']);
			}

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
		function login($params){
			$this->setAttributes($params);

			$vector_error = ["error" => "", "errno" => 0];

			// verifica si el guia existe en la db
			$result = $this->getByNroCarnet();

			// no se encontro el numero de carnet
			if(!$result){
				$vector_error["error"] = "No existe el numero de carnet";
				$vector_error["errno"] = 404;

				return $vector_error;
			}

			$result = $result[0];

			// El DNI no es correcto
			if($result["dni"]!=$this->dni){
				$vector_error["error"] = "El DNI no es valido";
				$vector_error["errno"] = 405;

				return $vector_error;
			}

			// se agrega al arreglo los mensajes de error
			$result = array_merge($vector_error, $result);

			// aqui deberiamos colocar la autocarga de los atributos de ese usuario
			//===================

			foreach ($this->attributes as $key => $attribute) {
				$this->$attribute = $result[$attribute];
			}

			// guarda los datos del guia logueado
			$_SESSION['sayc']['dni']=$this->dni;
			$_SESSION['sayc']['carnet']=$this->carnet;
			
			return $result;
		}
	}

	/**
	 * 
	 * Clase para trabajar con muchos usuarios
	 * 
	 * */
	// class Guias extends DBAbstract{

	// 	/**
	// 	 * 
	// 	 * Constructor de la clase
	// 	 * 
	// 	 * */
	// 	function __construct(){

	// 		parent::__construct();

	// 	}

	// 	/**
	// 	 * 
	// 	 * retorna la cantidad de guias en la tabla de guias
	// 	 * @return int cantidad de guias en la tabla de guias
	// 	 * 
	// 	 * */
	// 	function getCant(){

	// 		return count($this->query("SELECT * FROM guias"));
	// 	}

	// }


 ?>
