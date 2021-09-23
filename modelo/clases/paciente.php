<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class Paciente extends Conexion{
    //creamos atributos
    public $cedula_Paciente;
    public $nombre_Paciente;
    public $paterno_Paciente;
    public $materno_Paciente;
    public $direccion_Paciente;
    public $celular_Paciente;
    public $fecha_nacimiento_Paciente;
    public $genero_Paciente;
    public $usuario_idusuario=2;
    public $antecedentes_id_antecedentes;
    public $estado_Paciente="1";
    //creamos constructores
    public function __construct($cedula_Paciente="",$nombre_Paciente="",$paterno_Paciente="",$materno_Paciente="",$direccion_Paciente="",$celular_Paciente="",$usuario_idusuario=2,$antecedentes_id_antecedentes=""){
        $this->cedula_Paciente=$cedula_Paciente;
        $this->nombre_Paciente=$nombre_Paciente;
        $this->paterno_Paciente=$paterno_Paciente;
        $this->materno_Paciente=$materno_Paciente;
        $this->direccion_Paciente=$direccion_Paciente;
        $this->celular_Paciente=$celular_Paciente;
        $this->usuario_idusuario=$usuario_idusuario;
        $this->antecedentes_id_antecedentes=$antecedentes_id_antecedentes;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear($Paciente_data=array())
    {
        foreach($Paciente_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        $this->query="CALL añadirPaciente('$cedula_Paciente','$nombre_Paciente','$paterno_Paciente','$materno_Paciente','$direccion_Paciente','$celular_Paciente','$fecha_nacimiento_Paciente','$genero_Paciente','$usuario_idusuario','$antecedente1','$antecedente2','$antecedente3','$antecedente4','$antecedente5')";
        $this->set_query();
    }
    public function leer($PacienteID='')
    {
        $this->query=($PacienteID!="")
        ?"SELECT * FROM inline.Paciente where concat(nombre_Paciente,' ',paterno_Paciente,' ',materno_Paciente) like '$PacienteID%'"
        :"SELECT cedula_Paciente,concat(paterno_Paciente,' ',materno_Paciente,' ',nombre_Paciente),direccion_Paciente,celular_Paciente,fecha_nacimiento_Paciente,genero_Paciente FROM inline.Paciente as pac inner join inline.antecedentes as ant on ant.id_Antecedentes=pac.antecedentes_id_antecedentes where estado_Paciente=1";
        $this->get_query();
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            array_push($data,$value);
        }
        return $data;
        
    }
    public function leerDelId($PacienteID='')
    {
        $this->query=($PacienteID!="")
        ?"SELECT * FROM inline.Paciente where cedula_Paciente='$PacienteID'"
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
    public function actualizar($Paciente_data=array())
    {
       foreach($Paciente_data as $key => $value)
       {
           $$key=$value;
       }
   
     $this->query=($Paciente_data!="")
     ?"UPDATE inline.paciente SET nombre_Paciente= '$nombre_Paciente',paterno_Paciente ='$paterno_Paciente',materno_Paciente = '$materno_Paciente',direccion_Paciente = '$direccion_Paciente',celular_Paciente = '$celular_Paciente',usuario_idusuario = '$usuario_idusuario',fecha_nacimiento_Paciente='$fecha_nacimiento_Paciente' WHERE cedula_Paciente = '$cedula_Paciente' "
     :"";
     $this->set_query();
       
    }
    public function eliminar($PacienteId="")
    {
        $this->query=($PacienteId!="")
        ?"UPDATE inline.Paciente set estado_Paciente=0 where cedula_Paciente=$PacienteId "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>