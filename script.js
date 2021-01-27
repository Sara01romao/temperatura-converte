var ce= document.getElementsByClassName('celsius').value;

function calcular(c){
    var f= "";

//fomula para converte para fhrenheit

      f=(180*(c+32))/100;


    document.getElementsByClassName('resultado').value= f;
  }

  calcular(ce);


