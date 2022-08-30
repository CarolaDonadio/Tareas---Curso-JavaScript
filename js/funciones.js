'use strict'
//Simulador Interactivo
// Calcular pagos en cuotas sobre un monto determinado

//Función para calcular el pago total
let calcularPago = (monto, cuotas) => {
    //Función para calcular el IVA
    const iva = (monto) => {
        return monto * 21 / 100;
    }
    let iva21 = iva(monto);
    
    let pagos = Math.round((monto + iva21) / cuotas);
    alert(`Su pago es en ${cuotas} cuotas de ${pagos}`);
}

//Función del simulador
let calcularMontoAPagar = () => {
    alert("Calculamos por usted la liquidación de los servicios de eventos (cumpleaños y/o bodas) en cuotas. Incluye IVA.");
    //Pide el valor del monto a pagar
    let monto = parseInt(prompt("Ingrese el monto a pagar:"));
    while (isNaN(monto)) {
        monto = parseInt(prompt("Ingrese el monto a pagar nuevamente:"));
    }

    //Pide el número de cuotas a pagar
    alert("Empleamos las siguientes cuotas: \n 2 cuotas \n 3 cuotas \n 6 cuotas \n 9 cuotas \n 12 cuotas \n 18 cuotas \n 24 cuotas \n 36 cuotas \n 48 cuotas");
    
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar:"));
    
    while(isNaN(cuotas)) {
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar nuevamente:"));
    }

    switch(cuotas) {
        case 2: calcularPago(monto, cuotas); break;
        case 3: calcularPago(monto, cuotas); break;
        case 6: calcularPago(monto, cuotas); break;
        case 9: calcularPago(monto, cuotas); break;
        case 12: calcularPago(monto, cuotas); break;
        case 18: calcularPago(monto, cuotas);break;
        case 24: calcularPago(monto, cuotas); break;
        case 36: calcularPago(monto, cuotas); break;
        case 48: calcularPago(monto, cuotas); break;
        default: 
        alert("Empleamos las siguientes cuotas: \n 2 cuotas \n 3 cuotas \n 6 cuotas \n 9 cuotas \n 12 cuotas \n 18 cuotas \n 24 cuotas \n 36 cuotas \n 48 cuotas");
        alert("Por favor,vuelva a refrescar la página.");
    }
}

calcularMontoAPagar();