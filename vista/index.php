<?php
session_start();
if(isset($_SESSION["ID_USUARIO"]))
{
    switch($_SESSION["NIVEL_USUARIO"])
    {
        case '0':
            header('Location:/proyecto_emprendimiento/vista/app/components/indexPaciente.php');
        break;
        case '1':
            header('Location:/proyecto_emprendimiento/vista/app/components/indexDoctor.php');
        break;
        case '2':
            header('Location:/proyecto_emprendimiento/vista/app/components/indexAdministrador.php');
        break;
    }
    
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="app/assets/style.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        *{
            margin:0;
            padding: 0;
            box-sizing: border-box;
        }
        .form-login{
            width: 400px;
            height: 340px;
            background: #4e4d4d;
            margin: auto;
            margin-top: 180px;
            box-shadow: 7px 13px 37px #000;
            padding: 20px 30px;
            border-top:4px solid #017bab;
            color: white;
        }
        .form-login h5{
            margin: 0;
            text-align: center;
            height: 40px;
            margin-bottom: 30px;
            border-bottom: 1px solid;
            font-size: 20px;
        }
        body{
            font-family: arial;
            background-image: url("app/assets/imagenes/bg.png");
        }
        .controls{
            width: 100%;
            border: 1px solid #017bab;
            margin-bottom: 15px;
            padding: 11px 10px;
            background: #252323;
            font-weight: bold;
        }
        .button{
            width: 100%;
            height: 40px;
            background: #017bab;
            border:none;
            color: white;
            margin-bottom: 16px;
        }
        .form-login p{
            height: 40px;
            text-align: center;
            border-bottom: 1px solid;
        }
        .form-login a{
            color: white;
            text-decoration: none;
            font-size:14px;
        }
        .form-login a:hover{
            text-decoration: underline;
        }
    </style>
</head>
<body>
  
    <section class="form-login">
        <form id="formulario">
            <h5>FORMULARIO DE INGRESO</h5>
            <input  class="controls" type="text" id="usuario" name="usuario" value="" placeholder="USUARIO"/>
            <input class="controls" type="password" id="contraseña" name="contraseña" value="" placeholder="CONTRASEÑA"/>
            <input class="button" type="submit" name="" value="INGRESAR">
            <p><a href="#">OLVIDASTE TU CONTRASEÑA?</a></p>
        </form>
        
    </section>
    <!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="app/assets/sweetalert/sweetalert.js"></script>
<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
</script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="app/helpers/verificarUsuario.js">
</script>
</body>
</html>


