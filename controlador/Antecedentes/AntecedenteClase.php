<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/antecedente.php");
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
    case "mostrarAntecedente":
        $Antecedente=new Antecedente();
        $Antecedente_leer=$Antecedente->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Antecedente_leer);
    break;
    case "mostrarUnAntecedente":
        $Antecedente=new Antecedente();
        $Antecedente_leer=$Antecedente->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Antecedente_leer);
    break;
    case "actualizarAntecedente":
                $antecedente1=$_POST["Antecedentes_No_Patologicos"];
                $antecedente2=$_POST["Antecedentes_Patologicos"];
                $antecedente3=$_POST["Antecedentes_Familiares"];
                $antecedente4=$_POST["Antecedentes_Psicosociales"];
                $antecedente5=$_POST["Antecedentes_Preexistentes"];
                $id=$_POST["Antecedentes"];
                $vector=array(
                    'antecedentes_personales_no_patologicos'=>"$antecedente1",
                    'antecedentes_personales_patologicos'=>"$antecedente2",
                    'antecedentes_familiares'=>"$antecedente3",
                    'antecedentes_psicosociales'=>"$antecedente4",
                    'condiciones_preexistentes'=>"$antecedente5",
                    'id_Antecedentes'=>"$id",
                    
                );
                $Antecedente=new Antecedente();
                $Antecedente->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarAntecedente":
        $id=$_POST["id"];
        $Antecedente=new Antecedente();
        $Antecedente->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarAntecedente":
        $antecedente1=$_POST["personales"];
        $antecedente2=$_POST["patologicos"];
        $antecedente3=$_POST["familiares"];
        $antecedente4=$_POST["psicosociales"];
        $antecedente5=$_POST["preexistente"];
        $vector=array(
            'antedentes_personales_no_patologicos'=>"$antecedente1",
            'antedentes_personales_patologicos'=>"$antecedente2",
            'antedentes_familiares'=>"$antecedente3",
            'antedentes_psicosociales'=>"$antecedente4",
            'condiciones_preexistentes'=>"$antecedente5",
            
        );
        $Antecedente=new Antecedente();
        $Antecedente->crear($vector);
        echo json_encode("exito");
    break;
    default:
    break;
}
?>