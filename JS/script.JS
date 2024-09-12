//Ingresar productos al stock
function ingresarProductos() {
    let productos = [];
    let continuar = true;
    while (continuar === true){
        const producto = prompt ("ingresa el producto");
        const talle = parseInt (prompt("ingresa el talle"));
        const cantidad = parseInt (prompt("ingresa la cantidad"));
        if (isNaN(talle)){
            alert ("ingresa un numero");
        } else if (isNaN(cantidad)){
            alert ("ingresa un numero");
        } else{
            productos.push({producto:producto, talle:talle, cantidad:cantidad})
        }
        const respuesta = prompt ("¿queres continuar ingresando productos? si/no").toLowerCase();
        if (respuesta==="si"){
            continuar===true;
        } else{
            continuar===false;
        }
    }
    return productos;
} 
//Buscar en stock productos talle 42
function calcularStock (productos){
    const suma = productos.filter((productos)=> productos.talle ===42);
    return suma;
}