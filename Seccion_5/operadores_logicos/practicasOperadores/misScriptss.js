function calcular (){
    let elementoNumero1 = document.getElementById ("numero1");
    let elementoNumero2 = document.getElementById ("numero2");
    
    let numero1 = Number(elementoNumero1.value);
    let numero2 = Number(elementoNumero2.value);

    let respuesta = numero1>numero2
    let elementorespuesta = document.getElementById("resultado");
    elementorespuesta.textContent = respuesta;


}