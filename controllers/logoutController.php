<?php 
	
	// pasa el objeto de la sesion a una variable
	$guide = $_SESSION['sayc']['guia'];

	// ejecuto el metodo de delogueo
	$guide->logout();

	// redirigue a landing
	header("Location:./");
 ?>