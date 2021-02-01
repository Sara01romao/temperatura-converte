
function update(){
     
      var select= document.getElementById('op');
      var valor = select.options[select.selectedIndex].value;
      var c= "";
      var f= "";
      
      // document.getElementById('aqui').innerHTML= valor;

      if(valor=='cf'){
            c = document.getElementById('v').value;

           function calcular(c){

            
            f= c*1.8000+32;
            
            document.getElementById('aqui').innerHTML= f;
            
      }
           
            calcular(c);
          
            
            
            
      }else{
            function calcular(){
                  c = document.getElementById('v').value;
            f= c*1.8000+32;
            document.getElementById('aqui').innerHTML= c;
            }
      }

}



function calcular(){
      c = document.getElementById('v').value;
      f= c*1.8000+32;
      document.getElementById('aqui').innerHTML= c;
}


     /* if(valor=='cf'){

            calcular(){
                  c=document.getElementById('v').value;
                  
                  document.getElementById('t2').innerHTML= c;
            }


            // var n1=1;
            // document.getElementById('teste').innerHTML=n1;


      }else{
            var n2=2;
            document.getElementById('teste').innerHTML=n2;
     
      }
     
}




 




// var c= "";
// var f= "";

// function convertC(){
   

// //fomula para converte para fhrenheit

//       c= document.getElementById('grauC').value;

      
//       f= c*1.8000+32;
   
     
//       document.getElementById('resultC').innerHTML=f+" F°";
// }




// var c2= "";
// var f2= "";

// function convertF(){


//       f2=document.getElementById('grauF').value;

//       c2=(f2-32)/1.8000;

//       document.getElementById('resultF').innerHTML=c2+" C°";
// }

// /** c=(f-32)/1.8000 */

