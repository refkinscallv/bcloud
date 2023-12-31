<?php

    class Src extends CI_Controller {

        public function __construct(){
            header('Access-Control-Allow-Origin: *');
        }

        public function index(){
            show_404();
        }

        public function halo(){
            echo "halo";
        }

        public function http_code_response($code){}

        /**
         * Versioning
         */
        public function v1($token = false){
            if($token){
                //
            } else {
                $this->http_code("403");
            }
        }

    }