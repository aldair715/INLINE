import { ajax } from "../helpers/ajax.js";
import { fila } from "./fila.js";

export async function tabla(urlEnviar,opcionesTHeader)
{
    let $fragmento=document.createElement("table");
    $fragmento.classList.add("table","table-dark","table-hover");
    $fragmento.id="tabla_Vista";
    if(typeof(opcionesTHeader)==="object")
    {
        let $thead=document.createElement("thead"),
        $tr=document.createElement("tr");
        try{
            opcionesTHeader.forEach($th=>{
                let th=document.createElement("th");
                th.textContent=$th;
                $tr.appendChild(th);
            });
            
            $thead.appendChild($tr);
            $fragmento.appendChild($thead);
            await ajax(
                {
                    url:urlEnviar,
                    method:"GET",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    cbSuccess:(posts)=>{
                        
                        let $tbody=document.createElement("tbody"),
                        $i=1;
                        posts.forEach(el=>{
                            let $fila=fila(el,$i);
                            $i++;
                            $tbody.appendChild($fila);
                        });
                        $fragmento.appendChild($tbody);
                    }
                }
            );

            return $fragmento;
        }catch(error)
        {
            console.log(error);
        }
    }
    
}