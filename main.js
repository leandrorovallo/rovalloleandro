// Constantes y arrays para la informaciion
const COSTO_MENSUAL = 30; // Costo base por mes
const MEMBRESIAS = [
    { nombre: "Clásica", meses: 1, descuento: 0 },
    { nombre: "Trimestral", meses: 3, descuento: 0.50 }, // 50% de descuento
    { nombre: "Anual", meses: 12, descuento: 0.30 }      // 30% de descuento
];
let usuariosRegistrados = []; 


// ## Funciones del simulador


// 1. Función para solicitar y procesar la entrada de datos del usuarios 
function registrarUsuario() {
    let nombreUsuario = prompt("¡Hola! Ingresa tu nombre para registrarte en el gimnasio:");
    // Validación para asegurar que el nombre no esté vacío
    if (nombreUsuario && nombreUsuario.trim() !== "") {
        return nombreUsuario;
    } else {
        alert("El nombre no puede estar vacío.");
        return null;
    }
}

// 2. Función para calcular el costo de la membresía 
function calcularCostoMembresia(mesesElegidos) {
    let membresiaEncontrada = null;
    // Bucle `for` para encontrar la membresía elegida
    for (let i = 0; i < MEMBRESIAS.length; i++) {
        if (MEMBRESIAS[i].meses === mesesElegidos) {
            membresiaEncontrada = MEMBRESIAS[i];
            break; // Salimos del bucle una vez que encontramos la membresía
        }
    }

    if (membresiaEncontrada) {
        let costoSinDescuento = COSTO_MENSUAL * membresiaEncontrada.meses;
        let descuentoTotal = costoSinDescuento * membresiaEncontrada.descuento;
        let costoFinal = costoSinDescuento - descuentoTotal;
        return {
            nombre: membresiaEncontrada.nombre,
            costo: costoFinal.toFixed(2) // Redondeamos a 2 decimales
        };
    } else {
        return null;
    }
}

// 3. Función para mostrar los resultados al usuario (Salida)
function mostrarResultado(nombre, infoMembresia) {
    if (infoMembresia) {
        alert(`¡Registro exitoso, ${nombre}!\n\nTu membresía ${infoMembresia.nombre} ha sido procesada.\n\nEl costo total es de $${infoMembresia.costo} USD.\n\n¡Bienvenido a la familia del gimnasio!`);
        console.log(` Nuevo usuario registrado: ${nombre}`);
        console.log(` Membresía seleccionada: ${infoMembresia.nombre} - Costo: $${infoMembresia.costo} `);
        
        // Agregar el usuario al array de registrados
        usuariosRegistrados.push({ nombre: nombre, membresia: infoMembresia.nombre, costo: infoMembresia.costo });
    } else {
        alert("Ha ocurrido un error al procesar tu membresía. Inténtalo de nuevo.");
        console.error(" Error en el proceso de cálculo de membresía.");
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
            let meses = parseInt(prompt("Ahora, elige tu membresía:\n\n1. Clásica (1 mes)\n2. Trimestral (3 meses)\n3. Anual (12 meses)\n\nIngresa el número de meses (1, 3 o 12):"));
            
            // Condicional `if` para validar la selección del usuario
            if (meses === 1 || meses === 3 || meses === 12) {
                // 2. Procesamiento de datos
                let infoMembresia = calcularCostoMembresia(meses);
                // 3. Salida de datos
                mostrarResultado(nombreNuevoUsuario, infoMembresia);
            } else {
                alert("Selección de meses no válida. Por favor, elige 1, 3 o 12.");
                console.warn(" Selección de meses no válida por el usuario.");
            }
        }

        // Condicional para decidir si el bucle continua
        continuar = confirm("¿Deseas registrar a otro usuario?");
    }

    console.log("-----------------------------------------");
    console.log("¡Simulador finalizado!");
    console.log("Lista de todos los usuarios registrados:");
    console.table(usuariosRegistrados); // Usa console.table para una visualización más clara
}

// Llamada final para iniciar el simulador
iniciarSimulador();