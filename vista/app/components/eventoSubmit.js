import { ajax, ajaxBody } from "../helpers/ajax.js";
const llenadoFormulario=(url="")=>{
    let d=document,
    $formulario=d.getElementById("formulario"),
    $inputs=d.querySelectorAll("#formulario [required]"),
    formData=new FormData();
    $inputs.forEach(el=>{
        let $id=d.getElementById(el.name),
        $valor=$id.value || document.getElementById("imagen").files[0];
        formData.append(el.name,$valor);
        console.log($valor);
    });
    ajaxBody({
        url,
        method:`POST`,
        body:formData,
        cbSuccess:(json)=>{
            location.reload();
        }
    });
    
}

export function onSubmit(target)
{
    let d=document,
    hash=window.location.hash;
    if(hash.includes("mostrarMedicamento"))
    {
        
           let $formulario=document.getElementById("formulario"),
           $inputs=document.querySelectorAll("#formulario [required]"),
           formData=new FormData();
           $inputs.forEach(el=>{
               let $id=document.getElementById(el.name),
               $valor=$id.value;
              formData.append(el.name,$valor);
              
           });
            ajaxBody(
                {
                    url:`/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=actualizarMedicamento`,
                    method:'POST',
                    body:formData,
                    cbSuccess:(json)=>{
                            
                            location.reload();
                        
                    }
                }
            ); 
        
        
    }
    if(hash.includes("mostrarEspecialidad"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=actualizarEspecialidad");
    }
    if(hash.includes("mostrarDoctor"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=actualizarDoctor");
    }
    if(hash.includes("mostrarPaciente"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=actualizarPaciente")
    }
    if(hash.includes("registrarMedicamento"))
    {
        llenadoFormulario('/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=ingresarMedicamento');
    }
    if(hash.includes("registrarEspecialidad"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=ingresarEspecialidad");
    }
    if(hash.includes("registrarDoctor"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=ingresarDoctor");
    }
    if(hash.includes("registrarPaciente"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=ingresarPaciente")
    }
    if(hash.includes("mostrarAntecedente"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Antecedentes/AntecedenteClase.php?opciones=actualizarAntecedente")
    }
    if(hash.includes("registrarUsuario"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=ingresarUsuario")
    }
    if(hash.includes("mostrarUsuario"))
    {
        llenadoFormulario("/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=actualizarUsuario")
    }
    //para el login
     
}
