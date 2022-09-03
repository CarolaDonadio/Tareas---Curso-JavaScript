'use strict'

// Array para almacenar y luego, buscar un producto específico.

// Clase
class Productos {
    constructor(nombre, precio, stock) {
        //Atributos
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }

    //Métodos
    precioConIva() {
        return this.precio = this.precio + (this.precio * 21 / 100);
    }
}

//Array para almacenar los productos
const productosDePanaderia = [];

productosDePanaderia.push(new Productos("Chausson aux pommes", 300, 200));
productosDePanaderia.push(new Productos("Beignet", 100, 200));
productosDePanaderia.push(new Productos("Honey Bread Roll", 200, 200));
productosDePanaderia.push(new Productos("Brioche", 400, 200));
productosDePanaderia.push(new Productos("Canelés", 500, 200));
productosDePanaderia.push(new Productos("Cremé Flan", 600, 200));
productosDePanaderia.push(new Productos("Choux á la créme", 700, 200));
productosDePanaderia.push(new Productos("Clafoutis", 800, 200));
productosDePanaderia.push(new Productos("Macaron", 900, 200));
productosDePanaderia.push(new Productos("Crêpe Suzette", 320, 250));
productosDePanaderia.push(new Productos("Croissant", 150, 250));
productosDePanaderia.push(new Productos("Éclair", 250, 250));
productosDePanaderia.push(new Productos("Pastel de Coco", 450, 250));
productosDePanaderia.push(new Productos("Financier", 550, 250));
productosDePanaderia.push(new Productos("Gland", 650, 250));
productosDePanaderia.push(new Productos("Madeleines", 750, 250));
productosDePanaderia.push(new Productos("Calisson", 850, 250));
productosDePanaderia.push(new Productos("Dariole", 950, 250));
productosDePanaderia.push(new Productos("Flaugnarde", 320, 220));
productosDePanaderia.push(new Productos("Isla Flotante", 120, 220));
productosDePanaderia.push(new Productos("Riz à l'impératrice", 220, 220));
productosDePanaderia.push(new Productos("Suflé", 420, 220));
productosDePanaderia.push(new Productos("tarte aux pralines", 520, 220));
productosDePanaderia.push(new Productos("Babá", 620, 220));

//Incluye el IVA en todos los productos
for(const productos of productosDePanaderia) {
    productos.precioConIva();
}

// Búsqueda de un producto

alert("Nuestra lista de productos es: \n Chausson aux pommes \n Beignet \n Honey Bread Roll \n Brioche \n Canelés \n Cremé Flan \n Choux á la créme  \n Clafoutis \n Macaron \n Crêpe Suzette \n Croissant \n Éclair \n Pastel de Coco \n Financier \n Gland \n Madeleines \n Calisson \n Dariole \n Flaugnarde \n Isla Flotante \n Riz à l'impératrice \n Suflé \n tarte aux pralines \n Babá");
let pedido = prompt("Ingrese el nombre del producto:");

switch(pedido) {
    case "Chausson aux pommes": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[0])); 
    break;
    case "Beignet": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[1])); 
    break;
    case "Honey Bread Roll": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[2]));
    break;
    case "Brioche": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[3]));
    break;
    case "Canelés": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[4]));
    break;
    case "Cremé Flan": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[5]));
    break;
    case "Choux á la créme": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[6])); 
    break;
    case "Clafoutis": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[7]));
    break;
    case "Macaron": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[8]));
    break;
    case "Crêpe Suzette": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[9]));
    break;
    case "Croissant": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[10]));
    break;
    case "Éclair": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[11]));
    break;
    case "Pastel de Coco": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[12]));
    break;
    case "Financier": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[13]));
    break;
    case "Gland": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[14]));
    break;
    case "Madeleines": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[15]));
    break;
    case "Calisson": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[16]));
    break;
    case "Dariole": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[17]));
    break;
    case "Flaugnarde": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[18]));
    break;
    case "Isla Flotante": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[19]));
    break;
    case "Riz à l'impératrice": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[20]));
    break;
    case "Suflé": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[21]));
    break;
    case "tarte aux pralines": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[22]));
    break;
    case "Babá": alert("Información del producto: " + "\n" + JSON.stringify(productosDePanaderia[23]));
    break;
    default: alert("Producto no encontrado. Vuelva a recargar la página.")
}