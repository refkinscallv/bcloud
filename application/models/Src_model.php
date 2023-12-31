<?php

    class Src_model extends CI_Model {

        public function check_users($domain = false, $token){
            if($domain){
                $query  = $this->db->get_where("users", [
                    "token"     => $token,
                    "domain"    => $domain
                ])->num_rows();

                if($query > 0){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        
    }