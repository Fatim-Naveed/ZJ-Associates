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
document.getElementById('imageid4').addEventListener('click',function(e)
{
    document.getElementById('imageid4').classList.toggle("addhov");
    document.getElementById('textImageid4').classList.toggle("addtexthovering");
    document.getElementById('scrollmenu4').classList.toggle("UnhideText");
    document.getElementById("subtexthide4").classList.toggle("UnhideText");
    document.getElementById("subtexthide4").classList.toggle("UnhideText");
    let subclasses=document.getElementById("scrollmenu4");
        for(let i=2;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
})
document.getElementById('imageid5').addEventListener('click',function(e)
{
    document.getElementById('imageid5').classList.toggle("addhov");
    document.getElementById('textImageid5').classList.toggle("addtexthovering");
    document.getElementById('scrollmenu5').classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG5text1").classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG5text2").classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG5text3").classList.toggle("UnhideText");
    document.getElementById("subtexthide5").classList.toggle("UnhideText");
})
document.getElementById('imageid6').addEventListener('click',function(e)
{
    document.getElementById('imageid6').classList.toggle("addhov");
    document.getElementById('textImageid6').classList.toggle("addtexthovering");
    document.getElementById('scrollmenu6').classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG6text1").classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG6text2").classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG6text3").classList.toggle("UnhideText");
    document.getElementById("subtexthide6").classList.toggle("UnhideText");
})
document.getElementById('imageid7').addEventListener('click',function(e)
{
    document.getElementById('imageid7').classList.toggle("addhov");
    document.getElementById('textImageid7').classList.toggle("addtexthovering");
    document.getElementById('scrollmenu7').classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG7text1").classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG7text2").classList.toggle("UnhideText");
    document.getElementById("AfterClickIMG7text3").classList.toggle("UnhideText");
    document.getElementById("subtexthide7").classList.toggle("UnhideText");
})
document.getElementById('imageid8').addEventListener('click',function(e)
{
    document.getElementById('imageid8').classList.toggle("addhov");
    document.getElementById('textImageid8').classList.toggle("addtexthovering");
})
document.getElementById('imageid9').addEventListener('click',function(e)
{
    document.getElementById('imageid9').classList.toggle("addhov");
    document.getElementById('textImageid9').classList.toggle("addtexthovering");
})
    
})();