

var c= "";
var f= "";

function convertC(){
   

//fomula para converte para fhrenheit

      c= document.getElementById('grauC').value;

      
      f= c*1.8000+32;
   
     
      document.getElementById('resultC').innerHTML=f+" F°";
}



var c2= "";
var f2= "";

function convertF(){


      f2=document.getElementById('grauF').value;

      c2=(f2-32)/1.8000;

      document.getElementById('resultF').innerHTML=c2+" C°";
}

/** c=(f-32)/1.8000 */

