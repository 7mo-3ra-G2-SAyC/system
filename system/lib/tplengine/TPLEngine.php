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
         * Prints buffer's content on the screen
         * 
         */
        function print(){
            echo $this->buffer;
        }

    }

?>