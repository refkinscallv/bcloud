<?php

    class Src extends CI_Controller {

        public function __construct(){
            parent::__construct();

            header("Access-Control-Allow-Origin: *");

            $this->load->model([
                "Src_model" => "src"
            ]);
        }

        public function index(){
            show_404();
        }

        /**
         * Versioning
         */
        public function js($version = "v1", $token = false){

            if(isset($_SERVER["HTTP_REFERER"])){
                if($token){
                    $referer = parse_url($_SERVER["HTTP_REFERER"], PHP_URL_HOST);
                    $check = $this->src->check_users($referer, $token);

                    if($check){
                        $status = true;
                        $source = "const bcURL  = '". base_url() ."';";
                        $source .= file_get_contents("/home/cgaa9149/bcloud/src/". $version ."/bcloud.js");
                        $source .= file_get_contents("/home/cgaa9149/bcloud/src/". $version ."/bcloud-front.js");
                    } else {
                        http_response_code(403);
                        $status = false;
                        $source = "alert('Origin of request is unregistered');";
                    }
                } else {
                    http_response_code(403);
                    $status = false;
                    $source = "alert('Forbidden Access');";
                }
            } else {
                http_response_code(403);
                $status = false;
                $source = "alert('Origin of request is unknown');";
            }
            
            header("Content-Type: text/javascript");

            echo $source;
        }

        public function css($version = "v1", $token = false){

            if(isset($_SERVER["HTTP_REFERER"])){
                if($token){
                    $referer = parse_url($_SERVER["HTTP_REFERER"], PHP_URL_HOST);
                    $check = $this->src->check_users($referer, $token);

                    if($check){
                        $status = true;
                        $source .= file_get_contents("/home/cgaa9149/bcloud/src/". $version ."/bcloud.css");
                    } else {
                        http_response_code(403);
                        $status = false;
                        $source = "alert('Origin of request is unregistered');";
                    }
                } else {
                    http_response_code(403);
                    $status = false;
                    $source = "alert('Forbidden Access');";
                }
            } else {
                http_response_code(403);
                $status = false;
                $source = "alert('Origin of request is unknown');";
            }
            
            header("Content-Type: text/css");
            
            echo $source;
        }

    }
