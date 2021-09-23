
const verificarUsuario=async(usuario, contraseña)=>{

    try{
    let d=document,
    formData=new FormData();
    formData.append("usuario",usuario);
    formData.append("contraseña",contraseña);
    let url="/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=verificarUsuario",
    method="POST",
    body=formData,
    
        option={method,body};
        let res=await fetch(url,option);
        let json=await res.json();
        if(!res.ok){throw{status:res.status,statusText:res.statusText};
        }
        if(json===0)
        {
            Swal.fire("MENSAJE DE ERROR","USUARIO Y/O CONTRASEÑA INCORRECTO","error");
        }
        else
        {
            let data=JSON.parse(json),
            estado=data[0].estado,
            idusuario=data[0].id_usuario,
            nombreUsuario=data[0].usuario,
            nivel=data[0].nivel;
            if(estado=="0")
            {
                return Swal.fire("Mensaje de Advertencia","Lo sentimos el usuario "+usuario+" se encuentra suspendido de la aplicación","warning");
            }
            let formData1=new FormData();
            formData1.append("id_Usuario",idusuario);
            formData1.append("nom_Usuario",nombreUsuario);
            formData1.append("nivel",nivel);
            url="/proyecto_emprendimiento/controlador/Usuario/IniciarSesion.php";
            method="POST";
            body=formData1;
            option={method,body};
            res=await fetch(url,option);
            if(!res.ok){return Swal.fire("MENSAJE DE ERROR","ERROR EN LA CONEXION","error")};
            Swal.fire("Mensaje de confirmacion","BIENVENIDO AL SISTEMA","success");
            //EL TIMER QUE MANDA
            let timerInterval;
            Swal.fire({
            title: 'BIENVENIDO AL SISTEMA!',
            html: 'USTED SERA REDIRECCIONADO EN <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                location.reload();
            }
            });
        }
        
        
    }catch(error){
        console.log(error);
    }
};
document.addEventListener("submit",e=>{
    e.preventDefault();
    if(e.target.matches("#formulario"))
    {
            let $user=document.getElementById("usuario"),
            $con=document.getElementById("contraseña");
            $val1=$user.value;
            $val2=$con.value;
            if($val1.length===0 || $val2.length===0)
            {
                return Swal.fire("MENSAJE DE ADVERTENCIA","LLENE TODOS LOS CAMPOS");
            }
            else{
                console.log("entrando");
                verificarUsuario($val1,$val2);
            }
    }
});