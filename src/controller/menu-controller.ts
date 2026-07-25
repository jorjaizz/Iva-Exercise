import PromptSync from "prompt-sync"
import { ProductoComprado } from "../model/ProductoComprado";
import { calcularSubtotal, calcularIva, calcularTotal } from "../service/calculos-service";

const prompt = PromptSync();

/**
 * Inicia el menu principal de la aplicacion
 */
export const init = () => {
    let continuarUno = true;

    console.log("-------------------------------------------------------")
    console.log("Bienvenido a la tienda super pro max 4k 240 fps >:D")
    console.log("-------------------------------------------------------")

    while (continuarUno) {
        console.log("");
        console.log("¿Que deseas hacer?");
        console.log("1.Calcular compra");
        console.log("2.Salir");
        console.log("");

        const eleccion = prompt("Elige una opción: ").trim();
        const eleccionNumero = Number(eleccion);

        switch (eleccionNumero) {
            case 1:
                const productos: ProductoComprado[] = [];

                let continuarDos = true;

                while (continuarDos) {
                    console.log("");
                    console.log("¿Que deseas hacer?");
                    console.log("1.Agregar un producto");
                    console.log("2.Ver productos agregados");
                    console.log("3.Terminar compra");
                    console.log("");

                    const eleccion = prompt("Elige una opción: ").trim();
                    const eleccionNumero = Number(eleccion);


                    switch (eleccionNumero) {
                        case 1:
                            agregarProducto(productos)
                            break;
                        case 2:
                            listarProductos(productos)
                            break;
                        case 3:
                            imprimirFactura(productos);
                            continuarDos = false;
                            break;
                        default:
                            console.log("Porfavor ingresa una opción válida");
                            break;
                    }
                }

                break;

            case 2:
                continuarUno = false;
                break;

            default:
                console.log("Porfavor ingresa una opción válida");
                break;
        }


    }
}

/**
 * Solicita los datos de un nuevo producto validando los datos
 */
export const agregarProducto = (productos: ProductoComprado[]): void => {
    console.log("\n--- Agrega un nuevo producto ---");


    let nombre = "";
    while (nombre.trim() === "") {
        nombre = prompt("Nombre del producto: ").trim();
        if (nombre === "") {
            console.log("El nombre no puede estar vacío")
        }
    }

    let precio = 0;
    while (isNaN(precio) || precio <= 0) {
        const entradaPrecio = prompt("Precio unitario: ").trim();
        precio = Number(entradaPrecio);

        if (isNaN(precio) || precio <= 0) {
            console.log("Por favor ingresa un precio válido mayor a 0");
        }
    }

    let cantidad = 0;
    while (isNaN(cantidad) || cantidad <= 0) {
        const entradaCantidad = prompt("Cantidad: ").trim();
        cantidad = Number(entradaCantidad);

        if (isNaN(cantidad) || cantidad <= 0) {
            console.log("Por favor ingresa una cantidad válida mayor a 0")
        }
    }

    productos.push({ nombre, precio, cantidad });
    console.log("Producto agregado correctamente");
};

/**
 * Muestra la lista actual de productos ingresados en el arreglo
 */
export const listarProductos = (productos: ProductoComprado[]): void => {
    console.log("\n--- Productos agregados ---");

    if (productos.length === 0) {
        console.log("No hay productos agregados aún");
        return;
    }

    productos.forEach((prod, index) => {
        console.log(`${index + 1}. ${prod.nombre} | Cantidad: ${prod.cantidad} | Precio: Q${prod.precio}`);
    });
};

/**
 * Realiza el cálculo final llamando al servicio de cálculos
 * e imprime la factura en consola
 */
export const imprimirFactura = (productos: ProductoComprado[]): void => {
    console.log("\n=================================");
    console.log("        FACTURA DE COMPRA        ");
    console.log("=================================");

    if (productos.length === 0) {
        console.log("No se puede generar factura sin productos.");
        return;
    }

    const subtotal = calcularSubtotal(productos);
    const iva = calcularIva(subtotal);
    const total = calcularTotal(subtotal, iva);

    console.log("\nDetalle:");
    productos.forEach(p => {
        console.log(`- ${p.nombre} x${p.cantidad}: Q${(p.precio * p.cantidad).toFixed(2)}`);
    });

    console.log("---------------------------------");
    console.log(`Subtotal: Q${subtotal.toFixed(2)}`);
    console.log(`IVA (12%): Q${iva.toFixed(2)}`);
    console.log(`Total:    Q${total.toFixed(2)}`);
    console.log("=================================\n");
};