function fechaHora()
{
    var day,month,year,day1;
    var N;
    N=new Date();
    day=N.getDay();
    month=N.getMonth();
    year=N.getFullYear();
    day1=N.getDate();
    var hora=N.getHours();
    var cad="La Paz",t1="";
    switch(day)
    {
        case 0:
            t1="domingo";
        break;
        case 1:
            t1="lunes";
        break;
        case 2:
            t1="martes";
        break;
        case 3:
            t1="miercoles";
        break;
        case 4:
            t1="jueves";
        break;
        case 5:
            t1="viernes";
        break;
        case 6:
            t1="sabado";
        break;
        default:
            t1="no definido";
        break;
        
    }
    cad=cad.concat(" "+t1+" "+ day1 + " de " + month+" de "+year );
    alert(cad);
}
function reloj()
{
    var ahora,hora,min,sec;
    ahora=new Date();
    hora=ahora.getHours();
    min=ahora.getMinutes();
    sec=ahora.getSeconds();
    min=verificatiempo(min);
    sec=verificatiempo(sec);
    document.write(hora+" : "+min+" :"+sec+"</br>");
    var tiempo=setTimeout(function(){reloj()},500);
}
function verificatiempo(tiem)
{
    if(tiem<10)
    {
        tiem=" 0"+ tiem;

    }
    return tiem;
}
function verificacion()
{
    var tiempo1,tiempo2;
    var tiempo1=new Date();
    var resultado;
    resultado=numerosPrimos();
    tiempo2=new Date();
    var final;
    final=tiempo2-tiempo1;
    alert("el tiempo que corrio el algoritmo fue:"+final+"milisegundos");   
}
function numerosPrimos()
{
    var N,i,o=1,c,t;
    var primo;
    var vector=[];
    N=parseInt(document.getElementById('n').value);
    for(i=1;i<=N;i++)
    {
        primo=false;
        while(primo==false)
        {
            t=0;
            o++;
            for(c=2;c<o;c++)
            {
                if(o%c==0)
                {
                    t++;
                }
            }
            if(t==0)
            {
                primo=true;
            }
            
        }
        o=vector.push(o);
        document.write(o+"</br>");
    }
    return vector;
}