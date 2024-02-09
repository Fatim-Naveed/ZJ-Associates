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
    
    
    // removing date from image on small screen
    
    document.getElementById('imageid1').addEventListener('click',function(e)
    {
        document.getElementById('textImageid1').classList.toggle("addtexthovering");
        let image=document.getElementById('imageid1');
        image.classList.toggle("addhov");
        document.getElementById('scrollmenu1').classList.toggle("UnhideText");
        document.getElementById("subtexthide1").classList.toggle("UnhideText");
        let subclasses=document.getElementById("scrollmenu1");
        for(let i=2;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
        
})
document.getElementById('imageid2').addEventListener('click',function(e)
{
    document.getElementById('imageid2').classList.toggle("addhov");
    document.getElementById('textImageid2').classList.toggle("addtexthovering");
    document.getElementById('scrollmenu2').classList.toggle("UnhideText");
    document.getElementById("subtexthide2").classList.toggle("UnhideText");
    let subclasses=document.getElementById("scrollmenu2");
        for(let i=2;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
    
})
document.getElementById('imageid3').addEventListener('click',function(e)
{
    document.getElementById('imageid3').classList.toggle("addhov");
    document.getElementById('textImageid3').classList.toggle("addtexthovering");
    document.getElementById('scrollmenu3').classList.toggle("UnhideText");
    document.getElementById("subtexthide3").classList.toggle("UnhideText");
    document.getElementById("subtexthide3").classList.toggle("UnhideText");
    let subclasses=document.getElementById("scrollmenu3");
        for(let i=2;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
    
})
})();