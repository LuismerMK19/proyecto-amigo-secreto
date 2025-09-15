// Inicializando variables
let arrayAmigos = [];

//Funcion Agregar amigo
function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value;
    let listaNombres = document.getElementById("listaAmigos");
    let agregarNombre = document.createElement("li");
    
    //Validación de dato de entrada.
    // El dato ingrasado no es valido.
    if(nombreIngresado == ""){
        alert("Por favor, ingrese un nombre valido");
    }

    // El dato ingresado es valido.
    else{
        //Agrega el nombre validado a la lista html
        agregarNombre.textContent = nombreIngresado;
        listaNombres.appendChild(agregarNombre);

        //Agrega el nombre validado al array.
        arrayAmigos.push(nombreIngresado);

        //Limpiar input
        limpiarInput("amigo");

        return ;
    }
    
}

// Funcion de Sorteo
function sortearAmigo(){
    //Verifica que existan nombres en la lista
    if(arrayAmigos.length !== 0){
        let amigoSorteado = document.getElementById("resultado");

        //Genere el numero aleatorio para el indice del array con los nombres.
        let indice = Math.floor(Math.random()*arrayAmigos.length);

        // Ingresa el nombre del amigo secreto.
        amigoSorteado.innerHTML = "El amigo secreto sorteado es:" + arrayAmigos[indice];

        //Limpia lista del amigos al realizar el sorteo.
        limpiarList("listaAmigos");

        //Limpiar Array
        limpiarArray(arrayAmigos);
    }
    return;
}



function limpiarInput(id){
    document.getElementById(id).value = "";
}

function limpiarList(id){
    document.getElementById(id).innerHTML = "";
}

function limpiarArray(array) {
  array.length = 0;
}