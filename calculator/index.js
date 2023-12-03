let fOperand="";
let sOperand="";
let dotFoperand=false;
let dotSoperand=false;
let optor="";

function func(ids)
{   
    let val=document.getElementById(ids).innerHTML;
    const fopele=document.getElementById("output-item1");
    const sopele=document.getElementById("output-item3");

    if(val==".")
    {
        if(optor!="" && !dotSoperand)
        {
            sOperand+=".";
            dotSoperand=true;
            sopele.innerHTML=sOperand;
        }
        else if(!dotFoperand && optor==""){
            fOperand+=".";
            dotFoperand=true;
            fopele.innerHTML=fOperand;
        }
    }
    else{
        if(optor=="")
    {
        fOperand=fOperand+val;
        fopele.innerHTML=fOperand;
    }
    else 
    {
        sOperand=sOperand+val;
        sopele.innerHTML=sOperand;
    }
    }
}

function func2(ids)
{
    let val=document.getElementById(ids).innerHTML;
    const fopele=document.getElementById("output-item1");
    const sopele=document.getElementById("output-item3");
    const opele=document.getElementById("output-item2");

    switch (val)
    {
        case "AC":
        {
            // fopele.innerHTML="";
            // sopele.innerHTML="";
            fOperand="",sOperand="";
            optor="";
            dotFoperand=false;
            dotSoperand=false;
            break;
        }
        case "B":
        {
          if(sOperand!="")
          {
              if(sOperand.charAt(sOperand.length-1)==".")
                dotSoperand=false;
              sOperand=sOperand.substr(0,(sOperand.length)-1);
          }
          else if(optor!="")
          {
              optor="";
          }
          else if(fOperand!="")
          {  
              if(fOperand.charAt(fOperand.length-1)==".")
                dotFoperand=false;
              fOperand=fOperand.substr(0,(fOperand.length)-1);
          }
            break;
        }
        case "=":
        {
           if(optor!="" && sOperand!="")
             doMath();
           sOperand="";
           dotSoperand=false;
           optor="";
           break;
        }
        default:
        {
          if(optor!="" && sOperand!="")
           {
               doMath();
           }
           dotFoperand=false;
           if(fOperand.includes("."))
              dotFoperand=true;
           optor=val;
           dotSoperand=false;
           sOperand="";
        }
    }
    fopele.innerHTML=fOperand;
    sopele.innerHTML=sOperand;
    opele.innerHTML=optor;
}

function doMath()
{
    switch(optor)
    {
      case "+":
      {
         fOperand=String(Number(fOperand)+Number(sOperand));
         break;
      }
      case "-":
      {
        fOperand=String(Number(fOperand)-Number(sOperand));
         break;
      }
      case "*":
      {
        fOperand=String(Number(fOperand)*Number(sOperand));
         break;
      }
      default:
      {
        fOperand=String(Number(fOperand)/Number(sOperand));
      }
   }
}