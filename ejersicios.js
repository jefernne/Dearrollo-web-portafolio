



var nombre1;
var edad1;
var AlturaT1;
var BaseT1;
var AlturaRC1;
var BaseRC1;
var radio_R1;


function ejecutar() {
    nombre1 = document.getElementById("nombre").value;
    edad1 = parseInt(document.getElementById("edad").value);
    var total = edad1 + 1
    const raya1 = document.getElementById("raya1");
    raya1.textContent = `${nombre1}`
    const raya2 = document.getElementById("raya2");
    raya2.textContent = `${edad1}`
    const raya3 = document.getElementById("raya3");
    raya3.textContent = `${total}`
}

function calcularAT() {
    AlturaT1 = parseInt(document.getElementById("AlturaT").value);
    BaseT1 = parseInt(document.getElementById("BaseT").value);
    var total = (AlturaT1 * BaseT1) / 2
    const mostrarT = document.getElementById("mostrar")
    mostrarT.textContent = `${total}`
}
function calcularRC() {
    AlturaRC1 = parseInt(document.getElementById("AlturaR").value);
    BaseRC1 = parseInt(document.getElementById("BaseR").value);
    var total = BaseRC1 * AlturaRC1;
    const mostrarT = document.getElementById("mostrarRC1")
    mostrarT.textContent = `${total}`
}
function calcularRRC() {
    radio_R1 = parseFloat(document.getElementById("radio_R").value);
    var total1 = (Math.PI * (radio_R1 ** 2));
    const respuesra_RRC = document.getElementById("respuesra_RRC");
    respuesra_RRC.textContent = `${total1}`;
}
function jugar() {
    var pares_impares = parseInt(document.getElementById("par_impar").value);
    var imprimir_par = document.getElementById("imprimir_par");
    imprimir_par.innerHTML = "";

    var imprimir_impar = document.getElementById("imprimir_impar");
    imprimir_impar.innerHTML = "";

    for (var i = 1; i <= pares_impares; i++) {
        if (i % 2 === 0) {
            imprimir_par.innerHTML += "-- " + i + "<br>";
            alert("hola")
        } else {
            imprimir_impar.innerHTML += "--" + i + "<br>";
        }
    }

}
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimo() {
    var input = document.getElementById("numero");
    var numero = parseInt(input.value);
    var resultadoDiv = document.getElementById("resultado");

    if (esPrimo(numero)) {
        resultadoDiv.innerHTML = " PRIMO.";
    } else {
        resultadoDiv.innerHTML = " COMPUESTO O NO PRIMO";
    }
}

function verificarfactorial() {
    var Factorial = parseInt(document.getElementById("numerofac").value);
    var resultadofactorial = document.getElementById("resultadofactorial");
    var total = 1;
    if (Factorial === 0) {
        resultadofactorial.innerHTML = "Es 0 error no se puede calcular el factorial";
    }
    for (let i = Factorial; i >= 1; i--) {
        total = total * i;

    }
    resultadofactorial.innerHTML = total;



}
var pares = [];
var impares = [];
var numeros = [1, 2, 3, 4, 5];
function llenar() {
    var numeroalt = parseInt(Math.random() * 10);
    for (let i = 0; i < numeros.length; i++) {
        var resultados = numeros[i] * numeroalt;
        if (resultados % 2 === 0) {
            pares.push(resultados);

        } else {
            impares.push(resultados)

        }

    }
    console.log(pares)
    console.log("-------------")
    console.log(impares)
    var imprimir_par_vector = document.getElementById("imprimir_par_vector");
    var imprimir_impar_vector = document.getElementById("imprimir_impar_vector");
    for (let j = 0; j < pares.length; j++) {
        imprimir_par_vector.innerHTML += "--- " + pares[j] + "<br>"
    }
    for (let h = 0; h < impares.length; h++) {
        imprimir_impar_vector.innerHTML += "--- " + impares[h] + "<br>"
    }


}
function dniletra() {


    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Solicitar número de DNI al usuario
    var dni = document.getElementById("numerodni").value;
    var resultadodni = document.getElementById("resultadodni");
    // Validar que el número de DNI sea válido
    if (dni >= 0 && dni <= 99999999) {
        // Calcular posición de la letra
        var posicion = dni % 23;

        // Obtener la letra correspondiente
        var letraCorrespondiente = letras[posicion];

        // Mostrar resultado
        resultadodni.innerHTML = "La letra correspondiente  " + dni + " es: " + letraCorrespondiente;
    } else {
        // Mostrar mensaje de error si el número de DNI no es válido
        resultadodni.innerHTML = "El número de DNI ingresado no es válido.";
    }
}
function FuncionPalbra() {


    var traer = document.getElementById("numeropalabras").value;
    palabra = traer;
    var lapalbras = document.getElementById("lapalbras");
    var longitud = document.getElementById("longitud");
    var lavocales = document.getElementById("lavocales");

    var consonantes = 0;
    var vocaless = 0;

    // Convertir la palabra a minúsculas para simplificar la comparación
    palabra = palabra.toLowerCase();

    // Recorrer cada letra de la palabra
    for (var i = 0; i < palabra.length; i++) {
        var letra = palabra[i];

        // Verificar si la letra es una vocal o una consonante
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vocaless++;
            alert(vocaless)
        } else {
            consonantes++;
        }
    }

    // Mostrar los resultados por consola
    lapalbras.innerHTML = " " + palabra;
    longitud.innerHTML = " " + palabra.length;
    lavocales.innerHTML = " " + vocaless;
}



function Encontrar() {
    var Buscar = document.getElementById("Buscar").value;
    var ColorBuscar = document.getElementById("ColorBuscar");
    if (Buscarcolor(Buscar)) {
        ColorBuscar.innerHTML = "Se encontro el color";
        alert("bien")
    } else {
        ColorBuscar.innerHTML = "No se Econtro";
    }

}
function Buscarcolor(Buscar) {
    var encontrar = Buscar;
    var colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

    for (let i = 0; i < colores.length; i++) {
        if (colores[i] === encontrar) {
            return true;
        }
    }

    return false;
}