export function formulario(elementosFormulario){
    try{
        const d=document;
        let $fragment=d.createDocumentFragment(),
        $form=d.createElement("form"),
        $submit=d.createElement("input");
        elementosFormulario.forEach(el => {
            if(el.type==="textarea")
            {
                let $textarea=d.createElement("textarea");
                $textarea.required=true;
                $textarea.name=el.nombre;
                $textarea.cols=50;
                $textarea.rows=5;
                $textarea.placeholder=`Escribe tu ${el.nombre}`;
                $textarea.dataset.pattern=`${el.pattern}`;
                $form.appendChild($textarea);    
            }
            else{
                let $label=d.createElement("label"),
                $input=d.createElement("input");
                $input.name=el.nombre;
                $input.type=el.type;
                $input.placeholder=`Escriba el ${el.nombre}`;
                $input.title=`Escriba bien la entrada ${el.nombre}`;
                $input.pattern=el.pattern;
                $input.required=true;
                $label.textContent=`Escriba tu ${el.nombre}`;
                $form.appendChild($label);
                $form.appendChild($input);
            }
               
        });
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