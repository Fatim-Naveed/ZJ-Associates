(function()
{
"use strict"
//scroll anmation
let imagebox=document.querySelectorAll('.image')
let Textbox=document.querySelectorAll('.textImage')
window.addEventListener('scroll', function()
{
     const trigger=window.innerHeight/5*4;
    //  console.log(trigger);
     
     imagebox.forEach((image,i) => 
    {
        const imagetop=image.getBoundingClientRect().top;
        // console.log(imagetop)
        // console.log(i+1)
            if(imagetop < 122 * (i+1))
            {
                image.classList.add("zoomImage");
                Textbox[i].classList.add("zoomtext");
                
            }
            else 
            {
                image.classList.remove("zoomImage");
                Textbox[i].classList.remove("zoomtext");
             
            }
     });


    
})
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
    
function myMobileView(widthX)
{
    if(widthX.matches)
    {
        let Images= document.querySelectorAll('.images');
        
        for(let i=0;i<Images.length;i++)
        {           
            const newdiv=document.createElement("div");
            const temp=document.createElement("div");

            newdiv.classList.add('myMobileView')
            
            if(Images[i].children[0].className == "myMobileView")
            {
                continue;
            }
            newdiv.innerHTML= Images[i].innerHTML;
            temp.innerHTML= Images[i].innerHTML;
            let childCount=newdiv.childElementCount

            for(let j=0;j<childCount-2;j++)
            {
                 newdiv.removeChild(newdiv.lastElementChild)
                
            }
            for(let j=0;j<2;j++)
            {
                temp.removeChild(temp.firstElementChild)   
                Images[i].removeChild(Images[i].firstElementChild)
            }
           
            // console.log(newdiv)
            // console.log(temp.innerHTML)
   
            // console.log(Images[i])
              Images[i].insertBefore(newdiv,Images[i].firstChild);

            //    console.log(Images[i])
        }
    }
    else
    {
        console.log("out of mobile view");
        
    }

}
let widthX=window.matchMedia('(max-width:650px)')
    myMobileView(widthX);
    widthX.addEventListener('change',function()
    {
       myMobileView(widthX);
    })
// removing date from image on small screen
    
document.getElementById('imageid1').addEventListener('click',function(e)
{
    // console.log("in");
        document.getElementById('textImageid1').classList.toggle("addtexthovering");
        document.getElementById('textImageid1').classList.remove("zoomtext");
        document.getElementById('imageid1').classList.toggle("addhov");
        document.getElementById('imageid1').classList.remove("zoomImage");
        
        document.getElementById('scrollmenu1').classList.toggle("UnhideText");
        document.getElementById("subtexthide1").classList.toggle("UnhideText");
        let subclasses=document.getElementById("scrollmenu1");
        for(let i=1;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
        
})
document.getElementById('imageid2').addEventListener('click',function(e)
{
    // console.log("in");
        document.getElementById('textImageid2').classList.toggle("addtexthovering");
        document.getElementById('textImageid2').classList.remove("zoomtext");
        document.getElementById('imageid2').classList.toggle("addhov");
        document.getElementById('imageid2').classList.remove("zoomImage");
        
        document.getElementById('scrollmenu2').classList.toggle("UnhideText");
        document.getElementById("subtexthide2").classList.toggle("UnhideText");
        let subclasses=document.getElementById("scrollmenu2");
        for(let i=1;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
        
})
document.getElementById('imageid3').addEventListener('click',function(e)
{
    // console.log("in");
        document.getElementById('textImageid3').classList.toggle("addtexthovering");
        document.getElementById('textImageid3').classList.remove("zoomtext");
        document.getElementById('imageid3').classList.toggle("addhov");
        document.getElementById('imageid3').classList.remove("zoomImage");
        
        document.getElementById('scrollmenu3').classList.toggle("UnhideText");
        document.getElementById("subtexthide3").classList.toggle("UnhideText");
        let subclasses=document.getElementById("scrollmenu3");
        for(let i=1;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
        
})
document.getElementById('imageid4').addEventListener('click',function(e)
{
    // console.log("in");
        document.getElementById('textImageid4').classList.toggle("addtexthovering");
        document.getElementById('textImageid4').classList.remove("zoomtext");
        document.getElementById('imageid4').classList.toggle("addhov");
        document.getElementById('imageid4').classList.remove("zoomImage");
        
        document.getElementById('scrollmenu4').classList.toggle("UnhideText");
        document.getElementById("subtexthide4").classList.toggle("UnhideText");
        let subclasses=document.getElementById("scrollmenu4");
        for(let i=1;i<subclasses.childElementCount;i++)
        {
            document.getElementById(subclasses.children[i].id).classList.toggle("UnhideText");
        }
        
})

    
})();