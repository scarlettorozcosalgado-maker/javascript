let array = [7, 4, 8, 9, 6]

function prom(){
   let promedio = document.getElementById("promedio")
   let suma = 0;
   
   for(let valor of array){
      suma += valor;
   }
   let division  = suma / array.length
   
   console.log(division)
   promedio.innerHTML = division
}

function nota(){
    let notaEle = document.getElementById("nota");
    let notaAlta = Math.max(...array)
    notaEle.innerHTML = notaAlta;

 }

 function aprobado(){
    let aplazadoElement = document.getElementById("aplazo");
    let resultado = "Aprobado";

    for(let valor of array){
        if(valor < 7){ 
            resultado = "Aplazado";
            break;
        }
    }

    aplazadoElement.innerHTML = resultado;
}

