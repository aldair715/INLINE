<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/doctor.php");
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
    case "mostrarDoctor":
        $doctor=new doctor();
        $doctor_leer=$doctor->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($doctor_leer);
    break;
    case "mostrarUnDoctor":
        $doctor=new doctor();
        $doctor_leer=$doctor->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($doctor_leer);
    break;
    case "actualizarDoctor":
                $id=$_POST["Matricula"];
                $nombre=$_POST["Nombre"];
                $paterno=$_POST["Paterno"];
                $materno=$_POST["Materno"];
                $direccion=$_POST["Direccion"];
                $celular=$_POST["Celular"];
                $usuario=$_POST["Usuario"];
                $especialidad=$_POST["Especialidad"];
                $vector=array(
                    'matricula_Doctor'=>"$id",
                    'nombre_Doctor'=>"$nombre",
                    'paterno_Doctor'=>"$paterno",
                    'materno_Doctor'=>"$materno",
                    'direccion_Doctor'=>"$direccion",
                    'celular_Doctor'=>"$celular",
                    'usuario_idusuario'=>"$usuario",
                    'especialidad_id_especialidad'=>$especialidad,
                    
                );
                $doctor=new doctor();
                $doctor->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarDoctor":
        $id=$_POST["id"];
        $doctor=new doctor();
        $doctor->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarDoctor":
                $id=$_POST["Matricula"];
                $nombre=$_POST["Nombre"];
                $paterno=$_POST["Paterno"];
                $materno=$_POST["Materno"];
                $direccion=$_POST["Direccion"];
                $celular=$_POST["Celular"];
                $usuario=$_POST["Usuario"];
                $especialidad=$_POST["Especialidad"];
                

                $vector=array(
                    'matricula_Doctor'=>"$id",
                    'nombre_Doctor'=>"$nombre",
                    'paterno_Doctor'=>"$paterno",
                    'materno_Doctor'=>"$materno",
                    'direccion_Doctor'=>"$direccion",
                    'celular_Doctor'=>"$celular",
                    'usuario_idusuario'=>$usuario,
                    'especialidad_id_especialidad'=>$especialidad,
                    
                );
        $doctor=new doctor();
        $doctor->crear($vector);
        echo json_encode("exito");
    break;
    default:
    break;
}
?>