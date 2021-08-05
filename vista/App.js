import { header } from "./app/components/header.js";
import { Main } from "./app/components/main.js";
import { router } from "./app/components/router.js";

const d=document;
export function App(){
    const $ROOT=document.getElementById("root");
    $ROOT.innerHTML=``;
    $ROOT.appendChild(header());
    $ROOT.appendChild(Main());
    router();
}