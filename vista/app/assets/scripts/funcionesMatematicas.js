function Factorial()
{
    var N,i=1,M=1,S=0;
    N=parseInt(document.getElementById('n').value);
    
    
    for(i=1;i<=N;i++)
    {
        M=i*M;
        
       
        
    }
    alert(M);
    
}
function serieFibonacci()
{
    var N,a=-1,b=1,c=0,i;
    N=parseInt(document.getElementById('n').value);
    for(i=1;i<=N;i++)
    {   
        c=a+b;
        a=b;
        b=c;
        document.write(c+'</br>');
    }

}
function numerosPrimos()
{
    var N,i,o=1,c,t;
    var primo;
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
        document.write(o+'</br>');

    }
}
function ecuacion2Grado()
{
    var a,b,c,pot,rest,rest1,div,div1;
    a=parseInt(document.getElementById('n').value);
    b=parseInt(document.getElementById('n').value);
    c=parseInt(document.getElementById('n').value);
    pot=((Math.pow(b,2))-(4*a*c));
    rest=(-b)+pot;
    rest1=(-b)-pot;
    div=rest/(2*a);
    div1=rest1/(2*a);

    document.write(div1+"hola"+div);
}
function numeroPerfecto()
{
    var N,i,S=0;
    N=parseInt(document.getElementById('n').value);
    for(i=1;i<N;i++)
    {
        if(N%i==0)
        {
            S=S+i;
        }
    }
    if(S==N)
    {
        alert('es palindromo');
    }
    else
    {
        alert('no es palindromo');
    }
}
