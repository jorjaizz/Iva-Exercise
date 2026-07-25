import { calcularSubtotal, calcularIva, calcularTotal } from "../service/calculos-service";
import { ProductoComprado } from "../model/ProductoComprado";


const productosEjemplo: ProductoComprado[] = [
    { nombre: "A", precio: 15, cantidad: 2 },
    { nombre: "B", precio: 5, cantidad: 4 }
];

console.assert(calcularSubtotal(productosEjemplo) === 50, "calcularSubtotal con productos");
console.assert(calcularSubtotal([]) === 0, "calcularSubtotal arreglo vacio");


console.assert(calcularIva(100) === 12, "calcularIva tasa defecto");
console.assert(calcularIva(100, 0.05) === 5, "calcularIva tasa personalizada");


console.assert(calcularTotal(100, 12) === 112, "calcularTotal estandar");
console.assert(calcularTotal(100, 0) === 100, "calcularTotal iva cero");

console.log("pruebas finalizadas wey");

console.assert