
function update(){
      var select= document.getElementById('op');
      var valor = select.options[select.selectedIndex].value;
      
      
      document.getElementById('aqui').innerHTML= valor;

     
      if(valor=='cf'){
            var n1=1;
            document.getElementById('teste').innerHTML=n1;
      }else{
            var n2=2;
            document.getElementById('teste').innerHTML=n2;
     
      }
     
}

var rp=update();


 




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

