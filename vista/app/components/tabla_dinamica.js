import { ajax } from "../helpers/ajax.js";

export async function tabla_dinamica(){
    const D=document;
    if(sessionStorage.getItem("recetaMedicamento"))
    {
        const $main=document.getElementById("main");
        let $sesiones=JSON.parse(sessionStorage.getItem("recetaMedicamento")),
        $fragment=document.createDocumentFragment(),
        $tabla=document.createElement("table"),
        $thead=document.createElement("thead"),
        $body=document.createElement("tbody");
        $tabla.id="recetaMedica";
        $thead.innerHTML=`
            <tr>
                <th>Nº</th>
                <th>NOMBRE DEL MEDICAMENTO</th>
                <th>DESCRIPCION DEL MEDICAMENTO</th>
                <th>INDICACIONES</th>
                <th>DOSIS</th>
                <th>DIAS</th>
            </tr>
        `;
        for(let i=0;i<$sesiones.length;i++)
        {
            
            let {valor,indicaciones,dosis,dias}=$sesiones[i],
            $tr=document.createElement("tr");
            console.log($sesiones[i]);
            await ajax(
                {
                    url:`/proyecto_emprendimiento/controlador/Medicamento/MedicamentoClase.php?opciones=mostrarUnMedicamento&id=${valor}`,
                    cbSuccess:(resultado)=>{
                        resultado.forEach(el=>{
                            
                            var $val,$descripcion;
        
                            $val=el.nombre_Medicamento;
                            $descripcion=el.descripcion_Medicamento;
                            console.log($val,$descripcion);
                            $tr.innerHTML=`
                                <td>${++i}</td>
                                <td>${$val}</td>
                                <td>${$descripcion}</td>
                                <td>${indicaciones}</td>
                                <td>${dosis}</td>
                                <td>${dias}</td>
                            `
                            $fragment.appendChild($tr)
                        });
                    }
                }
            );
            
            ;
           
            
        }
        $body.appendChild($fragment);
        $tabla.appendChild($thead);
        $tabla.appendChild($body);
        $main.appendChild($tabla);
    
    }
    
}

            
            