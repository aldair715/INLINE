<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class consulta extends Conexion{
    //creamos atributos
    public $id_Consulta;
    public $paciente_id_Paciente;
    public $doctor_id_Doctor;
    public $diagnostico_id_diagnostico;
    public $receta_id_Receta;
    public $motivo_Consulta;
    public $fecha_Consulta;
    public $link_Consulta;
    public $observaciones_Consulta;
    public $estado_Consulta;
    public $create_At;
    public $update_At;
    public $delete_At;
    public $estado_consulta="1";
    //creamos constructores
    public function __construct($id_Consulta="",$paciente_id_Paciente="",$doctor_id_Doctor="",$diagnostico_id_diagnostico="",$receta_id_Receta="",$motivo_Consulta="",$fecha_Consulta="",$link_Consulta="",$observaciones_Consulta="",$estado_Consulta="1",$create_At="",$update_At="",$delete_At=""){
        $this->id_Consulta=$id_Consulta;
        $this->paciente_id_Paciente=$paciente_id_Paciente;
        $this->doctor_id_Doctor=$doctor_id_Doctor;
        $this->diagnostico_id_diagnostico=$diagnostico_id_diagnostico;
        $this->receta_id_Receta=$receta_id_Receta;
        $this->motivo_Consulta=$motivo_Consulta;
        $this->fecha_Consulta=$fecha_Consulta;
        $this->link_Consulta=$link_Consulta;
        $this->observaciones_Consulta=$observaciones_Consulta;
        $this->estado_Consulta=$estado_Consulta;
        $this->create_At=$create_At;
        $this->update_At=$update_At;
        $this->delete_At=$delete_At;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //creamos el metodo para pedir a zoom un link, le mandamos una fecha
    public function crearSesionZoom()
    {
        
    }
    //crear metodo para verificar si la tabla esta vacia
    public function crear($consulta_data=array())
    {
        foreach($consulta_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        $this->query="INSERT into inline.consulta (
        matricula_consulta,nombre_consulta,paterno_consulta,materno_consulta,direccion_consulta,celular_consulta,usuario_idusuario,especialidad_id_especialidad,estado_consulta) 
        values('$matricula_consulta','$nombre_consulta','$paterno_consulta','$materno_consulta','$direccion_consulta','$celular_consulta','$usuario_idusuario','$especialidad_id_especialidad','1')";
        $this->set_query();
    }
    public function leer($consultaID='')
    {
        $this->query=($consultaID!="")
        ?"SELECT id_consulta,matricula_consulta,concat(paterno_consulta,' ',materno_consulta,' ',nombre_consulta),direccion_consulta,celular_consulta,nombre_Especialidad FROM inline.consulta as doc inner join inline.especialidad as esp on esp.id_especialidad=doc.especialidad_id_especialidad where concat(paterno_consulta,' ',materno_consulta,' ',nombre_consulta) like '$consultaID%'"
        :"SELECT id_consulta,matricula_consulta,concat(paterno_consulta,' ',materno_consulta,' ',nombre_consulta),direccion_consulta,celular_consulta,nombre_Especialidad FROM inline.consulta as doc inner join inline.especialidad as esp on esp.id_especialidad=doc.especialidad_id_especialidad where estado_consulta=1";
        $this->get_query();
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            if($key=="imagen_consulta")
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
    public function leerDelId($consultaID='')
    {
        $this->query=($consultaID!="")
        ?"SELECT * FROM inline.consulta where id_consulta='$consultaID'"
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
    public function actualizar($consulta_data=array())
    {
       foreach($consulta_data as $key => $value)
       {
           $$key=$value;
       }
   
     $this->query=($consulta_data!="")
     ?"UPDATE inline.consulta SET matricula_consulta = '$matricula_consulta',nombre_consulta= '$nombre_consulta',paterno_consulta ='$paterno_consulta',materno_consulta = '$materno_consulta',direccion_consulta = '$direccion_consulta',celular_consulta = '$celular_consulta',usuario_idusuario = $usuario_idusuario,especialidad_id_especialidad = $especialidad_id_especialidad WHERE id_consulta = $id_consulta "
     :"";
     $this->set_query();
       
    }
    public function eliminar($consultaId="")
    {
        $this->query=($consultaId!="")
        ?"UPDATE inline.consulta set estado_consulta=0 where id_consulta=$consultaId "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>