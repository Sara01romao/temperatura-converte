
function update(){
     
      var select= document.getElementById('op');
      var valor = select.options[select.selectedIndex].value;
      var c= "";
      var f= "";

     
      // document.getElementById('aqui').innerHTML= valor;


      if(valor=='cf'){
            c = document.getElementById('v').value;
            f= c*1.8000+32;
            document.getElementById('aqui').innerHTML= f;
                   
      }else{
            f = document.getElementById('v').value;
            c=(f-32)/1.8000;
            document.getElementById('aqui').innerHTML= c;
            
            
      }

}

function clean(){
      document.getElementById('v').value= " ";
      document.getElementById('aqui').value= " ";
    
 
}
