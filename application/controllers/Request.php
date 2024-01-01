<?php

    class Request extends CI_Controller {

        public function __construct(){
            parent::__construct();

            header("Access-Control-Allow-Origin: *");
        }

        /**
         * @method GET
         */
        public function get_user_session($token){
            $get_user_session   = $this->db->get_where("users", [
                "token" => $token
            ]);

            if($get_user_session->num_rows() > 0){
                $status = true;
            } else {
                $status = false;
            }

            echo json_encode([
                "status"    => $status
            ], JSON_UNESCAPED_SLASHES);
        }

        /**
         * @method POST
         */

        /**
         * @method PUT
         */

        /**
         * @method DELETE
         */

    }