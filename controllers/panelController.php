<?php 
	// pasa el objeto de la sesion a una variable
	$guide = $_SESSION['sayc']['guia'];

	// inicializoael objeto y carga la vista
	$tpl = new TPLEngine('panel');

	// variables a reemplazar en la vista
	$vars=[
		"NOMBRE_GUIA" => $guide->nombre,
	];

	// reemplaza las variables en la vista
	$tpl->setVars($vars);

	// imprime la vista
	$tpl->print();
 ?>