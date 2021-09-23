<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/consulta.php");
$opciones=$_GET["opciones"];
$nombre="";
$id="";
if(isset($_GET["busqueda"]))
{
    $nombre=$_GET["busqueda"];
} 
if(isset($_GET["id"]))
{
    $id=$_GET["id"];
}
switch($opciones)
{
    case "mostrarConsulta":
        $Consulta=new Consulta();
        $Consulta_leer=$Consulta->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Consulta_leer);
    break;
    case "mostrarUnaConsulta":
        $Consulta=new Consulta();
        $Consulta_leer=$Consulta->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Consulta_leer);
    break;
    case "actualizarConsulta":
                $id=$_POST["Matricula"];
                $nombre=$_POST["Nombre"];
                $paterno=$_POST["Paterno"];
                $materno=$_POST["Materno"];
                $direccion=$_POST["Direccion"];
                $celular=$_POST["Celular"];
                $usuario=$_POST["Usuario"];
                $especialidad=$_POST["Especialidad"];
                $vector=array(
                    'matricula_Consulta'=>"$id",
                    'nombre_Consulta'=>"$nombre",
                    'paterno_Consulta'=>"$paterno",
                    'materno_Consulta'=>"$materno",
                    'direccion_Consulta'=>"$direccion",
                    'celular_Consulta'=>"$celular",
                    'usuario_idusuario'=>"$usuario",
                    'especialidad_id_especialidad'=>$especialidad,
                    
                );
                $Consulta=new Consulta();
                $Consulta->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarConsulta":
        $id=$_POST["id"];
        $Consulta=new Consulta();
        $Consulta->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarConsulta":
                $motivo=$_POST["Motivo"];
                $fecha=$_POST["Fecha"];
                $observaciones=$_POST["Observaciones"];
                $id_Doctor=$_POST["id_Doctor"];
                $id_Paciente=$_POST["id_Paciente"];
                $vector=array(
                    'motivo_Consulta'=>"$motivo",
                    'fecha_Consulta'=>"$fecha",
                    'observaciones_Consulta'=>"$observaciones",
                    'id_Doctor'=>"$id_Doctor",
                    'id_Paciente'=>"$id_Paciente",  
                );
        $Consulta=new Consulta();
        $Consulta->crear($vector);
        echo json_encode("exito");
    break;
    default:
    break;
}
?>