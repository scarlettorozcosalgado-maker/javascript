function prenda(){
    let ropa = document.getElementById("ropa").value;
    let edad = parseInt(document.getElementById("edad").value);
    let mensaje = "";

    switch(ropa){
        case "camisa":
            if (edad>16) {
                mensaje = "su talla es M-L";
            }
            else if (edad>=11){
                mensaje = "su talla es M-S";
            }
            else{
                mensaje = "su talla es S-XS";
            }
            break;
        
        case "pantalon":
            if (edad>16) {
                mensaje = "su talla es 26";
            }    
            else if (edad>=11){
                mensaje = "su talla es 20";
            }
            else{
                mensaje = "su talla es 14";
            }
            break;

        case "vestido":
            if (edad>16) {
                mensaje = "su talla 17";
            }    
            else if (edad>=11) {
                mensaje = "su talla es 10";
            }
            else{
                mensaje = "su talla es 5"
        
            }
    }
    document.getElementById("respuesta").innerText = mensaje;
}