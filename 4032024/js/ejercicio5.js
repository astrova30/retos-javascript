//EXERCISE 5 --Haciendo uso de switch - case, cree un programa que simule una calculadora básica.
let operacion;
let numero1;
let numero2;
let resultado;

operacion = prompt(
    "Ingrese el simbolo de la operación que desea ejecutar: + es suma, - es resta, * es multiplicación, / es divisón ");

    numero1 = parseInt(prompt("Ingrese el primer número"));
    numero2 = parseInt(prompt("Ingrese el segundo número"));

    switch (operacion) {
        case "+":
        resultado = numero1 + numero2;
        break;

        case "-":
        resultado = numero1 - numero2;
        break;

        case "*":
        resultado = numero1 / numero2;
        break;

        case "/":
        resultado = numero1 / numero2;
        break;

        case "^":
        resultado = numero1 ** numero2;
        break;
        default:
            alert("Operación no válida");
        break;

    }

    alert("El resultado es: " + resultado);