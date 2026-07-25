## Ejercicio Iva
## Estructura y Arquitectura del Proyecto 

El proyecto se estructuró en 4 capas para garantizar la separación de responsabilidades y la calidad del código:

1. **Model:** Contiene las interfaces TypeScript (`ProductoComprado`, `Factura`) para definir los contratos de datos y garantizar un tipado estricto.
2. **Service:** Aloja la lógica de negocio mediante funciones puras (`calcularSubtotal`, `calcularIva`, `calcularTotal`), sin dependencias de la consola ni efectos secundarios.
3. **Controller:** Gestiona la interacción con el usuario, implementando un menú con estructuras de control y validación activa de datos de entrada.
4. **Tests:** Contiene las pruebas unitarias encargadas de auditar y verificar el comportamiento de los algoritmos matemáticos frente a escenarios reales y casos borde.

### Conclusiones de las Pruebas
Las pruebas ejecutadas sobre la capa `Service` confirmaron que la precisión de los cálculos financieros se mantiene uniforme. Además, el aislamiento entre capas permitió validar la lógica matemática sin necesidad de simular la interacción por consola.