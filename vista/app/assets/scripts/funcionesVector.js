var vector=[];
function empujar(alt)
{
    var alt;
    alt=vector.push(alt+",");
    console.log(vector); 
}
function empus()
{
    var alt;
    alt=document.getElementById('n').value;
    empujar(alt);
}
function izquierda()
{
   
    var temp=[];
    var i;
    var n=vector.length-1;
    for(i=0;i<vector.length;i++)
    {
        if(i==n)
        {
            temp[i]=vector[0];
        }
        else
        {
            temp[i]=vector[i+1];
        }
    }
    vector=temp;
    console.log(vector);

}
function derecha()
{
    var temp=[];
    var i;
    var n=vector.length-1;
    for(i=0;i<vector.length;i++)
    {
        if(i==0)
        {
            temp[i]=vector[n];
        }
        else
        {
            temp[i]=vector[i-1];
        }
    }
    vector=temp;
    console.log(vector);
}
function MM()
{
    var i,aux,t;
    for(i=0;i<vector.length;i++)
    {
        if(i%2==0)
        {
            t=vector[i];
            aux=t.toUpperCase();
            vector[i]=aux;
        }
        else
        {
            t=vector[i];
            aux=t.toLowerCase();
            vector[i]=aux;
        }
    }
    console.log(vector);
}
