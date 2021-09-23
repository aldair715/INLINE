<?php
$md5=password_hash("123",PASSWORD_DEFAULT,['cost'=>12]);
echo $md5;
$fechaActual = date('Y-m-d H:i:s');
   
  echo $fechaActual;