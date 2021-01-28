

var c= document.getElementById('celsius').value;
var f= "";

function calcular(){
   

//fomula para converte para fhrenheit

      f=c*1.8000+32;
     

      document.getElementById("resultado").innerHTML = f;

}


/** c=(f-32)/1.8000 */