// DESAFIO 01 - FUNCIONES 

//Proyecto Ene Calzados

let nombre = "";
let tipo = "";
let precio = 0;
let numero = "";
let color = "";
let cantidad = 0;
let descuento = 0;
let formaPago = "";
let compra = 0;
let cuotaTarjeta = 0;
let confirmar = "";
let fecha = new Date();



alert("Bienvenido a Ene Calzados");

nombre = prompt("A continuacion ingrese su nombre porfavor: ");

alert("Bienvenido/a " + nombre + ", elige algun tipo de los siguientes calzados: ");


const tipo_calzado = () => {
    tipo = prompt("zapatillas\nsandalias\nbotas").toLowerCase();
    while ( tipo != "zapatillas" || tipo != "sandalias" || tipo != "botas") {
        if (tipo == "zapatillas") {
            precio = 5900;
            break;
        } else if (tipo == "sandalias") {
            precio = 3900;
            break;
        } else if (tipo == "botas") {
            precio = 6600;
            break;
        } else {
            alert("Perdona, ese tipo no esta en la lista, intenta de nuevo");
            tipo = prompt("zapatillas, sandalias, botas").toLowerCase();
        }
    }
    return tipo;
} 

tipo_calzado();

alert("El precio de tus " + tipo + " es de $" + precio);


numero = prompt("Elige tu numero:\n36\n37\n38\n39\n40");

while (numero != "36" || numero != "37" || numero != "38" || numero != "39" || numero != "40") {
    if (numero >= "36" && numero <= "40") {
        alert("Genial! contamos con ese numero!")
        break;
    } 
    alert("Lo siento, no contamos con ese numero")
    numero = prompt("Elige tu numero:\n36\n37\n38\n39\n40"); 
}

color = prompt("Elige tu color favorito:\nblanco\nnegro\nrojo\nrosa");

while (color != "blanco" || color != "negro" || color != "rojo" || color != "rosa"){
    if (color == "blanco" || color == "negro" || color == "rojo" || color == "rosa") {
        alert("Estupendo, elegiste un hermoso color!");
        break;
    }
    alert("Lo siento, no contamos con ese color. Intenta nuevamente");
    color = prompt("Elige tu color favorito:\nblanco\nnegro\nrojo\nrosa");
}


cantidadDePares = () => {
    cantidad = parseInt(prompt("Seleccione la cantidad de pares que desea: ")) 
    while( Number.isNaN(cantidad) )  {
        if (Number.isInteger(cantidad)) {
            return cantidad;
        } else {
            alert("Por favor ingresa un valor numerico correcto.")
            cantidad = parseInt(prompt("Seleccione la cantidad de pares que desea: "))
        }
    }
}


cantidadDePares();

const precioTotal = () => {
    compra = cantidad * precio;
    return compra;
}


precioTotal();


formaPago = prompt("Selecciona forma de pago:\nefectivo\ntarjeta")

while( formaPago != "efectivo" || formaPago != "tarjeta") {
    if (formaPago == "efectivo"){
        descuento = (compra * 0.15);
        compraConDesc = (compra - descuento);
        alert("se aplicara un 15% sobre tu monto final. El descuento es de $" + descuento + " ,tu total a pagar es de $" + compraConDesc);
        break;
    } else if (formaPago == "tarjeta") {
        let cuotas = parseInt(prompt("Selecciona cantidad de cuotas: 3 / 6 / 12"));
        if (cuotas == 3) {
            cuotaTarjeta = (compra / 3) 
            alert("Pagaras 3 cuotas sin interes de: $" + cuotaTarjeta);
            break;
        } else if (cuotas == 6) {
            cuotaTarjeta = (compra / 6) 
            alert("Pagaras 6 cuotas sin interes de: $" + cuotaTarjeta);
            break
        } else if (cuotas == 12) {
            cuotaTarjeta = (compra / 12) 
            alert("Pagaras 12 cuotas sin interes de: $" + cuotaTarjeta);
            break
        } else {
            alert("No contamos con esa cantidad de cuotas.")
        }
    } else {
        alert("Metodo de pago erroneo, intenta nuevamente, Gracias.");
        formaPago = prompt("Selecciona forma de pago:\nefectivo\ntarjeta");
    }
}


// DESAFIO 02 - OBJETOS Y ARRAYS


const ventas = []; // Acumulador de ventas

class calzado {
    constructor(nombre,tipo,numero,cantidad,descuento){
        this.nombre = nombre,
        this.tipo = tipo,
        this.numero = numero,
        this.cantidad = cantidad,
        this.compra = precioTotal(),
        this.cuotaTarjeta = cuotaTarjeta,
        this.descuento = descuento,
        this.vendido = false,
        this.fecha = fecha
    }
    ventaMayorista(){
        if (compra >= 30000) {
            alert("Recibiras un descuento extra del 20% por superar los $30.000 en tu compra!");
            descuento = compra * 0.20;
            compra = compra - descuento;
            alert("Tu importe Final es de $" + compra)
            return compra;
        } 
    }
    confirmarCompra(){
        confirmar = prompt("Desea anular la compra?\nSI\nNO").toUpperCase();
        if (confirmar == "SI"){
            alert("Tu compra fue cancelada con exito!");
        } else if ( confirmar == "NO" ) {
            this.vendido = true;
            this.fecha = new Date();
            alert("Gracias, te esperamos la proxima!")
            ventas.push(Object);     // Al confirmar agrego objeto al array `ventas`
        } else {
            alert("Ocurrio un error, compra cancelada.")
        }
    }
}


let cliente1 = new calzado (nombre, tipo, numero, cantidad, descuento);  // Creo un objeto 


cliente1.ventaMayorista(); // Metodo para aplicar descuento segun condicion. 

cliente1.confirmarCompra(); // Metodo para confirmacion de compra.

console.log(cliente1);
console.log(ventas.length);

mostrarCompra = () => {   
    if (cliente1.vendido == true) {                              // FUNCION PARA MOSTRAR DATOS DE LA COMPRA
        console.log("Detalle de la compra:\n")
        for (prop in cliente1) {
        console.log(prop + " " + cliente1[prop]);
        }
    } 
}

mostrarCompra();






















