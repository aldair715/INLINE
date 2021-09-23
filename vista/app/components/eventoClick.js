import { ajax, ajaxBody } from "../helpers/ajax.js";
import { buscarElemento } from "./buscarElemento.js";
import { editarElementos } from "./editarElemento.js";
import { tabla } from "./tabla.js";
import { tabla_dinamica } from "./tabla_dinamica.js";

export async function onClickear(target)
{
    let hash=window.location.hash;
    if(target.matches(".edit"))
    {let value=target.dataset.id;
        if(hash.includes("mostrarMedicamento"))
        {
            
            await ajax(
                {
                    url:`/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarUnMedicamento&id=${value}`,
                    method:"GET",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    cbSuccess:(posts)=>{
                        editarElementos(posts,"editarMedicamento");
                    }
                }
            );
        }
        if(hash.includes("mostrarEspecialidad"))
        {

                await ajaxBody(
                    {
                        url:`/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=mostrarUnEspecialidad&id=${value}`,
                        method:"GET",
                        cbSuccess:(posts)=>{
                            editarElementos(posts,"editarEspecialidad");
                        }
                    }
                );
            
            
        }
        if(hash.includes("mostrarDoctor"))
        {
            await ajaxBody(
                {
                    url:`/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=mostrarUnDoctor&id=${value}`,
                    method:"GET",
                    cbSuccess:(posts)=>{
                        editarElementos(posts,"editarDoctor");
                    }
                }
            );
        }
        if(hash.includes("mostrarPaciente"))
        {
            await ajaxBody(
                {
                    url:`/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=mostrarUnPaciente&id=${value}`,
                    method:"GET",
                    cbSuccess:(posts)=>{
                        editarElementos(posts,"editarPaciente");
                    }
                }
            );
        }
        if(hash.includes("mostrarUsuario"))
        {
            await ajaxBody(
                {
                    url:`/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=mostrarUnUsuario&id=${value}`,
                    method:"GET",
                    cbSuccess:(posts)=>{
                        editarElementos(posts,"editarUsuario");
                    }
                }
            );
        }
    }
    else if(target.matches(".delete"))
    {
        if(hash.includes("mostrarMedicamento"))
        {
            let value=target.dataset.id;
            let confirmar=confirm("SEGURO QUE QUIERE ELIMINAR");
            if(confirmar)
            {
                let formData=new FormData();
                formData.append("id",value);
                await ajaxBody(
                    {
                        url:`/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=eliminarMedicamento`,
                        method:"POST",
                        body:formData,
                        cbSuccess:(posts)=>{
                            location.reload();
                        }
                    }
                );
            }
            
        }
       if(hash.includes("mostrarEspecialidad"))
        {
            let value=target.dataset.id;
            let confirmar=confirm("SEGURO QUE QUIERE ELIMINAR");
            if(confirmar)
            {
                let formData=new FormData();
                formData.append("id",value);
                await ajaxBody(
                    {
                        url:`/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=eliminarEspecialidad`,
                        method:"POST",
                        body:formData,
                        cbSuccess:(posts)=>{
                            location.reload();
                        }
                    }
                );
            }
            
        }
        if(hash.includes("mostrarDoctor"))
        {
            let value=target.dataset.id;
            let confirmar=confirm("SEGURO QUE QUIERE ELIMINAR");
            if(confirmar)
            {
                let formData=new FormData();
                formData.append("id",value);
                await ajaxBody(
                    {
                        url:`/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=eliminarDoctor`,
                        method:"POST",
                        body:formData,
                        cbSuccess:(posts)=>{
                            location.reload();
                        }
                    }
                );
            }
        }
        if(hash.includes("mostrarPaciente"))
        {
            let value=target.dataset.id;
            let confirmar=confirm("SEGURO QUE QUIERE ELIMINAR");
            if(confirmar)
            {
                let formData=new FormData();
                formData.append("id",value);
                await ajaxBody(
                    {
                        url:`/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=eliminarPaciente`,
                        method:"POST",
                        body:formData,
                        cbSuccess:(posts)=>{
                            location.reload();
                        }
                    }
                );
            }
        }
        if(hash.includes("mostrarUsuario"))
        {
            let value=target.dataset.id;
            let confirmar=confirm("SEGURO QUE QUIERE ELIMINAR");
            if(confirmar)
            {
                let formData=new FormData();
                formData.append("id",value);
                await ajaxBody(
                    {
                        url:`/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=eliminarUsuario`,
                        method:"POST",
                        body:formData,
                        cbSuccess:(posts)=>{
                            location.reload();
                        }
                    }
                );
            }
        }

    }
    else if(target.matches("#medicamentoAñadir"))
    {
        let selectID=document.getElementById("select_Medicamento"),
        value=selectID.value,
        array=new Array(),
        $indicaciones=document.getElementById("indicaciones").value,
        $dosis=document.getElementById("dosis").value,
        $dias=document.getElementById("dias").value;
        if($indicaciones.length>0 || $dosis.length>0 || $dias.length>0)
        {
            if(sessionStorage.getItem("recetaMedicamento"))
            {
                array=JSON.parse(sessionStorage.getItem("recetaMedicamento"));
                array.push({valor:value,indicaciones:$indicaciones,dosis:$dosis,dias:$dias});
                sessionStorage.setItem("recetaMedicamento",JSON.stringify(array));
            }
            else
            {
                array.push({valor:value,indicaciones:$indicaciones,dosis:$dosis,dias:$dias});
                sessionStorage.setItem("recetaMedicamento",JSON.stringify(array));
            }
            document.getElementById("indicaciones").value="";
            document.getElementById("dosis").value="";
            document.getElementById("dias").value="";
            if(document.getElementById("recetaMedica"))
            {
               let $receta=document.getElementById("recetaMedica"),
               $padre=$receta.parentNode;
               $padre.removeChild($receta);
            }
            await tabla_dinamica();
        }
        else
        {
            console.log("no hay indicaciones");
        }
    }
    //para cuando se quiera modificar un antecedente
    else if(target.matches("#id_Antecedente"))
    {
        let value=target.dataset.id;
        window.location.hash="#/mostrarAntecedente";
        
        await ajaxBody(
            {
                url:`/proyecto_emprendimiento/controlador/Antecedentes/AntecedenteClase.php?opciones=mostrarUnAntecedente&id=${value}`,
                method:"GET",
                cbSuccess:(posts)=>{
                    
                    setTimeout(editarElementos(posts,"editarAntecedente"),5000);
                    
                    
                }
            }
        );
    }
    //para las modificaciones de reserva de doctores
    else if(target.matches(".reservarDoctor"))
    {
        let value=target.dataset.id;
        sessionStorage.setItem("id_doctor",value);
        location.hash="#/registrarConsulta";
    }
}
export async function onKeyDown(target)
{
   
    if(target.matches(".search"))
    {
        let hash=location.hash;
        if(hash.includes("mostrarMedicamento"))
        {
            let $tabla=document.getElementById("tabla_Vista");
            $tabla.innerHTML="";
            let $formulario=await tabla(
                `/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarMedicamento&busqueda=${target.value}`,
                ["Nº","Nombre del medicamento","Descripción del medicamento","Estado","MODIFICAR","ELIMINAR"]);
            $tabla.appendChild($formulario);
        }
        else if(hash.includes("mostrarEspecialidad"))
        {
            let $tabla=document.getElementById("tabla_Vista");
            $tabla.innerHTML="";
            let $formulario=await tabla(
                `/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=mostrarEspecialidad&busqueda=${target.value}`,
                ["Nº","Nombre de Especialidad","MODIFICAR","ELIMINAR"]);
            $tabla.appendChild($formulario);
        }
        else if(hash.includes("mostrarDoctor"))
        {
            let $tabla=document.getElementById("tabla_Vista");
            $tabla.innerHTML="";
            let $formulario=await tabla(
                `/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=mostrarDoctor&busqueda=${target.value}`,
                ["Nº","Matricula","Nombre Completo del Doctor","Dirección","Celular","Especialidad","MODIFICAR","ELIMINAR"]);
            $tabla.appendChild($formulario);
        }
        else if(hash.includes("mostrarPaciente"))
        {
            let $tabla=document.getElementById("tabla_Vista");
            $tabla.innerHTML="";
            let $formulario=await tabla(
                `/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=mostrarPaciente&busqueda=${target.value}`,
                ["Nº","Cedula","Nombre del Paciente","Direccion","Celular","Genero","Fecha de Nacimiento","MODIFICAR","ELIMINAR"]);
            $tabla.appendChild($formulario);
        }
        else if(hash.includes("mostrarUsuario"))
        {
            let $tabla=document.getElementById("tabla_Vista");
            $tabla.innerHTML="";
            let $formulario=await tabla(
                `/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=mostrarUsuario&busqueda=${target.value}`,
                ["Nº","USUARIO","NIVEL","EMAIL","MODIFICAR","ELIMINAR"]);
            $tabla.appendChild($formulario);
        }
        
    }
    
    
}