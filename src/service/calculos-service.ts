import { Factura } from "../model/Factura";
import { ProductoComprado } from "../model/ProductoComprado";

/**
 * Calcula el subtotal de una lsita de productos que le pasemos, multiplicando el precio del producto
 * por la cantidad de producto vendido
 * 
 * @param productos lista de productos de la cual calcularemos el subtotal
 * @returns el subtotal 
 */
export const calcularSubtotal = (productos: ProductoComprado[]): number => {
    let total = 0;

    productos.forEach(p => {
        total += p.precio * p.cantidad;
    })

    return total;
}

/**
 * Calcula el iva de la compra
 * 
 * @param subtotal subtotal de la compra
 * @param tasaIva tasa que se usara para calcular el iva
 * @returns iva de la compra
 */
export const calcularIva = (subtotal: number, tasaIva: number = 0.12): number => {

    return subtotal * tasaIva;
}

/**
 * Calcula el total de la compra sumandole el iva al subtotal
 * 
 * @param subtotal subtotal de la compra
 * @param iva iva calcualdo apartir del subtotal
 * @returns el total
 */
export const calcularTotal = (subtotal: number, iva: number): number => {
    return subtotal + iva;

}