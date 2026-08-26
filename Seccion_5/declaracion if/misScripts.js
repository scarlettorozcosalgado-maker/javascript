function evaluarCompra(CantidadDisponible){
let elementoRespuesta = document.getElementById ("decision");

let elementoCantidad = document.getElementById ("textoCantidad");
let cantidaComprada = elementoCantidad.value;

if (cantidaComprada <= CantidadDisponible){
    elementoRespuesta.textContent = "Compraste"
     + cantidaComprada + "hay disponible aún" + (CantidadDisponible - parseInt (cantidaComprada)).toString();
}
}
