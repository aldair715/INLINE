export function buscarElemento(title="")
{
    const d=document,
    $search=d.createElement("input"),
    $form=d.createElement("form");
    $form.classList.add("md-form","mt-0");
    $search.type="search";
    $search.classList.add("search","form-control");
    $search.name="busqueda";
    $search.placeholder=`${title}`;
    $search.autocomplete="off";
    $form.classList.add("busqueda");
    $form.appendChild($search);
    
    return $form;
}