<?php
    $IDUSUARIO=$_POST["id_Usuario"];
    $NOMUSUARIO=$_POST["nom_Usuario"];
    $NIVEL=$_POST["nivel"];
    session_start();
    $_SESSION["ID_USUARIO"]=$IDUSUARIO;
    $_SESSION["NOMBRE_USUARIO"]=$NOMUSUARIO;
    $_SESSION["NIVEL_USUARIO"]=$NIVEL;
?>