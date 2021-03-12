
function teste(){
      let valor= document.getElementById('v');

   
      if(valor !== " "){
            document.getElementById("op").disabled=false;
          
            
       }else{
             document.getElementById("op").disabled = true;
       }
}

function update(){
     
      var select= document.getElementById('op');
      var valor = select.options[select.selectedIndex].value;
      var c= "";
      var f= "";

      
     
      // document.getElementById('aqui').innerHTML= valor;
      
     
            if(valor=='cf'){
                  c = document.getElementById('v').value;
                  f= (c*1.8000+32);
                  document.getElementById('aqui').innerHTML= f;
                         
            }else{
                  f = document.getElementById('v').value;
                  c=((f-32)/1.8000).toFixed();
                  
                  document.getElementById('aqui').innerHTML= c;
                  
                  
            }
      
     


     
      
}


 function clean(){
            document.getElementById('v').value="";
            document.getElementById('aqui').innerHTML= " ";
            document.getElementById("op").value=" ";
            document.getElementById("op").disabled=true;
          
       
      }
