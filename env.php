<?php

	/**
	 * 
	 * Application mode change logic.
	 * 
	 */

	define("DEBUG", 0);
	define("RELEASE", 1);

	/* CHANGE THIS TO RELEASE MODE WHEN THE APPLICATION IS READY TO BE USED */
	define("MODE", DEBUG);

	/* Environment variables for application control */
	$_ENV["PROJECT_NAME"] = "SAyC";
	$_ENV["PROJECT_URL"] = "https://sayc-76fee51f670d.herokuapp.com";
	$_ENV["PROJECT_DESCRIPTION"] = "Sistema para ver los cronogramas de la SAyC de una forma más inteligente";
	$_ENV["PROJECT_AUTHOR"] = "SÉPTIMO TERCERA 2024";
	$_ENV["PROJECT_AUTHOR_CONTACT"] = "";
	$_ENV["PROJECT_KEYWORDS"] = "sayc cronograma mapa colegio escuela comunidad educativa roberto arlt semana arte ciencia";


	$_ENV["PROJECT_MODE"] = MODE ? "" : "?cache=".date('YmdHis').mt_rand(0, 1000);


	/* Environment variables for database connection */
	$_ENV["HOST"] = "4-9.h.filess.io";
	$_ENV["USER"] = "sayc_indicateup";
	$_ENV["PASS"] = "c02f06672bec69ad391f682bf321b7bb7adbe16a";
	$_ENV["DB"] = "sayc_indicateup";
	$_ENV["PORT"] = 3307;

?>