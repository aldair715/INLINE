<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/clases/usuario.php");
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
    case "mostrarUsuario":
        $Usuario=new Usuario();
        $Usuario_leer=$Usuario->leer($nombre);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Usuario_leer);
    break;
    case "mostrarUnUsuario":
        $Usuario=new Usuario();
        $Usuario_leer=$Usuario->leerDelID($id);
        header('Content-Type:application/json,charset=utf-8');
        echo json_encode($Usuario_leer);
    break;
    case "actualizarUsuario":
                $usuario=$_POST["Usuario"];
                $contraseñaAntigua=$_POST["Contraseña_Actual"];
                $contraseñaNueva=$_POST["Contraseña_Nueva"];
                $nivel=$_POST["Nivel"];
                $email=$_POST["email"];
                $id_usuario=$_POST["id_usuario"];
                $vector=array(
                    'usuario'=>"$usuario",
                    'contraseñaAntigua'=>"$contraseñaAntigua",
                    'contraseñaNueva'=>"$contraseñaNueva",
                    'nivel'=>"$nivel",
                    'email'=>"$email",
                    'id_usuario'=>$id_usuario
                );
                $Usuario=new Usuario();
                $Usuario->actualizar($vector);
                echo json_encode("exito");
        
        
    break;
    case "eliminarUsuario":
        $id=$_POST["id"];
        $Usuario=new Usuario();
        $Usuario->eliminar($id);
        echo json_encode("exito");
    break;
    case "ingresarUsuario":
        $usuario=$_POST["Usuario"];
        $contraseña=$_POST["Contraseña"];
        $nivel=$_POST["Nivel"];
        $email=$_POST["email"];
        $imagen=$_POST["imagen"];
        $vector=array(
            'usuario'=>"$usuario",
            'contraseña'=>"$contraseña",
            'nivel'=>$nivel,
            'email'=>"$email"
        );
        $Usuario=new Usuario();
        $Usuario->crear($vector);
        echo json_encode("exito");
    break;
    case "verificarUsuario":
        $usuario=htmlspecialchars($_POST["usuario"],ENT_QUOTES,"utf-8");
        $contraseña=htmlspecialchars($_POST["contraseña"],ENT_QUOTES,"UTF-8");
        $vector=array(
            'usuario'=>"$usuario",
            'contraseña'=>"$contraseña"
        );
        $Usuario=new Usuario();
        $UsuarioLeer=$Usuario->verificarUsuario($vector);
        $data=json_encode($UsuarioLeer);
        if(count($UsuarioLeer)>0){
        }else{
            $data=0;
        
        }
        echo json_encode($data);
    break;
    default:
    break;
}
