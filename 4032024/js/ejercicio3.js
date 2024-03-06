//EXERCISE 3  Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos.
alert("Ingresar 3 números y saber cuál es el mayor y el menor de los 3");

alert("Digite el primer número: ");
let numero1 = parseFloat(prompt());

alert("Digite el segundo número: ");
let numero2 = parseFloat(prompt());

alert("Digite el tercer número");
let numero3 = parseFloat(prompt());

if (numero1 < numero2 & numero2 <numero3){
    console.error("El número menor es el " +numero1 + "y el mayor" + numero3 + "\n");

}else if (numero1 > numero2 & numero2 > numero3){
    console.error("El número menor es el " + numero3 + "y el mayor" + numero1 + "\n");

} else if (numero1 < numero2 & numero2 >numero3) {
    if (numero1 > numero3) {
        console.error("El número menor es el" + numero3 + "y el mayor" + numero2 + "\n");

    } else {
        console.error ("El número menor es el " + numero1 + "y el mayor" + numero2 + "\n");
    }
}

