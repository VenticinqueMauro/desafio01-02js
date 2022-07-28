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
let compraConDesc = 0;  
let cuotas = 0;
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

alert("El precio por unidad de " + tipo + " es de $" + precio);


numero = prompt("Elige tu numero:\n36\n37\n38\n39\n40");

while (numero != "36" || numero != "37" || numero != "38" || numero != "39" || numero != "40") {
    if (numero >= "36" && numero <= "40") {
        alert("Genial! Seleccionaste Numero: " + numero)
        break;
    } 
    alert("Lo siento, no contamos con ese numero")
    numero = prompt("Elige tu numero:\n36\n37\n38\n39\n40"); 
}

color = prompt("Elige tu color favorito:\nblanco\nnegro\nrojo\nrosa");

while (color != "blanco" || color != "negro" || color != "rojo" || color != "rosa"){
    if (color == "blanco" || color == "negro" || color == "rojo" || color == "rosa") {
        alert("Estupendo, elegiste color: " + color);
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


formaPago = prompt("Selecciona forma de pago:\ndebito\ncredito")

while( formaPago != "debito" || formaPago != "credito") {
    if (formaPago == "debito"){
        descuento = (compra * 0.10);
        compraConDesc = (compra - descuento);
        alert("Con debito tienes 10% de descuento:\nValor: $" + compra + "\nDescuento: $" + descuento + "\nTotal: $" + compraConDesc);
        break;
    } else if (formaPago == "credito") {
        cuotas = parseInt(prompt("Selecciona cantidad de cuotas:\n3: +10% Interes\n6: +15% Interes\n12: +20% Interes"));
        if (cuotas == 3) {
            cuotaTarjeta = ((compra * 1.10) / 3 ).toFixed(2)
            alert("Pagaras 3 cuotas de: $" + cuotaTarjeta);
            break;
        } else if (cuotas == 6) {
            cuotaTarjeta = ((compra * 1.15) / 6 ).toFixed(2)
            alert("Pagaras 6 cuotas de: $" + cuotaTarjeta);
            break
        } else if (cuotas == 12) {
            cuotaTarjeta = ((compra * 1.20) / 12).toFixed(2)
            alert("Pagaras 12 cuotas de: $" + cuotaTarjeta);
            break
        } else {
            alert("No contamos con esa cantidad de cuotas.")
        }
    } else {
        alert("Metodo de pago erroneo, intenta nuevamente, Gracias.");
        formaPago = prompt("Selecciona forma de pago:\ndebito\ncredito");
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
        this.cuotaTarjeta = cuotas + " de $" + cuotaTarjeta,
        this.descuento = descuento,
        this.vendido = false,
        this.fecha = fecha,
        this.formaPago = formaPago
    }
    ventaMayorista(){
        if (compraConDesc >= 30000) {
            alert("Descuento Extra del 10% por superar los $30.000 en tu compra!");
            descuento = (compraConDesc * 0.10);
            compraConDesc = compraConDesc - descuento;
            alert("Importe Final: $" + compraConDesc)
            return compraConDesc;
        } 
    }
    confirmarCompra(){
        confirmar = prompt("Desea confirmar la compra?\nSI\nNO").toUpperCase();
        if (confirmar == "NO"){
            alert("Tu compra fue cancelada con exito!");
        } else if ( confirmar == "SI" ) {
            this.vendido = true;
            this.fecha = new Date();
            alert("Compra Confirmada!")
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

mostrarCompra = () => {     // FUNCION PARA MOSTRAR DATOS DE LA COMPRA
    if (cliente1.vendido == true) { 
        if (formaPago == "debito") {                       
            alert(nombre + " Aqui tienes el detalle de tu Compra:\nTipo: " + tipo + "\nNumero: " + numero + "\nColor: " + color + "\nCantidad: " + cantidad + "\nValor: $" + compra + "\nDescuento: $" + descuento + "\nPrecio Final: $" + compraConDesc + "\nForma de pago: " + formaPago + "\nCuotaTarjeta: " + cuotas + " de $" + cuotaTarjeta)
        } else if ( formaPago == "credito") {
            alert(nombre + " Aqui tienes el detalle de tu Compra:\nTipo: " + tipo + "\nNumero: " + numero + "\nColor: " + color + "\nCantidad: " + cantidad + "\nValor: $" + compra + "\nDescuento: $" + descuento + "\nPrecio: $" + compra + "\nForma de pago: " + formaPago + "\nCuotaTarjeta: " + cuotas + " de $" + cuotaTarjeta)
        }
        console.log("Detalle de la compra:\n")
        for (prop in cliente1) {
        console.log(prop + " " + cliente1[prop]);
        }
    } 
}

mostrarCompra();























