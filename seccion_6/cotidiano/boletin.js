
let nota = document.getElementById("nota");
let aplazado = document.getElementById("aplazado");

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
