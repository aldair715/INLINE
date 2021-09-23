<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/medicamento.php");
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
    case "mostrarMedicamento":
        $medicamento=new medicamento();
        $medicamento_leer=$medicamento->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($medicamento_leer);
    break;
    case "mostrarUnMedicamento":
        $medicamento=new medicamento();
        $medicamento_leer=$medicamento->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($medicamento_leer);
    break;
    case "actualizarMedicamento":
                $nombre=$_POST["Medicamento"];
                $descripcion=$_POST["Descripcion"];
                $id=$_POST["id_Medicamento"];
                $vector=array(
                    'nombre_Medicamento'=>"$nombre",
                    'descripcion_Medicamento'=>"$descripcion",
                    'id_Medicamento'=>"$id"
                );
                $medicamento=new medicamento();
                $medicamento->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarMedicamento":
        $id=$_POST["id"];
        $medicamento=new medicamento();
        $medicamento->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarMedicamento":
        $nombre=$_POST["Medicamento"];
        $descripcion=$_POST["Descripcion"];
        $vector=array(
            'nombre_Medicamento'=>"$nombre",
            'descripcion_Medicamento'=>"$descripcion"
        );
        $medicamento=new Medicamento();
        $medicamento->crear($vector);
        echo json_encode("exito");
    break;
    default:
    break;
}
?>