// constructor para crear productos
function Producto(nombre, talle, cantidad) {
    this.nombre = nombre;
    this.talle = talle;
    this.cantidad = cantidad;
}

// ingreso de productos al stock
function ingresarProductos() {
    let productos = [];
    let continuar = true;
    
    while (continuar) {
        const nombre = prompt("Ingresa el nombre del producto:");
        const talle = parseInt(prompt("Ingresa el talle:"));
        const cantidad = parseInt(prompt("Ingresa la cantidad:"));
        
        if (isNaN(talle)) {
            alert("Debes ingresar un número");
        } else if (isNaN(cantidad)) {
            alert("Debes ingresar un número");
        } else {
            const nuevoProducto = new Producto(nombre, talle, cantidad);
            productos.push(nuevoProducto);
        }
        
        const respuesta = prompt("¿Quieres continuar ingresando productos? si/no").toLowerCase();
        continuar = (respuesta === "si");
    }
    
    return productos;
}

// busqueda en stock de productos talle 42
function calcularStock(productos) {
    return productos.filter(producto => producto.talle === 42);
}

// método para saber si hay productos en stock
function mostrarProductos(productos) {
    if (productos.length === 0) {
        console.log("No hay productos en el stock.");
        return;
    }
    
    productos.forEach(producto => {
        console.log(`Producto: ${producto.nombre}, Talle: ${producto.talle}, Cantidad: ${producto.cantidad}`);
    });
}