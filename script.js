


function typeNumber(elm){

    let number=document.getElementById('button-1');
    let screen= document.getElementsByClassName('cal-screen')[0];
    // screen.innerHTML=elm.innerText;
  if(screen.innerText==="ERROR"){
    screen.innerHTML=""
  }
    screen.innerHTML= screen.innerText+elm.innerText;
}
function typeDot(elm){
    let number=document.getElementById('button-dot');
    let screen= document.getElementsByClassName('cal-screen')[0];
    // screen.innerHTML=elm.innerText;
    if(screen.innerText==="ERROR" || screen.innerText==="NoN"  ){
        screen.innerHTML=""
      }
    let value = screen.innerText;

//   if()
if( value.slice(-1)==="."){
    screen.innerHTML= screen.innerText+"";

}
else{

    screen.innerHTML= screen.innerText+number.innerText;
}

}
function typeOperetion(elm){
    let screen= document.getElementsByClassName('cal-screen')[0];
    // screen.innerHTML=elm.innerText;
    let value = screen.innerText;
  let index=value.length-1;
   let last=screen.innerText.charAt(index);
    if(screen.innerText.charAt(index)==="+" || screen.innerText.charAt(index)==="-" || screen.innerText.charAt(index)==="*" || screen.innerText.charAt(index)==="/"  ){
        // screen.innerHTML=value.replace(last,elm.innerText);
  }
  else if(screen.innerText.length == 0 && elm.innerText!="-"){
    screen.innerHTML= "";

  }
  else if(screen.innerText==="ERROR" || screen.innerText==="NoN" ){
    screen.innerHTML= "";

  }
  else{elm.innerText
    screen.innerHTML= screen.innerText+elm.innerText;
}
}


function allClear(){
    let screen= document.getElementsByClassName('cal-screen')[0];
   screen.innerHTML="";

}
function preClear(){
    let screen= document.getElementsByClassName('cal-screen')[0];
    // var string = 'Scaler Academy';
    if(screen.innerText==="ERROR" || screen.innerText==="NoN" ){
        screen.innerHTML=""
      }

screen.innerText = screen.innerText.slice(0,-1);
// console.log(string); 
}
function equal(){
    let screen= document.getElementsByClassName('cal-screen')[0];
    let value = screen.innerText;
    try{
    if(value.includes("+") || value.includes("-") ||  value.includes("/") ||  value.includes("*") ){
        screen.innerHTML=eval(value);
    }
}
catch{
    screen.innerHTML="ERROR";
}
}

