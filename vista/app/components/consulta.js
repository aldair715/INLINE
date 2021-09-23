
import { ajax } from "../helpers/ajax.js";
const tabla=(input)=>{
    let $table=document.createElement("table");
    try{
        
            let $tbody=document.createElement("tbody");
            
            input.forEach(el=>{
                let $tr=document.createElement("tr"),
                $td=document.createElement("td"),
                $td1=document.createElement("td"),
                $td2=document.createElement("td"),
                $boton=document.createElement("button");
                $td.textContent=el.nombre;
                $td1.textContent=el.nombre_Especialidad;
                $boton.textContent="RESERVAR CITA";
                $boton.dataset.id=el.id_Doctor;
                $boton.classList.add("btn","btn-danger","reservarDoctor");
                $td2.appendChild($boton);
                $tr.appendChild($td);
                $tr.appendChild($td1);
                $tr.appendChild($td2);
                $tbody.appendChild($tr);
            });
            $table.classList.add("table");
            $table.appendChild($tbody);
            return $table;
    }catch(error)
    {
        console.log(error);
        return $table;
    }
    
}
const mostrarDoctores=async()=>{
    //realizamos conexion ajax
    await ajax({url:"/proyecto_emprendimiento/controlador/Doctor/DoctorClase.php?opciones=mostrarDoctor",cbSuccess:(post)=>{
        console.log(post);
        let $salida=tabla(post);
        let $Main=document.getElementById("main");
        $Main.appendChild($salida);
    }});

}
export function mostrarConsultaPaciente()
{
    mostrarDoctores();
}
