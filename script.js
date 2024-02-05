(function()
{
"use strict"
let onclickingRight=document.getElementById('subMenuRight')
    document.getElementById('RightIcon').addEventListener('click', function (e) 
    {
        onclickingRight.classList.toggle("open-menu");
    })
let onclickingLeft=document.getElementById('subMenuLeft')
    document.getElementById('LeftIcon').addEventListener('click', function (e) 
    {
        onclickingLeft.classList.toggle("open-menu");
    })
})();