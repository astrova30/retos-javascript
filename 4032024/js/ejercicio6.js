let name = prompt("Ingrese el nombre del postulante");
let total = parseInt(prompt("cantidad total de preguntas realizadas: "));
let corrects = parseInt(prompt("Cantidad de preguntas acertadas: "));

let porcentage = ( corrects / total) * 100;

let level; 

if (porcentaje>=90) {

level = "avanzado";
}else if (porcentage >=75){
    level = "intermedio";
}else if (porcentage>=50) {
    level = "básico";
}else 
{
    level = "inferior";
}

alert("Nombre del postulante: " + name);
alert("Porcentaje de aciertos: " + porcentaje.toFixed(2) + "%");
alert("Nivel: " + level);
