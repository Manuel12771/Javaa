// OPERADORES ARITMETICOS

let m1 = parseInt(prompt("INGRESE UN NUMERO PARA SUMAR"));
let m2 = parseInt(prompt("INGRESE OTRO NUMERO PARA SUMAR"));
let m3 = parseInt(prompt("INGRESE UN TERCER NUMERO"));

let suma = m1 + m2;
let mul = suma*m3;

document.write("EL RESULTADO DE LA OPERACION ES:"+ mul)

//OPERADORES COMPARACION 


let n1 = parseInt(prompt("INGRESE UN NUMERO"));
let n2 = parseInt(prompt("INGRESE UN NUMERO"));

let mayor_o_menor = n1 > n2;
document.write("El resultado es:"+mayor_o_menor);

if (n1 > n2){
    document.write("N1 ES MAYOR A N2");
}else 
{
    document.write("N2 ES MAYOR A N1");
}


//OPERADORES LOGICOS
//FUNCION DE FLECHA

let nombre ="LUIS TORRES"
let usuario = "luis123";
let contra = 1234;
let usuarioIngresado = prompt("INGRESE SU USUARIO");
let contraIngresada = prompt("INGRESE SU CONTRASEÑA");

if (usuarioIngresado == usuario  && contraIngresada == contra) {
    document.write("BIENVENIDO "+nombre);
}
  else{
    document.write("CREDENCIALES INVÁLIDAS")
  }



