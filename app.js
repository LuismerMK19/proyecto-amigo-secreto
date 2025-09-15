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

        return ;
    }
    
}