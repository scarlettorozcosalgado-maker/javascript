function Evaluar(){
    let elementoFruta = document.getElementById("Preciofruta");
    let fruta = elementoFruta.value;

    switch(fruta)
    {
     case "manzana":
        alert("el precio de la fruta manzana es 15"); 
        break;
     
     case "naranja":
        alert("el precio de la fruta naranja es 20"); 
        break;

     case "banana":
        alert ("el precio de la fruta naranja es 25"); 
        break;  
    }

}
