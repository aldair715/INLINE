export function fila(datoFila,$i=0)
{
    
        const d=document,
        $tr=d.createElement("tr") ,
        $tdModificar=d.createElement("button"),
        $tdEliminar=d.createElement("button");
        for(let elem in datoFila)
        {
            let $td=d.createElement("td");
            if(elem.includes("id_"))
            {
                $tdModificar.dataset.id=datoFila[elem];
                $tdEliminar.dataset.id=datoFila[elem]; 
                
                $td.textContent=`${$i}`;
                
            }
            else if(elem.includes("cedula"))
            {
                
                $tdModificar.dataset.id=datoFila[elem];
                $tdEliminar.dataset.id=datoFila[elem]; 
               
                let $td1=d.createElement("td"); 
                $td1.textContent=$i;
                $tr.appendChild($td1);
                $td.textContent=datoFila[elem];
                $tr.appendChild($td);
            }
            else if(elem.includes("imagen_"))
            {
                let $img=d.createElement("img");
                $img.width="200px";
                $img.height="200px";
                $img.src=`data:image/jpeg;base64,${datoFila[elem]}`;
                $td.appendChild($img);
            }
            else
            {
                $td.textContent=datoFila[elem];
            } 
            
            $tr.appendChild($td);
            
        }
        $tdModificar.textContent="MODIFICAR";
        $tdModificar.classList.add("btn","btn-primary","edit");
        $tdEliminar.classList.add("btn","btn-danger","delete");
        $tdEliminar.textContent="ELIMINAR";
        let $tdRellenar1=d.createElement("td"),
        $tdRellenar2=d.createElement("td");
        $tdRellenar1.appendChild($tdModificar);
        $tdRellenar2.appendChild($tdEliminar);
        $tr.appendChild($tdRellenar1);
        $tr.appendChild($tdRellenar2);
        return $tr;
        
  
    
    
}