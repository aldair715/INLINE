<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class medicamento extends Conexion{
    //creamos atributos
    public $nombre_Medicamento;
    public $descripcion_Medicamento;
    public $estado_Medicamento="1";
    //creamos constructores
    public function __construct($nombre,$descripcion,$estado){
        $this->nombre_Medicamento=$nombre;
        $this->descripcion_Medicamento=$medicamento;
        $this->estado_Medicamento=$estado_Medicamento;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear()
    {
        
    }
    public function leer($medicamentoID='')
    {
        $this->query=($medicamentoID!="")
        ?"SELECT * from medicamento"
        :"SELECT * from medicamento where id_Medicamento=$medicamentoID";
        $this->get_query();
        var_dump($this->filas);
        
    }
    public function actualizar()
    {

    }
    public function eliminar()
    {

    }
    //creamos getter and setter

}