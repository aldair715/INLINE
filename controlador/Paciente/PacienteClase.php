<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/Paciente.php");
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
    case "mostrarPaciente":
        $Paciente=new Paciente();
        $Paciente_leer=$Paciente->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Paciente_leer);
    break;
    case "mostrarUnPaciente":
        $Paciente=new Paciente();
        $Paciente_leer=$Paciente->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Paciente_leer);
    break;
    case "actualizarPaciente":
                $id=$_POST["Cedula"];
                $nombre=$_POST["Nombre"];
                $paterno=$_POST["Paterno"];
                $materno=$_POST["Materno"];
                $direccion=$_POST["Direccion"];
                $celular=$_POST["Celular"];
                $usuario=$_POST["Usuario"];
                $nacimiento=$_POST["Nacimiento"];
                $vector=array(
                    'cedula_Paciente'=>"$id",
                    'nombre_Paciente'=>"$nombre",
                    'paterno_Paciente'=>"$paterno",
                    'materno_Paciente'=>"$materno",
                    'direccion_Paciente'=>"$direccion",
                    'celular_Paciente'=>"$celular",
                    'usuario_idusuario'=>"$usuario",
                    'fecha_nacimiento_Paciente'=>$nacimiento,
                );
                $Paciente=new Paciente();
                $Paciente->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarPaciente":
        $id=$_POST["id"];
        $Paciente=new Paciente();
        $Paciente->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarPaciente":
        $id=$_POST["Cedula"];
        $nombre=$_POST["Nombre"];
        $paterno=$_POST["Paterno"];
        $materno=$_POST["Materno"];
        $direccion=$_POST["Direccion"];
        $celular=$_POST["Celular"];
        $usuario=$_POST["Usuario"];
        $nacimiento=$_POST["Nacimiento"];
        $genero=$_POST["Genero"];
        $antecedente1=$_POST["Antecedentes_No_Patologicos"];
        $antecedente2=$_POST["Antecedentes_Patologicos"];
        $antecedente3=$_POST["Antecedentes_Familiares"];
        $antecedente4=$_POST["Antecedentes_Psicosociales"];
        $antecedente5=$_POST["Antecedentes_Preexistentes"];

        $vector=array(
            'cedula_Paciente'=>"$id",
            'nombre_Paciente'=>"$nombre",
            'paterno_Paciente'=>"$paterno",
            'materno_Paciente'=>"$materno",
            'direccion_Paciente'=>"$direccion",
            'celular_Paciente'=>"$celular",
            'usuario_idusuario'=>"$usuario",
            'fecha_nacimiento_Paciente'=>$nacimiento,
            'genero_Paciente'=>$genero,
            'antecedente1'=>$antecedente1,
            'antecedente2'=>$antecedente2,
            'antecedente3'=>$antecedente3,
            'antecedente4'=>$antecedente4,
            'antecedente5'=>$antecedente5
        );
        $Paciente=new Paciente();
        $Paciente->crear($vector);
        echo json_encode("exito");
    break;
    default:
    break;
}
?>