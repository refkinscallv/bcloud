<?php

    class Src extends CI_Controller {

        public function __construct(){
            parent::__construct();
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
        public function v1($token = false){
            header("Access-Control-Allow-Origin: *");
            if(isset($_SERVER["HTTP_REFERER"])){
                if($token){
                    $referer = parse_url($_SERVER["HTTP_REFERER"], PHP_URL_HOST);
                    $check = $this->src->check_users($referer, $token);

                    if($check){
                        $status = true;
                        $source = "const baseUrl = '". base_url() ."'";
                        $source .= file_get_contents(base_url("src/src-v1.js"));
                    } else {
                        http_response_code(403);
                        $status = false;
                        $source = "alert(Origin of request is unregistered)";
                    }
                } else {
                    http_response_code(403);
                    $status = false;
                    $source = "alert(Forbidden Access)";
                }
            } else {
                http_response_code(403);
                $status = false;
                $source = "alert(Origin of request is unknown)";
            }

            header("Content-Type: text/javascript");
            echo $source;
            exit; // Exit to prevent further code execution
        }

    }
