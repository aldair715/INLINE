<?php
//clase abstracta que nos permitira conectarnos a la base de datos
abstract class Conexion{
    //definimos atributos de la conexion
    private static $db_host="localhost";
    private static $db_user="root";
    private static $db_password="";
    protected $db_name="inline";
    private static $db_charset="utf8";
    private $connection;
    protected $query;
    protected $filas=array();
    //Métodos de la clase abstracta
    //Métodos Abstractos para el CRUD
    abstract protected function crear();
    abstract protected function leer();
    abstract protected function actualizar();
    abstract protected function eliminar();
    //Método privado para conectar a la base de datos
    private function db_abrir()
    {
        $this->connection=new mysqli(
            self::$db_host,
            self::$db_user,
            self::$db_password,
            $this->db_name
        );
        $this->connection->set_charset(self::$db_charset);
    }
    //Método para desconectarse de la base de datos
    private function db_cerrar()
    {
        $this->connection->close();
    }
    //Método para EJECUTAR las operaciones de Insertar, Eliminar, Actualizar
    protected function set_query()
    {
        $this->db_abrir();
        $this->connection->query($this->query);
        $this->db_cerrar();
    }
    //Método para ejecutar sentencias sql que devuelva resultados 
    protected function get_query()
    {
        $this->db_abrir();
        $resultado=$this->connection->query($this->query);
        while( $this->filas[]=$resultado->fetch_assoc() );
        $resultado->close();
        $this->db_close();  
        return $this->filas;
    }
}