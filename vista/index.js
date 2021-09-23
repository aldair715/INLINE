import { App } from "./App.js";
import { onClickear, onKeyDown } from "./app/components/eventoClick.js";
import { onSubmit } from "./app/components/eventoSubmit.js";


const D=document,
W=window;
D.addEventListener("DOMContentLoaded",App);
W.addEventListener("hashchange",App);
D.addEventListener("click",e=>{
    onClickear(e.target);
});
D.addEventListener("keyup",e=>{
    onKeyDown(e.target);
});
D.addEventListener("submit",e=>{
    e.preventDefault();
    onSubmit(e.target);
});
