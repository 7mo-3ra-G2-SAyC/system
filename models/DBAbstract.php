<?php 

	include_once 'credenciales.php';

	// Anula los errores de mysql
	mysqli_report(MYSQLI_REPORT_OFF);

	/**
	 * 
	 * Clase para heredar la conexión a la base de datos
	 * 
	 * */
	class DBAbstract{

		private static $instance = null;
		public $db;



		/**
		 * 
		 * Constructor de la clase ejecuta el metodo de conexión a la DB
		 * 
		 * */
		function __construct(){

		}



		/**
		 * 
		 * Conecta con la base de datos
		 * 
		 * */
		function connect(){
			// el arroba silencia los errores del objeto
			$this->db = @new mysqli(HOST, USER, PASS, DB,PORT);	

			// control de errores de conexion a la db
			if($this->db->connect_errno){
				echo "Se produjo un error en la conexion: <br>".$this->db->connect_errno;

				exit();
			}
		}



		/**
		 * 
		 * DML -> SELECT
		 * Realiza la consulta a la base de datos
		 * 
		 * */
		function query($sql){

			if(isset($_SESSION["queries"][$sql])){
				return $_SESSION["queries"][$sql];
			}


			$this->connect();

			$response = $this->db->query($sql);


			$_SESSION["queries"][$sql] = $response->fetch_all(MYSQLI_ASSOC);
			
			// control de errores en la query
			if($this->db->errno){
				echo "Ocurrio un error: ".$this->db->error;
				exit();
			}

			$this->disconnect();

			// obtiene la primer palabra de la query
			$dml = strstr($sql, " ", true);

			switch ($dml) {
				case 'SELECT':

				case 'DESCRIBE':

				case 'CALL': // se agrego para que no tire error al loguearse
					return $response->fetch_all(MYSQLI_ASSOC);
					break;
				
				default:
					return true;
					break;
			}

		}



		/**
		 * 
		 * Disconnects the user from the Database
		 * 
		 */
		function disconnect(){

			$this->db->close();

		}

	}


 ?>