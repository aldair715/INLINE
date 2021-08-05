<?php

$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento");
require("$rootDir/modelo/clases/medicamento.php");
echo "<h1>CRUD con MVC de la tabla MEDICAMENTO</h1>";
$status = new medicamento();
$status->leer();