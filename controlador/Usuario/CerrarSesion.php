<?php
session_start();
session_destroy();
header("Location:/proyecto_emprendimiento/vista/index.php");
