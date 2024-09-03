<?php 
	include_once 'models/Guia.php';

	// pasa el objeto de la sesion a una variable
	$guide = new Guia();

	// ejecuto el metodo de delogueo
	$guide->logout();

	// redirigue a landing
	header("Location:./");
 ?>