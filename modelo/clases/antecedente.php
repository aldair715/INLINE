<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
class Antecedente extends Conexion{
    //creamos atributos
    public $id_Antecedentes;
    public $antecedentes_personales_no_patologicos;
    public $antecedentes_personales_patologicos;
    public $antecedentes_familiares;
    public $antecedentes_psicosociales;
    public $condiciones_preexistantes;
    public $estado_Antecedente;
    //creamos constructores
    public function __construct($id="",$antecedente1="",$antecedente2="",$antecedente3="",$antecedente4="",$antecedente5="",$estado=""){
        $this->id_Antecedentes=$id;
        $this->antecedentes_personales_no_patologicos=$antecedente1;
        $this->antecedentes_personales_patologicos=$antecedente2;
        $this->antecedentes_familiares=$antecedente3;
        $this->antecedentes_psicosociales=$antecedente4;
        $this->condiciones_preexistentes=$antecedente5;
        $this->estado_Antecedente=$estado;
    
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear($Antecedente_data=array())
    {
        foreach($Antecedente_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        $this->query="
        INSERT INTO inline.Antecedente (antecedentes_personales_no_patologicos,antecedentes_personales_patologicos,antecedentes_familiares,antecedentes_psicosociales,condiciones_preexistentes,estado_Antecedente) 
        VALUES ($antecedentes_personales_no_patologicos,$antecedentes_personales_patologicos,$antecedentes_familiares,$antecedentes_psicosociales,$condiciones_preexistentes,'1')  
        ";
        $this->set_query();
    }
    public function leer($AntecedenteID='')
    {
        $this->query=($AntecedenteID!="")
        ?"SELECT * FROM inline.Antecedente where id_Antecedente like '$AntecedenteID%'"
        :"SELECT id_Antecedentes,concat(nombre_Paciente,' ',paterno_Paciente,' ',materno_Paciente) FROM inline.antecedentes as ant inner join inline.paciente as pac on pac.antecedentes_id_antecedentes=ant.id_Antecedentes where estado_Antecedente=1";
        $this->get_query();
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            array_push($data,$value);
        }
        return $data;
        
    }
    public function leerDelId($AntecedenteID='')
    {
        $this->query=($AntecedenteID!="")
        ?"SELECT * FROM inline.antecedentes where id_Antecedentes='$AntecedenteID'"
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
    public function actualizar($Antecedente_data=array())
    {
       foreach($Antecedente_data as $key => $value)
       {
           $$key=$value;
       }
   
     $this->query=($Antecedente_data!="")
     ?"UPDATE inline.antecedentes SET antecedentes_personales_no_patologicos= '$antecedentes_personales_no_patologicos',antecedentes_personales_patologicos ='$antecedentes_personales_patologicos',antecedentes_familiares = '$antecedentes_familiares',antecedentes_psicosociales = '$antecedentes_psicosociales',condiciones_preexistentes= $condiciones_preexistentes WHERE id_Antecedente = $id_Antecedentes "
     :"";
     $this->set_query();
       
    }
    public function eliminar($AntecedenteId="")
    {
        $this->query=($AntecedenteId!="")
        ?"UPDATE inline.antecedentes set estado_Antecedente=0 where id_Antecedente=$id_Antecedente "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>