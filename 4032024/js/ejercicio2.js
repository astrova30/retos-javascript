//EXERCISE 2  Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

if (numero1 > numero2){
    alert(numero1 + "es mayor que" + numero2);
}
else{
    alert(numero2 + "es mayor que " + numero1);
}