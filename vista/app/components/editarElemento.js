import { formulario } from "./formulario.js";
import { selects } from "./selects.js";

export function editarElementos(props,opcion)
{
    const $opcion={
        editarMedicamento:()=>{
            let {nombre_Medicamento,descripcion_Medicamento,id_Medicamento}=props[0];
            let $formulario=formulario([{
                nombre:"Medicamento",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${nombre_Medicamento}`,
            },{
                nombre:"Descripcion",
                type:"textarea",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${descripcion_Medicamento}`,
            },{
                nombre:"id_Medicamento",
                type:"hidden",
                pattern:"",
                value:`${id_Medicamento}`
            }]);
            
            let $main=document.getElementById("main");
            $main.innerHTML="";
            
            $main.appendChild($formulario);
            
        },
        editarEspecialidad:()=>{
            let {nombre_Especialidad,id_especialidad}=props[0];
            let $formulario=formulario([{
                nombre:"especialidad",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${nombre_Especialidad}`,
            },
            {
                nombre:"id_especialidad",
                type:"hidden",
                value:`${id_especialidad}`
            }]);
            
            let $main=document.getElementById("main");
            $main.innerHTML="";
            
            $main.appendChild($formulario);
        },
        editarDoctor:()=>{
            let {matricula_Doctor,nombre_Doctor,paterno_Doctor,materno_Doctor,direccion_Doctor,celular_Doctor,usuario_idusuario,especialidad_id_especialidad}=props[0];
            let $formulario=formulario([{
                nombre:"Matricula",
                type:"hidden",
                pattern:"^[0-9]+$",
                value:`${matricula_Doctor}`,
            },
            {
                nombre:"Nombre",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${nombre_Doctor}`,
            },
            {
                nombre:"Paterno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${paterno_Doctor}`,
            },{
                nombre:"Materno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${materno_Doctor}`,
            },
            {
                nombre:"Direccion",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú0-9\\s]+$",
                value:`${direccion_Doctor}`
            },
            {
                nombre:"Celular",
                type:"number",
                pattern:"^[0-9]+$",
                value:`${celular_Doctor}`
            },
            {
                
                nombre:"Especialidad",
                type:"select",
                id:"Especialidad"
               
            },
            {
                nombre:"Usuario",
                type:"hidden",
                value:2,
            }
            
            ]);
            selects("especialidad");
            let $main=document.getElementById("main");
            $main.innerHTML="";
            
            $main.appendChild($formulario);
        },
        editarPaciente:()=>{
            let {cedula_Paciente,nombre_Paciente,paterno_Paciente,materno_Paciente,direccion_Paciente,celular_Paciente,usuario_idusuario,fecha_nacimiento_Paciente,genero_Paciente,antecedentes_id_antecedentes}=props[0];
            let $formulario=formulario([{
                nombre:"Cedula",
                type:"hidden",
                pattern:"^[0-9]+$",
                value:`${cedula_Paciente}`,
            },
            {
                nombre:"Nombre",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${nombre_Paciente}`,
            },
            {
                nombre:"Paterno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${paterno_Paciente}`,
            },{
                nombre:"Materno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${materno_Paciente}`,
            },
            {
                nombre:"Direccion",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú0-9\\s]+$",
                value:`${direccion_Paciente}`
            },
            {
                nombre:"Celular",
                type:"number",
                pattern:"^[0-9]+$",
                value:`${celular_Paciente}`
            },
            {
                
                nombre:"Nacimiento",
                type:"date",
                id:"Nacimiento",
                value:`${fecha_nacimiento_Paciente}`
               
            },
            ,{
                value:"MODIFICAR ANTECEDENTES",
                type:"button",
                id:`id_Antecedente`,
                dato:{"id":`${antecedentes_id_antecedentes}`,"id_principal":`${cedula_Paciente}`}
            },
            {
                nombre:"Usuario",
                type:"hidden",
                value:`${usuario_idusuario}`,
                
            }
            ]);
            let $main=document.getElementById("main");
            $main.innerHTML="";
            
            $main.appendChild($formulario);
        },
        editarAntecedente:()=>{
            let {antecedentes_personales_no_patologicos,antecedentes_personales_patologicos,antecedentes_familiares,antecedentes_psicosociales,condiciones_preexistentes,id_Antecedentes}=props[0];
            let $formulario=formulario([
                {
                    nombreLabel:"Escriba los antecedentes No Patologicos",
                    type:"label"
                },{
                nombre:"Antecedentes_No_Patologicos",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",
                value:`${antecedentes_personales_no_patologicos}`
            },
            {
                nombreLabel:"Escriba los antecedentes Patologicos",
                type:"label"
            },
            {
                nombre:"Antecedentes_Patologicos",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",
                value:`${antecedentes_personales_patologicos}`
            },
            {
                nombreLabel:"Escriba los antecedentes Familiares",
                type:"label"
            },
            {
                nombre:"Antecedentes_Familiares",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",
                value:`${antecedentes_familiares}`
            },
            {
                nombreLabel:"Escriba los antecedentes Psicosociales",
                type:"label"
            },
            {
                nombre:"Antecedentes_Psicosociales",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",
                value:`${antecedentes_psicosociales}`
            },
            {
                nombreLabel:"Escriba los Antecedentes preexistentes u otra observación",
                type:"label"
            },
            {
                nombre:"Antecedentes_Preexistentes",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",
                value:`${condiciones_preexistentes}`
            },
            {
                nombre:"Antecedentes",
                type:"hidden",
                value:`${id_Antecedentes}`
            }]);
            let $main=document.getElementById("main");
            $main.innerHTML="";
            
            $main.appendChild($formulario);
        },
        editarUsuario:()=>{
            let {id_usuario,usuario,contraseña,email,nivel}=props[0];
            let $formulario=formulario([
                {
                    nombre:"id_usuario",
                    type:"hidden",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                    value:`${id_usuario}`
                },
                {
                nombre:"Usuario",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                value:`${usuario}`
            },
            {
                nombre:"Contraseña_Actual",
                type:"password",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",

            },
            {
                nombre:"Contraseña_Nueva",
                type:"password",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$",
            },
            {
                nombre:"email",
                type:"text",
                pattern:"^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$",
                value:`${email}`
            }
            ,{
                nombre:"Nivel",
                type:"select",
                id:"Nivel"
                
            }]);
            let $select=$formulario.querySelector("#Nivel"),
            $fragment=document.createDocumentFragment(),
            respuesta=[{id_Rol:0,nombre_Rol:"Paciente"},{id_Rol:1,nombre_Rol:"Doctor"},{id_Rol:2,nombre_Rol:"Administrador"}];
            respuesta.forEach(el => {
            let $option=document.createElement("option");
            $option.value=el.id_Rol;
            $option.textContent=el.nombre_Rol;
            $fragment.appendChild($option);
            });
            $select.appendChild($fragment);
            let $main=document.getElementById("main");
            $main.innerHTML="";
            
            $main.appendChild($formulario);
        }
    };
    let $colocarFormulario=$opcion[opcion]() || "";
    
}