let precioUnitario = 25;
let cantidad = 60;
let precioFinal;



if (cantidad >= 50){
    console.log(precioFinal = ((precioUnitario * cantidad) * 0.8).toFixed(2));
} else if (cantidad >= 10){
    console.log(precioFinal = ((precioUnitario * cantidad) * 0.9).toFixed(2));
} else {
    console.log(precioFinal = (precioUnitario * cantidad).toFixed(2))
}

