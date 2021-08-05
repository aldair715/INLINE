<?php
class DB {
    private $dbHost     = "127.0.0.1:33065";
    private $dbUsername = "root";
    private $dbPassword = "";
    private $dbName     = "zoom_meet";
  
    public function __construct(){
        if(!isset($this->db)){
            // Connect to the database
            $conn = new mysqli($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
            if($conn->connect_error){
                die("Failed to connect with MySQL: " . $conn->connect_error);
            }else{
                $this->db = $conn;
            }
        }
    }
  
    public function is_table_empty() {
        $result = $this->db->query("SELECT max(id_token) from token");
        if($result->num_rows) {
            return false;
        }
        return true;
    }
  
    public function get_access_token() {
        
        $sql = $this->db->query("SELECT max(id_token) from token");
        $result = $sql->fetch_assoc();
        return json_decode($result['token']);
    }
  
    public function get_refersh_token() {
        $result = $this->get_access_token();
        return $result->refresh_token;
    }
  
    public function update_access_token($token) {
        if($this->is_table_empty()) {
            $this->db->query("INSERT INTO token(token) VALUES('$token')");
        } else {
            $this->db->query("UPDATE token SET token = '$token' WHERE id = (SELECT id FROM token)");
        }
    }
}