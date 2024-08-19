<?php 

	// inicializa el obejto y carga la vista
	$tpl = new TPLEngine('login');

	// variables a reemplazar en la vista
	$vars=[
		"MSG_ERROR" => '',
	];

	// si presiono el btn 'Ingresar'
	if (isset($_POST['btn-login'])) {
		
		// inicializo el guia con el carnet y dni
		$guide = new Guia($_POST['ing_carnet'], $_POST['ing_dni']);

		// verifica el logueo
		$response = $guide->login();

		// si el logueo es valido
		if (empty($response['error'])) {

			// el objeto se guarda en un variable de sesion
			$_SESSION['sayc']['guia'] = $guide;

			// lo redirigue al panel
			header("Location:panel");
		}

		// carga el mensaje de error 
		$vars['MSG_ERROR']="carnet / dni incorrectos";
	}

	// reemplaza las variables en la vista
	$tpl->setVars($vars);

	// imprime la vista
	$tpl->print();

 ?>