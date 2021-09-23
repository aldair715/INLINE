const d=document;
export async function ajax(props)
{
    //sacamos en varias variables a nuestro props
    let {url,cbSuccess}=props;
    
    await fetch(url,{
        method:"GET",
        headers:{"Content-Type":"application/json;charset=utf-8"},
    }).then(
        res=>res.ok
        ?res.json()
        :Promise.reject(res)
    ).then(json=>{
        cbSuccess(json);
    }).catch(error=>{
        let mensaje=error || "OCURRIO UN ERROR";
        console.log(error);
        document.getElementById("main").innerHTML=`
        <div class="error_DOM">
            <h1>
                ERROR: ${error.status}
                <br>
                ${mensaje}
            </h1>
        </div>`;
        //d.querySelector(".loader").style.display=`none`;
    })
    
}
export async function ajaxBody(props)
{
    //sacamos en varias variables a nuestro props
    try{
        let {url,method,body,cbSuccess}=props,
        option={method,body};
        let res=await fetch(url,option);
        let json=await res.json();
        if(!res.ok){throw{status:res.status,statusText:res.statusText};
        }
        cbSuccess(json);
        
        
    }catch(error){
        console.log(error);
    }
    
}