<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class doctor extends Conexion{
    //creamos atributos
    public $matricula;
    public $nombre_doctor;
    public $paterno_doctor;
    public $materno_doctor;
    public $direccion_doctor;
    public $celular_doctor;
    public $usuario_idusuario=2;
    public $especialidad_id_especialidad;
    public $estado_doctor="1";
    //creamos constructores
    public function __construct($matricula="",$nombre_doctor="",$paterno_doctor="",$materno_doctor="",$direccion_doctor="",$celular_doctor="",$usuario_idusuario=2,$especialidad_id_especialidad=""){
        $this->matricula=$matricula;
        $this->nombre_doctor=$nombre_doctor;
        $this->paterno_doctor=$paterno_doctor;
        $this->materno_doctor=$materno_doctor;
        $this->direccion_doctor=$direccion_doctor;
        $this->celular_doctor=$celular_doctor;
        $this->usuario_idusuario=$usuario_idusuario;
        $this->especialidad_id_especialidad=$especialidad_id_especialidad;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear($doctor_data=array())
    {
        foreach($doctor_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        $this->query="INSERT into inline.doctor (
        matricula_Doctor,nombre_Doctor,paterno_Doctor,materno_Doctor,direccion_Doctor,celular_Doctor,usuario_idusuario,especialidad_id_especialidad,estado_Doctor) 
        values('$matricula_Doctor','$nombre_Doctor','$paterno_Doctor','$materno_Doctor','$direccion_Doctor','$celular_Doctor','$usuario_idusuario','$especialidad_id_especialidad','1')";
        $this->set_query();
    }
    public function leer($doctorID='')
    {
        $this->query=($doctorID!="")
        ?"SELECT id_Doctor,matricula_Doctor,concat(paterno_Doctor,' ',materno_Doctor,' ',nombre_Doctor) as nombre,direccion_Doctor,celular_Doctor,nombre_Especialidad FROM inline.doctor as doc inner join inline.especialidad as esp on esp.id_especialidad=doc.especialidad_id_especialidad where concat(paterno_Doctor,' ',materno_Doctor,' ',nombre_doctor) like '$doctorID%'"
        :"SELECT id_Doctor,matricula_Doctor,concat(paterno_Doctor,' ',materno_Doctor,' ',nombre_Doctor) as nombre,direccion_Doctor,celular_Doctor,nombre_Especialidad FROM inline.doctor as doc inner join inline.especialidad as esp on esp.id_especialidad=doc.especialidad_id_especialidad where estado_doctor=1";
        $this->get_query();
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            if($key=="imagen_Doctor")
            {
                array_push($data,base64_encode(stripslashes($value)));
            }
            else
            {
                array_push($data,$value);
            }
            
        }
        return $data;
        
    }
    public function leerDelId($doctorID='')
    {
        $this->query=($doctorID!="")
        ?"SELECT * FROM inline.doctor where id_Doctor='$doctorID'"
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
    public function actualizar($doctor_data=array())
    {
       foreach($doctor_data as $key => $value)
       {
           $$key=$value;
       }
   
     $this->query=($doctor_data!="")
     ?"UPDATE inline.doctor SET matricula_Doctor = '$matricula_Doctor',nombre_Doctor= '$nombre_Doctor',paterno_Doctor ='$paterno_Doctor',materno_Doctor = '$materno_Doctor',direccion_Doctor = '$direccion_Doctor',celular_Doctor = '$celular_Doctor',usuario_idusuario = $usuario_idusuario,especialidad_id_especialidad = $especialidad_id_especialidad WHERE matricula_Doctor = $matricula_Doctor "
     :"";
     $this->set_query();
       
    }
    public function eliminar($doctorId="")
    {
        $this->query=($doctorId!="")
        ?"UPDATE inline.doctor set estado_Doctor=0 where id_Doctor=$doctorId "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>