function palindromo()
{
    var N5,i=0,M,n,st,N1="",N2="";
    N5=document.getElementById('n').value;
    var N=N5.toLowerCase();
    
    M=N;
    n=N.length;
    for(i=0;i<n;i++)
    {
        st=N.charAt(i);
        
        if(st!=" " && st!="," && st!=".")
        {
            N1=N1.concat(st);
        }
        

    }
    
    for(i=N1.length;i>=0;i--)
    {
        st=N1.charAt(i);
        N2=N2.concat(st);
    }
    console.log(N2);
    if(N2==N1)
    {
        alert('si es palindromo');
    }
    else
    {
        alert('no es palindromo');
    }

}
function mosca()
{
    var N,i=0,st,N1="",o=0;
    N=document.getElementById('n').value;
    for(i=0;i<N.length;i++)
    {
        st=N.charAt(i);
        if(st==" ")
        {
            o=0;
        }
        else
        {
            if(o==0)
            {
                N1=N1.concat(st);
                o=1;
            }
           
        }
    }
    
    var N2="";
    var N2=N1.toUpperCase();
    alert(N2);
}
function reemplazar()
{
    var N,i,cad,N1,N2,N3;
    
    N=document.getElementById('n').value;
    var bum=N.concat(" ");
    N=bum;
    cad=document.getElementById('n1').value;
    var N5=document.getElementById('n2').value;
    N1="";
    N2="";
    N3="";
    N4="";
    for(i=0;i<=N.length;i++)
    {
        var st=N.charAt(i);
        if(st==" ")
        {
            if(N2==cad)
            {
                N3=N5;
            }
            else
            {
                N3=N2;
            }
            N4=N4.concat(N3);
            N4=N4.concat(" ");
            N2="";
            
        }
        else
        {
            N2=N2.concat(st);console.log(N2);
        }
    }
    alert(N4);
}