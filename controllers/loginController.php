<?php 

	// inicializa el obejto y carga la vista
	$tpl = new TPLEngine('login');

	// carga la vista del header
	$header = new TPLEngine('header');

	// carga la variables de reempleazo
	$vars=[
		'HEADER' => $header->getVista()
	];

	// reemlpaza las variables de la vista
	$tpl->setVars($vars);
	
	// imprime la vista
	$tpl->print();

 ?>
