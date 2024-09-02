<?php 

	// inicializa el obejto y carga la vista
	$tpl = new TPLEngine('login');

	$head = new TPLEngine("header");
	// carga la vista
    $vars['HEADER'] = $head->getVista();
   	
    // reemplaza variables en la vista
    $tpl->setVars($vars);
	// imprime la vista
	$tpl->print();

 ?>