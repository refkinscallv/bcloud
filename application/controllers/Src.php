<?php

    class Src extends CI_Controller {

        public function __construct(){
            parent::__construct();
            header("Access-Control-Allow-Origin: *");
            header("Content-Type: Application/JSON");

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
            if(isset($_SERVER["HTTP_REFERER"])){
                if($token){
                    $referer    = parse_url($_SERVER["HTTP_REFERER"], PHP_URL_HOST);
                    $check      = $this->src->check_users($referer);

                    if($check){
                        $status     = true;
                        $message    = "";
                        $result     = "0";
                    } else {
                        http_response_code(403);
                        $status     = false;
                        $message    = "Origin of request is unregistered";
                    }
                } else {
                    http_response_code(403);
                    $status     = false;
                    $message    = "Forbidden Access";
                }
            } else {
                http_response_code(403);
                $status     = false;
                $message    = "Origin of request is unknown";
            }

            echo json_encode([
                "status"    => $status,
                "message"   => $message,
                "result"    => $result ?? null
            ], JSON_UNESCAPED_SLASHES);
        }

    }