// Constantes y arrays para la informaciion
const COSTO_MENSUAL = 30; // Costo base por mes
const ENTRADAS = [
    { nombre: "individual", cantidad: 1, descuento: 0 },
    { nombre: "Parejas", cantidad: 2, descuento: 0.50 }, // 50% de descuento
    { nombre: "Amigos", cantidad: 6, descuento: 0.30 }      // 30% de descuento
];
let usuariosRegistrados = []; 


// ## Funciones del simulador


// 1. Función para solicitar y procesar la entrada de datos del usuarios 
function registrarUsuario() {
    let nombreUsuario = prompt("¡Hola! Ingresa tu nombre para registrarte servicio de entradas del teatro:");
    // Validación para asegurar que el nombre no esté vacío
    if (nombreUsuario && nombreUsuario.trim() !== "") {
        return nombreUsuario;
    } else {
        alert("El nombre no puede estar vacío.");
        return null;
    }
}

// 2. Función para calcular el costo de la membresía 
function calcularCostoEntradas(CantidadElegida) {
    let EntradaEncontrada = null;
    // Bucle `for` para encontrar la membresía elegida
    for (let i = 0; i < Entradas.length; i++) {
    if (ENTRADAS[i].cantidad === cantidadElegida) {
            EntradaEncontrada = ENTRADAS[i];
            break; // Salimos del bucle una vez que encontramos la membresía
        }
    }

    if (EntradaEncontrada) {
        let costoSinDescuento = COSTO_MENSUAL * EntradaEncontrada.cantidad;
        let descuentoTotal = costoSinDescuento * EntradaEncontrada.descuento;
        let costoFinal = costoSinDescuento - descuentoTotal;
        return {
            nombre: EntradaEncontrada.nombre,
            costo: costoFinal.toFixed(2) // Redondeamos a 2 decimales
        };
    } else {
        return null;
    }
}

// 3. Función para mostrar los resultados al usuario (Salida)
function mostrarResultado(nombre, infoEntrada) {
    if (infoEntrada) {
        alert(`¡Registro exitoso, ${nombre}!\n\nTu entrada ${infoEntrada.nombre} ha sido procesada.\n\nEl costo total es de $${infoEntradas.costo} USD.\n\n¡Bienvenido al Teatro!`);
        console.log(` Nuevo usuario registrado: ${nombre}`);
        console.log(` Entradas seleccionadas: ${infoEntrada.nombre} - Costo: $${infoEntrada.costo} `);
        
        // Agregar el usuario al array de registrados
        usuariosRegistrados.push({ nombre: nombre, entradas: infoEntrada.nombre, costo: infoEntrada.costo });
    } else {
        alert("Ha ocurrido un error al procesar tu membresía. Inténtalo de nuevo.");
        console.error(" Error en el proceso de cálculo de entradas.");
    }
}

// ----------------------------------------------------
// ## Lógica principal del simulador
// ----------------------------------------------------

// Llamada a las funciones para iniciar el flujo del programa
function iniciarSimulador() {
    let continuar = true;
    while (continuar) {
        // 1. Entrada de datos
        let nombreNuevoUsuario = registrarUsuario();

        // Condicional `if` para verificar si el usuario ingresó un nombre válido
        if (nombreNuevoUsuario) {
            let cantidad = parseInt(prompt("Ahora, elige tus entradas:\n\n1. Individual (1)\n2. pareja (2)\n3. Amigos (6)\n\nIngresa el número de meses (1, 2 o 6):"));
            
            // Condicional `if` para validar la selección del usuario
            if (cantidad === 1 || cantidad === 2 || cantidad === 6) {
                // 2. Procesamiento de datos
                let infoEntrada = calcularCostoEntradas(cantidad);
                // 3. Salida de datos
                mostrarResultado(nombreNuevoUsuario, infoEntradas);
            } else {
                alert("Selección de entradas no válida. Por favor, elige 1, 2 o 6.");
                console.warn(" Selección de meses no válida por el usuario.");
            }
        }

        // Condicional para decidir si el bucle continua
        continuar = confirm("¿Deseas registrar a otro usuario?");
    }

    console.log("-----------------------------------------");
    console.log("¡Simulador finalizado!");
    console.log("Lista de todos los usuarios registrados:");
    console.table(usuariosRegistrados); // Usa console.table para una visualización 
}

// Llamada final para iniciar el simulador

iniciarSimulador();




