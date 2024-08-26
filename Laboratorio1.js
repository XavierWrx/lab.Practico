//RODRIGO XAVIER MEJIA BERMDUEZ

//Definiendo Variables
let Camisa_Cantidad = 10;
let Pantalones_Cantidad = 100;
let Zapatos_Cantidad = 100;


//Calculamos el total de prodcutos
let total_Producto = Camisa_Cantidad + Pantalones_Cantidad + Zapatos_Cantidad;

//Mensaje a mostrar de el total de inventario 
console.log(`La cantidad de los producto es: ${total_Producto}`)

//Verificando cantidad de producto
if ( Camisa_Cantidad<100 ) {
    console.log(`Es necesario reponer camisa. Cantidad actual: ${Camisa_Cantidad}`);
    return;
  } else if (Pantalones_Cantidad < 100) {
     console.log(`Es necesario reponer pantalones. Cantidad actual: ${Pantalones_Cantidad}`);
  } else if (Zapatos_Cantidad < 100) {
     console.log(`Es necesario reponer Zapatos. Cantidad actual: ${Zapatos_Cantidad}`);
  } else {
     console.log("No es necesario reponer ningún producto.");
  }