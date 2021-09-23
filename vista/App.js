import { header } from "./app/components/header.js";
import { Main } from "./app/components/main.js";
import { router, routerDoctor, routerPaciente } from "./app/components/router.js";

const d=document;
export function App(){
    const $ROOT=document.getElementById("root");
    $ROOT.innerHTML=``;
    $ROOT.appendChild(Main());
    let nivel=sessionStorage.getItem("nivel");
        switch (nivel)
        {
            case "0":
                routerPaciente();
            break;
            case "1":
                routerDoctor();
            break;
            case "2":
                router();
            break;
        }
    
    
    
   
    
}