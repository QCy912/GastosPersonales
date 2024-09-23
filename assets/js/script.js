//Arreglos para almacenar la información
let listaNombresGastos = [];
let listaValoresGastos = [];

//Es creada una variable global para almacenar el gasto a editar
let indiceEdicion = -1;

//Función para agregar gasto
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    //console.log(nombreGasto);
    //console.log(valorGasto);

    //listaNombresGastos.push(nombreGasto);
    //listaValoresGastos.push(valorGasto);

    //Como desafío, se maneja que si supera los 150 USD, se maneje una alerta
    if (Number(valorGasto) > 150) {
        alert('El gasto registrado es mayor a $150 USD. Revise a detalle.');
    }
    // Verificación de edición o añadir un gasto

    if (indiceEdicion === -1) {
        // Añadir nuevo gasto
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
    } else {
        // Editar gasto existente
        listaNombresGastos[indiceEdicion] = nombreGasto;
        listaValoresGastos[indiceEdicion] = valorGasto;
        indiceEdicion = -1; // Resetear el índice de edición
    }


    //console.log(listaNombresGastos);
    //console.log(listaValoresGastos);

    //Prueba de llamada de función en otra
    actualizarListaGastos();

    //alert(listaValoresGastos);
    //alert('Click de prueba');
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        //Manejo de concatenación y manejo de decimales en el valor del gasto
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
        <button onclick="eliminarGasto(${posicion});">Eliminar Gasto</button>
        <button onclick="editarGasto(${posicion});">Editar Gasto</button>
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    //Manejo de decimales en el total
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

//Función para limpiar los campos despues de ingresar el gasto
function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

//Función eliminar gasto
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}

// Función para editar el gasto
function editarGasto(posicion) {
    const nombreGasto = listaNombresGastos[posicion];
    const valorGasto = listaValoresGastos[posicion];
    document.getElementById('nombreGasto').value = nombreGasto;
    document.getElementById('valorGasto').value = valorGasto;
    indiceEdicion = posicion; 
    // Se guarda el índice del gasto que se edita
}