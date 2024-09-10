<?php

    /**
     * 
     * Template Engine for PHP
     * 
     */
    class TPLEngine {

        private $buffer; // View's content
        public $vista; // View's name

        /**
         * 
         * Class Constructor
         * @param string $view View's name
         * 
         */
        function __construct($view){

            $this->view = $view;

            // If the file does not exist 
            if(!file_exists("views/".$view."View.html")){

                // Throws error message and terminates the execution.
				echo "<b>$view</b> view was not found.";
				exit();
			}

            // Loads view's content into buffer
            $this->buffer = file_get_contents("views/".$view."View.html");

            // Loads external views
            $this->loadExtern();

        }

        /**
         * 
         * Replaces buffer's variables
         * @param array $vars Associative array, each key is the variable name.
         * 
         */
        function setVars($vars){

            foreach ($vars as $needle => $content) {

                // If the variable is valid
                if($this->testVar($needle)){
                    // Replaces the variable inside the buffer with $content
                    $this->buffer = str_replace("{{".$needle."}}", $content, $this->buffer);
                }
                else{
                    // Throws error message and terminates the execution.
                    echo "<b>$needle</b> variable was not found.";
                    exit();
                }

            }

        }

        /**
         * 
         * Checks if a variable exists within the buffer
         * @param string $name Variable's name
         * @return bool Variable exists | Does not exists
         * 
         */
        function testVar($name){

            return strpos($this->buffer, $name);

        }
        /**
         * 
         * Retorna el valor de vista
         * @return string valor de vista
         * 
         * */
        function getVista(){
            return $this->buffer;
        }



        /**
         * 
         * 
         * 
         */
        private function loadExtern(){

            // REGEX Pattern
            $search_pattern = "/@extern\(['\"]([a-zA-Z0-9_]+)['\"]\)/";

            // Seeks all pattern coincidences inside the buffer.
            preg_match_all($search_pattern, $this->buffer, $ocurrences_list);

            foreach ($ocurrences_list[1] as $key => $file_extern) {
                
                // @extern to be seeked and then replaced
                $needle_extern = $ocurrences_list[0][$key];

                // If the external file does not exist
                if(!file_exists("views/$file_extern.html")){
                    echo "No se encontró el archivo externo <b>$file_extern</b>";
                    exit();
                }

                // Gets the external file content
                $buffer_extern = file_get_contents("views/$file_extern.html");

                // Replaces the external call inside the buffer with the extern file content
                $this->buffer = str_replace($needle_extern, $buffer_extern, $this->buffer);

            }

        }



        /**
         * 
         * Prints buffer's content on the screen
         * 
         */
        function print(){
            echo $this->buffer;
        }

    }

?>