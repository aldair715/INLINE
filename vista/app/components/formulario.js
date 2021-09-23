export function formulario(elementosFormulario,option=""){
    try{
        const d=document;
        let $fragment=d.createDocumentFragment(),
        $form=d.createElement("form"),
        $submit=d.createElement("button");
        $form.id="formulario";
        if(option!=="")$form.enctype=option;
        elementosFormulario.forEach(el => {
            if(el.type==="textarea")
            {
                let $textarea=d.createElement("textarea"),
                $div=d.createElement("div");
                $textarea.required=true;
                $textarea.name=el.nombre;
                $textarea.id=el.nombre;
                $textarea.cols=50;
                $textarea.rows=5;
                $textarea.placeholder=`Escribe tu ${el.nombre}`;
                $textarea.dataset.pattern=`${el.pattern}`;
                (el.value)?$textarea.textContent=el.value:$textarea.value="";
                $div.classList.add("form-group");
                $textarea.classList.add("form-control");
                $div.appendChild($textarea);
                $form.appendChild($div);    
            }
            else if(el.type==="hidden")
            {
                let $input=d.createElement("input");               
                $input.name=el.nombre;
                $input.id=el.nombre;
                $input.type=el.type;
                (el.value)?$input.value=el.value:$input.value="";
                $input.required=true;
                $form.appendChild($input);
            }
            else if(el.type==="select")
            {
                let $select=d.createElement("select"),$label=d.createElement("label"),
                $div=d.createElement("div");
                $label.textContent=`Escoge la/el ${el.nombre}`;
                $select.id=el.id;
                $select.name=el.id;
                $select.required=true;
                $select.classList.add("form-control");
                $div.classList.add("form-group");
                $div.appendChild($label);
                $div.appendChild($select);
                $form.appendChild($div);
            }
            else if(el.type==="button")
            {
                let $button=d.createElement("button");
                $button.id=el.id;
                if(el.dato)
                {
                    $button.dataset.id=el.dato["id"];
                    $button.dataset.id_principal=el.dato["id_principal"];
                }
                $button.textContent=el.value;
                $button.type="button";
                $button.classList.add("btn","btn-dark");
                $form.appendChild($button);
            }
            else if(el.type==="label")
            {
                let $label=d.createElement("label"),
                $br=d.createElement("br");
                $label.textContent=`${el.nombreLabel}`;
                $form.appendChild($label);
                $form.appendChild($br);
                
            }
            else if(el.type==="radio")
            {
                let $label=d.createElement("label"),
                $input=d.createElement("input"),
                $div=d.createElement("div");               
                $input.name=el.nombre;
                $input.id=el.nombre;
                $input.type=el.type;
                (el.value)?$input.value=el.value:$input.value="";
                $input.title=`Escriba bien la entrada ${el.nombre}`;
                $input.required=true;
                ;
                $input.classList.add("form-check-input");
                //$div.classList.add("form-check");
                //$label.classList.add("form-check-label"); 
                $label.textContent=`${el.nombreLabel}`;
               
               
                $div.appendChild($label); $div.appendChild($input);
                $form.appendChild($input);
                $form.appendChild($label);
            }
            else if(el.type==="file")
            {
                let $label=d.createElement("label"),
                $input=d.createElement("input");
                $label.textContent=`${el.nombreLabel}`;
                $input.name=el.nombre;
                $input.id=el.nombre;
                $input.type=el.type;
                $input.required=true;
                $input.title=`Coloque un archivo ${el.title}`;
                $input.accept=el.validacion;
                $form.appendChild($label);
                $form.appendChild($input);
            }
            else if(el.type==="datetime-local")
            {
                const fecha=new Date();
                console.log(fecha);
                let mes=(fecha.getMonth()+1<10)?`0${fecha.getMonth()+1}`:`${fecha.getMonth()+1}`,
                dia=(fecha.getDate()<10)?`0${fecha.getDate()}`:`${fecha.getDate()}`;
                let $input=d.createElement("input");
                $input.name=el.nombre;
                $input.id=el.nombre;
                $input.type=el.type;
                $input.value=`${fecha.getFullYear()}-${mes}-${dia}T${fecha.getHours()}:${fecha.getMinutes()}`;
                $input.min=`${fecha.getFullYear()}-${mes}-${dia}T00:00`;
                (el.value)?$input.value=el.value:$input.value=`${fecha.getFullYear()}-${mes}-${dia}T${fecha.getHours()}:${fecha.getMinutes()}`;
                $input.autocomplete=false;
                $input.required=true;
                $input.classList.add("form-control");
                $form.appendChild($input);
                
            }
            else{
                let $label=d.createElement("label"),
                $input=d.createElement("input"),
                $div=d.createElement("div");               
                $input.name=el.nombre;
                $input.id=el.nombre;
                $input.type=el.type;
                (el.value)?$input.value=el.value:$input.value="";
                $input.placeholder=`Escriba ${el.nombre}`;
                $input.title=`Escriba bien la entrada ${el.nombre}`;
                $input.autocomplete=false;
                $input.pattern=el.pattern;
                $input.required=true;
                $label.textContent=`${el.nombreLabel}`;
                $div.classList.add("form-group");
                $input.classList.add("form-control");
                $div.appendChild($label);
                $div.appendChild($input);
                $form.appendChild($div);
            }
            
               
        });
        $submit.classList.add("btn","btn-primary","btn-block");
        $submit.type="submit";
        $submit.textContent="ENVIAR";
        $form.appendChild($submit);
        $fragment.appendChild($form);  
        return $fragment;
    }catch(error)
    {
        console.log(error);
    }
}