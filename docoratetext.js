//alert(Hello World!)


/****************************************** */

// function clickBigDoc (){
//    alert("Hello World!");
// }
// window.onload=function () {
// var dec=document.getElementById('big');
// dec.onclick=click;
// }

/***************************** */

    
 function changeSize(){
 var textar= document.getElementById('textarea');
 textar.style.fontSize = "2em" ;
 }
//  function clickToChangeSize()
//  {
//  var dec=document.getElementById('big');
//  dec.onclick=changeSize;
//  }






function incrSize (){
  let textar=document.getElementById('textarea');
  let style= window.getComputedStyle(textar).getPropertyValue('font-size');
  var Size = parseInt(style)+ 2 +"px"; 
  textar.style.fontSize = Size;
}
function withTimer(){
   changeSize();
  setInterval(incrSize,500);
}
// function incrSizeClick () {
//     let decElem= document.getElementById('big');
//     decElem.onclick=withTimer;
// }
// window.onload=incrSizeClick;

function blingChange() {
  let textar=document.getElementById('textarea')
  let  blingElem=document.getElementById('blin');
  if(blingElem.checked){
  textar.style.fontWeight = "bold" ;
  textar.style.color= "green";
  textar.style.textDecoration= "underline";
  }
  else if(blingElem.onchange==checked.false)
  {
    textar.style.fontWeight='Normal';
    textar.style.color='black';
  }
  alert("Hello World");
 }
 
 window.onload= function (){
 let blingElem=document.getElementById('blin');
 blingElem.onchange=blingChange;
 let decElem= document.getElementById('big');
    decElem.onclick=withTimer;
 }
 

