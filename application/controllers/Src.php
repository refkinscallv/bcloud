<?php

    class Src extends CI_Controller {

        public function __construct(){
            header('Access-Control-Allow-Origin: *');
            $this->referer      = (isset($_SERVER["HTTP_REFERER"]) ? $_SERVER["HTTP_REFERER"] : false);
            $this->base_url     = base_url();
            $this->http_code    = $this->http_code_response($code);
        }

        public function index(){
            show_404();
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