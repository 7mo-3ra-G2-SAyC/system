<?php
	header('Access-Control-Allow-Origin: *');
	// Inicia o continúa la sesión.
	session_start();

	// Cambia el tipo de respuesta a JSON.
	header("Content-Type: application/json");

	// Captura el tipo de método por el cúal se llamó a la api.
	$request_method = $_SERVER["REQUEST_METHOD"];

	// Captura lo que sigue luego de /api/ en la URL.
	$urlResult = str_replace('sayc-76fee51f670d.herokuapp.com/api/', '', $_SERVER["REQUEST_URI"]);

	// Se separa el contenido de $urlResult en 2 posiciones (modelo/método).
	$urlExplode = explode('/', $urlResult);
	// Verifica si el modelo no está especificado.
	if(!isset($urlExplode[0])){
		echo json_encode(["errno" => 405, "error" => "La variable modelo no está definida"]);
		exit();
	}

	// Verifica si la variable modelo está vacía.
	if($urlExplode[0] == ""){
		echo json_encode(["errno" => 405, "error" => "Falta especificar el nombre de un modelo"]);
		exit();
	}

	// Normaliza el valor de la variable modelo (Capitalizado y el resto en minúscula) y lo guarda en una variable.
	$model = ucfirst(strtolower($urlExplode[0]));

	// Verifica si el modelo no existe.
	if(!file_exists("../models/$model.php")){
		echo json_encode(["errno" => 404, "error" => "Modelo no encontrado"]);
		exit();
	}

	// Carga el modelo.
	include_once "../models/$model.php";

	// Instancia la clase del modelo en un objeto.
	$modelObj = new $model();

	// Verifica si no existe el método.
	if(!isset($urlExplode[1])){
		echo json_encode(["errno" => 405, "error" => "La variable metodo no está definida"]);
		exit();
	}

	// Verifica si el método no tiene valor.
	if($urlExplode[1] == ""){
		echo json_encode(["errno" => 405, "error" => "Falta especificar el nombre de un metodo"]);
		exit();
	}

	// Guarda el nombre del método en una variable para que sea más legible.
	$method = $urlExplode[1];

	// Verifica si el método no existe dentro del objeto.
	if(!method_exists($modelObj, $method)){
		echo json_encode(["errno" => 404, "error" => "Metodo no encontrado"]);
		exit();
	}

	// Captura los datos del vector del método de parámetros correspondiente.
	switch ($request_method) {
		case 'GET':
			$params = $_GET;

			break;

		case 'POST':
			$params = $_POST;

			break;

		case 'PUT':
			// Las variables que se envian por método PUT viajan en el body.
			// Captura la petición y se pasan las variables al vector $_PUT.
			parse_str(file_get_contents("php://input"), $_PUT);
			$params = $_PUT;
			
			break;

		case 'DELETE':
			$params = $_GET;
			break;
	}

	// Ejecuta el método con los parámetros correspondientes.
	$response = $modelObj->$method($params);

	// Imprime el resultado final en la página.
	echo json_encode($response);

?>
