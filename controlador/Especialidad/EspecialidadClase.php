<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/especialidad.php");
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
    case "mostrarEspecialidad":
        $especialidad=new especialidad();
        $especialidad_leer=$especialidad->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($especialidad_leer);
    break;
    case "mostrarUnEspecialidad":
        $especialidad=new especialidad();
        $especialidad_leer=$especialidad->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($especialidad_leer);
    break;
    case "actualizarEspecialidad":
                $nombre=$_POST["especialidad"];
                $id=$_POST["id_especialidad"];
                $vector=array(
                    'nombre_especialidad'=>"$nombre",
                    'id_especialidad'=>"$id"
                );
                $especialidad=new especialidad();
                $especialidad->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarEspecialidad":
        $id=$_POST["id"];
        $especialidad=new especialidad();
        $especialidad->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarEspecialidad":
        $nombre=$_POST["Especialidad"];
        $vector=array(
            'nombre_especialidad'=>"$nombre",
        );
        $especialidad=new especialidad();
        $especialidad->crear($vector);
        echo json_encode("exito");
    break;
    default:
    break;
}
?>