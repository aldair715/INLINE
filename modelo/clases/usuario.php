<?php
$rootDir=realpath($_SERVER["DOCUMENT_ROOT"]."/proyecto_emprendimiento/modelo/");
require_once("$rootDir/conexion/CONEXION.php");
header('Content-Type: text/html; charset=UTF-8');
class Usuario extends Conexion{
    //creamos atributos
    public $direccion_Usuario;
    public $usuario;
    public $contraseña;
    public $estado_Usuario="1";
    public $nivel;
    public $email;
    public $token_Acceso_idtoken_Acceso;
    //creamos constructores
    public function __construct($direccion_Usuario="",$usuario="",$contraseña="",$estado_Usuario="1",$nivel="1",$email="",$token_Acceso_idtoken_Acceso=""){
        $this->direccion_Usuario=$direccion_Usuario;
        $this->usuario=$usuario;
        $this->contraseña=$contraseña;
        $this->estado_Usuario=$estado_Usuario;
        $this->nivel=$nivel;
        $this->email=$email;
        $this->token_Acceso_idtoken_Accesso=$token_Acceso_idtoken_Acceso;
    }
    public function __destruct()
    {
        
    }
    //creamos metodos
    //crear metodo para verificar si la tabla esta vacia
    public function crear($Usuario_data=array())
    {
        foreach($Usuario_data as $key => $value)
        {
            //Variable de Variable
            $$key=$value;
        }
        
        $md5=password_hash("$contraseña",PASSWORD_DEFAULT,['cost'=>12]);
        $fechaActual = date('Y-m-d H:i:s');
        $this->query="insert into usuario(token_Acceso_idtoken_Acceso,usuario,contraseña,estado,nivel,email,create_At) values (1,'$usuario','$md5',1,$nivel,'$email',1,$fechaActual)";
        $this->set_query();
    }
    public function leer($UsuarioID='')
    {
        $this->query=($UsuarioID!="")
        ?"SELECT id_usuario,usuario,if (nivel=0,'PACIENTE',if((nivel=1),'DOCTOR','ADMINISTRADOR')) as nivel,email,imagen,create_At FROM usuario where usuario like '$UsuarioID%'"
        :"SELECT id_usuario,usuario,if (nivel=0,'PACIENTE',if((nivel=1),'DOCTOR','ADMINISTRADOR')) as nivel,email,imagen,create_At FROM usuario where estado=1";
        $this->get_query();
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
        
            array_push($data,$value);
        }
        return $data;
        
    }
    public function leerDelId($UsuarioID='')
    {
        $this->query=($UsuarioID!="")
        ?"SELECT id_usuario,usuario,if (nivel=0,'PACIENTE',if((nivel=1),'DOCTOR','ADMINISTRADOR')) as nivel,email,imagen,create_At FROM usuario where id_usuario='$UsuarioID'"
        :"";
        $this->get_query();
        $num_rows=count($this->filas);
        $data=array();$reg="";
        foreach($this->filas as $key=>$value)
        {
            array_push($data,$value);
        }
        return $data;
        
    }
    public function verificarUsuario($Usuario_data=array())
    {
        if(count($Usuario_data)>0)
        {   foreach($Usuario_data as $key => $value)
            {
                //Variable de Variable
                $$key=$value;
            }
            $this->query="call verificar_Usuario('$usuario');";
            $this->get_query();
            $num_rows=count($this->filas);
            $data=array();$reg=0;
            foreach($this->filas as $key=>$value)
            { 
                
                foreach($this->filas[$reg] as $clave=>$valor)
                {
                    if($clave=="contraseña")
                    {
                        if(password_verify($contraseña,$valor))
                        {
                            array_push($data,$value);
                        }
                    }
                }
            }
            return $data;
        }
        
    }
    public function actualizar($Usuario_data=array())
    {
     //$this->set_query();
     if(count($Usuario_data)>0)
     {   foreach($Usuario_data as $key => $value)
         {
             //Variable de Variable
             $$key=$value;
         }
         
         $this->query="call verificar_Id_Usuario($id_usuario);";
         $this->get_query();
         $num_rows=count($this->filas);
         $usuario_verificar=$this->filas[0]["usuario"];
         $contraseña_verificar=$this->filas[0]["contraseña"];
         if(password_verify($contraseñaAntigua,$contraseña_verificar))
         {
            $md5=password_hash("$contraseñaNueva",PASSWORD_DEFAULT,['cost'=>12]);
            $this->query="update usuario set usuario='$usuario',contraseña='$md5',nivel=$nivel,email='$email' where id_usuario=$id_usuario";
            $this->set_query();
         }
         
     }
    }
    public function eliminar($UsuarioId="")
    {
        $fechaActual = date('Y-m-d H:i:s');
        $this->query=($UsuarioId!="")
        ?"UPDATE usuario set estado=0,delete_At=$fechaActual where id_usuario=$UsuarioId "
        :"";
        $this->set_query();
    }
    //creamos getter and setter

}

?>