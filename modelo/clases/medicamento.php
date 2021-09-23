<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class medicamento extends Conexion{
    //creamos atributos
    public $nombre_Medicamento;
    public $descripcion_Medicamento;
    public $estado_Medicamento="1";
    //creamos constructores
    public function __construct($nombre="",$medicamento="",$estado_Medicamento=""){
        $this->nombre_Medicamento=$nombre;
        $this->descripcion_Medicamento=$medicamento;
        $this->estado_Medicamento=$estado_Medicamento;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear($medicamento_data=array())
    {
        foreach($medicamento_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        $this->query="INSERT into inline.medicamento(nombre_Medicamento,descripcion_Medicamento,estado_Medicamento) 
        values('$nombre_Medicamento','$descripcion_Medicamento','1')";
        $this->set_query();
    }
    public function leer($medicamentoID='')
    {
        $this->query=($medicamentoID!="")
        ?"SELECT * FROM inline.medicamento where nombre_Medicamento like '$medicamentoID%'"
        :"SELECT * FROM inline.medicamento where estado_Medicamento=1";
        $this->get_query();
       
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            array_push($data,$value);
        }
        return $data;
        
    }
    public function leerDelId($medicamentoID='')
    {
        $this->query=($medicamentoID!="")
        ?"SELECT * FROM inline.medicamento where id_Medicamento='$medicamentoID'"
        :"";
        $this->get_query();
       
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            array_push($data,$value);
        }
        return $data;
        
    }
    public function actualizar($medicamento_data=array())
    {
       foreach($medicamento_data as $key => $value)
       {
           $$key=$value;
       }
   
     $this->query=($medicamento_data!="")
     ?"UPDATE inline.medicamento set nombre_Medicamento='$nombre_Medicamento',descripcion_Medicamento='$descripcion_Medicamento' where id_Medicamento=$id_Medicamento "
     :"";
     $this->set_query();
       
    }
    public function eliminar($medicamentoId="")
    {
        $this->query=($medicamentoId!="")
        ?"UPDATE inline.medicamento set estado_Medicamento=0 where id_Medicamento=$medicamentoId "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>