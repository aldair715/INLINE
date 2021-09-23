import { ajax } from "../helpers/ajax.js";

export function selects(id)
{
    switch(id)
    {
        case "medicamento":
            
            ajax(
                {
                    url:"/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarMedicamento",
                    cbSuccess:(respuesta)=>{
                        let $select=document.getElementById("select_Medicamento"),
                        $fragment=document.createDocumentFragment();
                        respuesta.forEach(el => {
                            let $option=document.createElement("option");
                            $option.value=el.id_Medicamento;
                            $option.textContent=el.nombre_Medicamento;
                            $fragment.appendChild($option);
                        });
                        $select.appendChild($fragment);
                    }
                }
            );
           
        break;
        case "especialidad":
            ajax(
                {
                    url:"/proyecto_emprendimiento/controlador/Especialidad/EspecialidadClase.php?opciones=mostrarEspecialidad",
                    cbSuccess:(respuesta)=>{
                        let $select=document.getElementById("Especialidad"),
                        $fragment=document.createDocumentFragment();
                        respuesta.forEach(el => {
                            let $option=document.createElement("option");
                            $option.value=el.id_Especialidad;
                            $option.textContent=el.nombre_Especialidad;
                            $fragment.appendChild($option);
                        });
                        
                        $select.appendChild($fragment);
                    }
                }
            );
        break;
        case "nivel":
                        
                        let $select=document.getElementById("Nivel"),
                        $fragment=document.createDocumentFragment(),
                        respuesta=[{id_Rol:0,nombre_Rol:"Paciente"},{id_Rol:1,nombre_Rol:"Doctor"},{id_Rol:2,nombre_Rol:"Administrador"}];
                        respuesta.forEach(el => {
                            let $option=document.createElement("option");
                            $option.value=el.id_Rol;
                            $option.textContent=el.nombre_Rol;
                            $fragment.appendChild($option);
                        });
                        console.log('hola');
                        console.log(document.getElementById("formulario"),$fragment);
                        
                        //$select.appendChild($fragment);
        break;
        default:

        break;
    }
    
}
