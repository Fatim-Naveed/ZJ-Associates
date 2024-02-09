(function()
{
"use strict"

// click action for menu of navbar
let onclickingRight=document.getElementById('subMenuRight')
let Righticon =document.getElementById('RightIcon');

Righticon.addEventListener('click', function (e) 
    {
        onclickingRight.classList.toggle("hide-menu");
    })
    // clicking anywhere else closes it
    document.addEventListener('click',function(evt)
    { 
        if(!Righticon.contains(evt.target) && evt.target!==Righticon)
        {
           onclickingRight.classList.add("hide-menu");
        }       
    })
    
    
    let onclickingLeft=document.getElementById('subMenuLeft')
    let Lefticon =document.getElementById('LeftIcon');
    Lefticon.addEventListener('click', function (e) 
    {
        onclickingLeft.classList.toggle("hide-menu");
    })
    // clicking anywhere else closes it
    document.addEventListener('click',function(evt)
    { 
        if(!Lefticon.contains(evt.target) && evt.target!==Lefticon)
        {
           onclickingLeft.classList.add("hide-menu")
        }       
    })
})();