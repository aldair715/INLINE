<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class especialidad extends Conexion{
    //creamos atributos
    public $nombre_Especialidad;
    public $estado_Especialidad="1";
    //creamos constructores
    public function __construct($nombre="",$estado=""){
        $this->nombre_especialidad=$nombre;
        $this->estado_especialidad=$estado;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear($especialidad_data=array())
    {
        foreach($especialidad_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        $this->query="INSERT into inline.especialidad(nombre_especialidad,estado_especialidad) 
        values('$nombre_especialidad','1')";
        $this->set_query();
    }
    public function leer($especialidadID='')
    {
        $this->query=($especialidadID!="")
        ?"SELECT id_Especialidad,nombre_Especialidad FROM inline.especialidad where nombre_Especialidad like '$especialidadID%'"
        :"SELECT id_Especialidad,nombre_Especialidad FROM inline.especialidad where estado_Especialidad=1";
        $this->get_query();
       
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            array_push($data,$value);
        }
        return $data;
        
    }
    public function leerDelId($especialidadID='')
    {
        $this->query=($especialidadID!="")
        ?"SELECT * FROM inline.especialidad where id_Especialidad='$especialidadID'"
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
    public function actualizar($especialidad_data=array())
    {
       foreach($especialidad_data as $key => $value)
       {
           $$key=$value;
       }
   
     $this->query=($especialidad_data!="")
     ?"UPDATE inline.Especialidad set nombre_Especialidad='$nombre_especialidad' where id_especialidad=$id_especialidad "
     :"";
     $this->set_query();
       
    }
    public function eliminar($especialidadId="")
    {
        $this->query=($especialidadId!="")
        ?"UPDATE inline.Especialidad set estado_Especialidad='0' where id_especialidad=$especialidadId "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>