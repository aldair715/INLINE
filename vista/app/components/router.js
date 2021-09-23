import { formulario } from "./formulario.js";
import { tabla } from "./tabla.js";
import { buscarElemento } from "./buscarElemento.js";
import { selects } from "./selects.js";
import { mostrarConsultaPaciente } from "./consulta.js";
const verificarTamañoObjeto=(obj)=>{
    if(typeof(obj)=="object")return Object.keys(obj).length===0;
}

export async function router()
{
    try{
    const D=document,
    W=window,
    $Main=D.getElementById("main");
    let $formulario="";
    let {hash}=location;
    $Main.innerHTML="";
    
        if(hash==="#/mostrarFormulario")
        {
            $formulario=formulario([{
                nombre:"Nombre",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },{
                nombre:"Paterno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
            },{
                nombre:"Materno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
            }]);
            
        }
        else if(hash==="#/registrarMedicamento")
        {
            $formulario=formulario([{
                nombre:"Medicamento",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },{
                nombre:"Descripcion",
                type:"textarea",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            }]);
            
        }
        
        else if(hash==="#/registrarReceta")
        {
            $formulario=formulario([{
                nombre:"indicaciones",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"",
                type:"select",
                id:"select_Medicamento"
            },
            {
                nombre:"dosis",
                type:"textarea",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"dias",
                type:"textarea",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                type:"button",
                id:"medicamentoAñadir",
                value:"AÑADIR MEDICAMENTO"
            }]);
            selects("medicamento");
            
        }
        if(hash==="#/registrarConsulta")
        {
            $formulario=formulario([

            {
                nombre:"Motivo",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                nombreLabel:"ESCRIBA EL MOTIVO O RAZON PARA REALIZAR LA CONSULTA"
            },
            {
                nombreLabel:"ESCRIBA LA FECHA DESEADA DE CONSULTA MEDICA CON EL DOCTOR ",
                type:"label"
            },
            {
                nombre:"Fecha",
                type:"datetime-local",
                
            },
            {
                nombre:"Observaciones",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                nombreLabel:"ESCRIBA SUS OBSERVACIONES, RECOMENDACION O AVISO ANTES DE REALIZAR LA CONSULTA"
            },
            {
                nombre:"id_Doctor",
                type:"hidden",
                value:sessionStorage.getItem("id_doctor")
            },
            {
                nombre:"id_Paciente",
                type:"hidden",
                value:sessionStorage.getItem("id")
            }
            ]);
        }
        if(hash==="#/registrarDoctor")
        {
            $formulario=formulario([{
                nombre:"Matricula",
                type:"number",
                pattern:"^.{1,10}[0-9]+$"
            },
            {
                nombre:"Nombre",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Paterno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Materno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Especialidad",
                type:"select",
                id:"Especialidad"
            },
            {
                nombre:"Direccion",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú0-9\\s]+$"
            },{
                nombre:"Celular",
                type:"number",
                pattern:"^.{1,8}[0-9]+$"
            },
            {
                nombre:"Usuario",
                type:"hidden",
                value:2,
            },
            
            ],
            "multipart/form-data"
            );
            selects("especialidad");
        }
        if(hash==="#/registrarPaciente")
        {
            $formulario=formulario([{
                nombre:"Cedula",
                type:"number",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Nombre",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Paterno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Materno",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Direccion",
                type:"text",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },{
                nombre:"Nacimiento",
                type:"date",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Celular",
                type:"Cedula",
                pattern:"^[0-9]+$"}
            ,
            {
                nombreLabel:"ESCRIBA EL GENERO DEL PACIENTE",
                type:"label"
            },
            {
                nombre:"Genero",
                type:"radio",
                value:"MASCULINO",
                nombreLabel:"MASCULINO"
            },
            
            {
                nombre:"Genero",
                type:"radio",
                value:"FEMENINO",
                nombreLabel:"FEMENINO"
            },
            {
                nombre:"Antecedentes_No_Patologicos",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Patologicos",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Familiares",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Psicosociales",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Preexistentes",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Usuario",
                type:"hidden",
                value:"2"
            }]);
        }
        if(hash==="#/registrarUsuario")
        {
            $formulario=formulario([{
                nombre:"Usuario",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Contraseña",
                type:"text",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"email",
                type:"text",
                pattern:"^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            }
            ,{
                nombre:"Nivel",
                type:"select",
                id:"Nivel"
                
            },{
                type:"label",
                nombreLabel:"COLOQUE LA IMAGEN DEL USUARIO (OPCIONAL)",
                nombre:"imagen",
                type:"file",
                id:"imagen",
                title:"jpg/png/jpeg"
            }],"multipart/form-data");
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
        }
        if(hash===("#/registrarAntecedente"))
        {
            $formulario=formulario([{
                nombre:"Antecedentes_No_Patologicos",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Patologicos",
                type:"textarea",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Familiares",
                type:"text",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Psicosociales",
                type:"text",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },
            {
                nombre:"Antecedentes_Preexistentes",
                type:"text",
                pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
            },]);
            
        }
        if(hash===("#/registrarEspecialidad"))
        {
            $formulario=formulario([{
                nombre:"Especialidad",
                type:"text",
                pattern:"^[A-Za-zÑñáéíóú\\s]+$"
            }]);
        }
        if(hash===("#/mostrarMedicamento"))
        {
            $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL MEDICAMENTO A BUSCAR"));
            $formulario=await tabla(
                "/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarMedicamento",
                ["Nº","Nombre del medicamento","Descripción del medicamento","Estado","MODIFICAR","ELIMINAR"]);
        }
        if(hash===("#/mostrarEspecialidad"))
        {
            $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DE LA ESPECIALIDAD A BUSCAR"));
            $formulario=await tabla(
                "/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=mostrarEspecialidad",
                ["Nº","Nombre de Especialidad","MODIFICAR","ELIMINAR"]);
        }
        if(hash===("#/mostrarDoctor"))
        {
            $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL DOCTOR A BUSCAR, EMPIEZE POR EL PATERNO"));
            $formulario=await tabla(
                "/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=mostrarDoctor",
                ["Nº","Matricula","Nombre del Doctor","Direccion","Celular","Especialidad","MODIFICAR","ELIMINAR"]);
        }
        if(hash===("#/mostrarPaciente"))
        {
            $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL DOCTOR A BUSCAR, EMPIEZE POR EL NOMBRE"));
            $formulario=await tabla(
                "/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=mostrarPaciente",
                ["Nº","Cedula","Nombre del Paciente","Direccion","Celular","Genero","Fecha de Nacimiento","MODIFICAR","ELIMINAR"]);
        }
        if(hash===("#/mostrarAntecedente"))
        {
            $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL PACIENTE AL QUE PERTENECE"));
            $formulario=await tabla(
                "/proyecto_emprendimiento/controlador/Antecedentes/AntecedenteClase.php?opciones=mostrarAntecedente",
                ["Nº","Paciente al que pertenece","MODIFICAR"]);
        }
        if(hash===("#/mostrarUsuario"))
        {
            $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DE USUARIO A BUSCAR"));
            $formulario=await tabla(
                "/proyecto_emprendimiento/controlador/Usuario/Usuario.php?opciones=mostrarUsuario",
                ["Nº","USUARIO","NIVEL","EMAIL","IMAGEN","FECHA DE INGRESO","MODIFICAR","ELIMINAR"]);
        }
        if(hash===("#/realizarConsulta"))
        {
                mostrarConsultaPaciente();
        }
        
        if(verificarTamañoObjeto($formulario))
        {
            $Main.appendChild($formulario);
        }
        //console.log(verificarTamañoObjeto($formulario));
    }catch(error){console.log(error);}
    
    
}
export async function routerPaciente()
{
    try{
        const D=document,
        W=window,
        $Main=D.getElementById("main");
        let $formulario="";
        let {hash}=location;
        $Main.innerHTML="";
        
            if(hash==="#/mostrarFormulario")
            {
                $formulario=formulario([{
                    nombre:"Nombre",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },{
                    nombre:"Paterno",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                },{
                    nombre:"Materno",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                }]);
                
            }
            if(hash==="#/registrarConsulta")
            {
                $formulario=formulario([{
                    nombre:"Observaciones",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Motivo",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Via Ingreso",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Remision",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Fecha",
                    type:"datetime-local",
                    pattern:""
                },
                {
                    nombre:"Observaciones",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Diagnostico",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                }]);
            }
            if(hash===("#/mostrarMedicamento"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL MEDICAMENTO A BUSCAR"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarMedicamento",
                    ["Nº","Nombre del medicamento","Descripción del medicamento","Estado","MODIFICAR","ELIMINAR"]);
            }
            if(hash===("#/mostrarEspecialidad"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DE LA ESPECIALIDAD A BUSCAR"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=mostrarEspecialidad",
                    ["Nº","Nombre de Especialidad","MODIFICAR","ELIMINAR"]);
            }
            if(hash===("#/mostrarDoctor"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL DOCTOR A BUSCAR, EMPIEZE POR EL PATERNO"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=mostrarDoctor",
                    ["Nº","Matricula","Nombre del Doctor","Direccion","Celular","Especialidad","MODIFICAR","ELIMINAR"]);
            }
            if(hash===("#/mostrarAntecedente"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL PACIENTE AL QUE PERTENECE"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Antecedentes/AntecedenteClase.php?opciones=mostrarAntecedente",
                    ["Nº","Paciente al que pertenece","MODIFICAR"]);
            }
            $Main.appendChild($formulario);
        }catch(error){console.log(error);}
        
}
export async function routerDoctor()
{
    try{
        const D=document,
        W=window,
        $Main=D.getElementById("main");
        let $formulario="";
        let {hash}=location;
        $Main.innerHTML="";
        
            if(hash==="#/mostrarFormulario")
            {
                $formulario=formulario([{
                    nombre:"Nombre",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },{
                    nombre:"Paterno",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                },{
                    nombre:"Materno",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$",
                }]);
                
            }         
            else if(hash==="#/registrarReceta")
            {
                $formulario=formulario([{
                    nombre:"indicaciones",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"",
                    type:"select",
                    id:"select_Medicamento"
                },
                {
                    nombre:"dosis",
                    type:"textarea",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"dias",
                    type:"textarea",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    type:"button",
                    id:"medicamentoAñadir",
                    value:"AÑADIR MEDICAMENTO"
                }]);
                selects("medicamento");
                
            }
            if(hash==="#/registrarConsulta")
            {
                $formulario=formulario([{
                    nombre:"Observaciones",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Motivo",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Via Ingreso",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Remision",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Fecha",
                    type:"datetime-local",
                    pattern:""
                },
                {
                    nombre:"Observaciones",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Diagnostico",
                    type:"text",
                    pattern:"^[A-Za-zÑñáéíóú\\s]+$"
                }]);
            }
            if(hash===("#/registrarAntecedente"))
            {
                $formulario=formulario([{
                    nombre:"Antecedentes_No_Patologicos",
                    type:"textarea",
                    pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Antecedentes_Patologicos",
                    type:"textarea",
                    pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Antecedentes_Familiares",
                    type:"text",
                    pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Antecedentes_Psicosociales",
                    type:"text",
                    pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
                },
                {
                    nombre:"Antecedentes_Preexistentes",
                    type:"text",
                    pattern:"^[0-9A-Za-zÑñáéíóú\\s]+$"
                },]);
                
            }
            if(hash===("#/mostrarMedicamento"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL MEDICAMENTO A BUSCAR"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarMedicamento",
                    ["Nº","Nombre del medicamento","Descripción del medicamento"]);
            }
            
            if(hash===("#/mostrarDoctor"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL DOCTOR A BUSCAR, EMPIEZE POR EL PATERNO"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=mostrarDoctor",
                    ["Nº","Matricula","Nombre del Doctor","Direccion","Celular","Especialidad"]);
            }
            if(hash===("#/mostrarPaciente"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL DOCTOR A BUSCAR, EMPIEZE POR EL NOMBRE"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Paciente/PacienteClase.php?opciones=mostrarPaciente",
                    ["Nº","Cedula","Nombre del Paciente","Direccion","Celular","Genero","Fecha de Nacimiento"]);
            }
            if(hash===("#/mostrarAntecedente"))
            {
                $Main.appendChild(buscarElemento("COLOQUE EL NOMBRE DEL PACIENTE AL QUE PERTENECE"));
                $formulario=await tabla(
                    "/proyecto_emprendimiento/controlador/Antecedentes/AntecedenteClase.php?opciones=mostrarAntecedente",
                    ["Nº","Paciente al que pertenece","MODIFICAR"]);
            }
            
        }catch(error){console.log(error);}
        
}