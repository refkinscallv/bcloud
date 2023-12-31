<?php

    class Src extends CI_Controller {

        public function __construct(){
            header('Access-Control-Allow-Origin: *');
            $this->base_url = base_url();
        }

        public function index(){
            show_404();
        }

        public function halo(){
            echo $this->base_url;
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