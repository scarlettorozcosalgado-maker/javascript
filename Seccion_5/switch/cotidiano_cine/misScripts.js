function recomendacion(){
   
    let edad = parseInt(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value; 
    let mensaje = "";

    switch(genero){
        case "drama":
            if (edad >=16) {
                mensaje = "Te recomendamos: taxi driver";
            } else if (edad >= 13) {
                mensaje = "Te recomendamos: The Shawshank Redemption";
            } else {
                mensaje = "Te recomendamos: Casablanca";
            }
            break;

        case "comedia":
            if (edad >= 16) {
                mensaje = "Te recomendamos: The Wolf of Wall Street";
            } else if (edad >= 13) {
                mensaje = "Te recomendamos: The Truman Show";
            } else {
                mensaje = "Te recomendamos: Back to the future";
            }
            break;

        case "musical":
            if (edad >=16) {
                mensaje = "Te recomendamos: The Rocky Horror Picture Show";
            } else if (edad >= 13) {
                mensaje = "Te recomendamos: Les Miserables";
            } else {
                mensaje = "Te recomendamos: La La Land";
            }
            break;

        case "crimen":
            if (edad >=16) {
                mensaje = "Te recomendamos: The Godfather";
            } else if (edad >= 13) {
                mensaje = "Te recomendamos: El Secreto de sus Ojos";
            } else {
                mensaje = "No hay opciones";
            }
            break;
    }
    document.getElementById("pelicula").innerText = mensaje;
}

