function boton(){
    let escoger = document.getElementById("escoger").value;
    let usuario = parseInt(document.getElementById("usuario").value);
    let cantidad = parseInt(document.getElementById("personas").value)
    let respuesta = ""
    let respuesta2 = ""

    let descuento = 10/100*usuario
    let descuento2 = 15/100*usuario
    switch(escoger){
        case "Deportes":
            if (usuario<8000) {
                // No hay descuento
                respuesta = "Lo que podemos ofrecerle es Caminata recreativa"

                // Si hay descuento
                if (cantidad<=4) {
                    respuesta2 = "No hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "Su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "Su descuento es de" + descuento2
                }
            }
            else if (usuario || 8000 && 15000) {
                respuesta = "Lo que podemos ofrecerle es alquiler de cancha"

                 if (cantidad<=4) {
                    respuesta2 = "No hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }            
            else if (usuario>15000){
                respuesta = "Lo que podemos ofrecerle es actividad deportiva"

                if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }
            else{
                respuesta = "no disponible"
            }
            break;

        case "Entretenimiento":
            if (usuario<8000) {
            respuesta = "Lo que podemos ofrecerle es una actividad economica"

            if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
        }
        else if (usuario || 8000 && 15000) {

            respuesta = "Lo que podemos ofrecerle es una entrada al cine"

            if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
        }
        else if (usuario>15000) {
            respuesta = "Lo que podemos ofrecerle es un concierto o espectaculo"

            if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
        }
        else{
            respuesta = "no disponible"
        }
        break;

        case "Turismo":
            if (usuario<8000) {
            respuesta = "Lo que podemos ofrecerle es una visita al parque publico"

            if (cantidad<=4) {

                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }
            else if (usuario || 8000 && 15000) {
                respuesta = "Lo que podemos ofrecerle es un tour local"

                if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }
            else if (usuario>15000) {
                respuesta = "Lo que podemos ofrecerle es una excursion de dia completo"

                if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }
            else{
                respuesta = "No disponible"
            }
            break;

        case "Actividades familiares":
            if (usuario<8000) {
                respuesta = "Lo que podemos ofrecerle es un picnic familiar"

                if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }    
            else if (usuario || 8000 && 15000) {
                respuesta = "Lo que podemos ofrecerle es una salida recreativa"   

                if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }
            else if (usuario>15000) {
                respuesta = "Lo que podemos ofrecerle es un parque tematico o actividad especial"

                if (cantidad<=4) {
                    respuesta2 = "no hay descuento"
                }
                else if (cantidad>=5) {
                    respuesta2= "su descuento es de" + descuento
                }
                else if (cantidad>=9) {
                    respuesta2 = "su descuento es de" + descuento2
                }
            }
            else{
                respuesta = "No disponible"
            }
            break;
           
    }
    document.getElementById("respuesta").innerText = respuesta;
    document.getElementById("respuesta2").innerText = respuesta2;
}