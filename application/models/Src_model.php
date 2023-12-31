<?php

    class Src_model extends CI_Model {

        public function check_users($domain = false){
            if($domain){
                $query  = $this->db->get_where("users", [
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