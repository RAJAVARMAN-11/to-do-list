let taskdiv=document.getElementById("todo");
let input1=document.getElementById("textbox");
let addbut =document.getElementById("add");
addbut.onclick = function()
{
    let par=document.createElement("p");
    par.innerHTML=`${input1.value} <button id="del" onclick="delfun(event)"> delete</button>`;
    
    taskdiv.appendChild(par);
    input1.value="";
    par.onclick=function()
    {
       par.style.textDecoration='line-through';
       par.style.color='grey';
       par.style.fontFamily='cursive';
    }
    
   
}
function delfun(event)
{
    event.target.parentElement.remove();
}