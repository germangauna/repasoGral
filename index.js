//variables tenemos el let que nos permite cambiar el valor,
//declaro una variable que se llame nombre que sea igual a un string o un prompt()
// y despues del prompt le ponemos un alert del nombre de la variable.



// let nombre = "german";
// let apellido =prompt("ingrese su nombre");
// alert(nombre);

// tambien podemos hacer condicionales
// creo una variable que sea igual a un prompt, con un mensaje, depues creo un if copn una 
//condicion y debajo ponmer el resultado si cuimple la condicon, y si no cumple
// la condicion, pasara al else y dara el mensaje a traves de una alert
// si dice endres en mayuscula o miniscula podemos poner en la condion un  toLowerCase.


// let nombre =prompt("ingrese su nombre");

// if(nombre != " " && nombre.toLowerCase() === "andres"){
//     alert("bienvenido");
// }else {
//     alert("no puedes entrar");
// }


//bucles

// Tambien tenemos los bucles, el while y el for.
// cuando hablamos del while, creamos una variable y le ponemos un prompt y debajo el while,
//y ponemos la condicion, y depues de la condicion pondremos un alert si se cumple dicha condicion,
//saltara un alert y siguien un promt nuevo dond eel usuario tendra que oponer el nombre nuevamente.
// y si no se cumple la condicion, pondremos un alert fuera del while   que diga ""bienvenido ". 
//sirve para repetir condicones, si en tantoi la condicon sea verdadera.



// let usuario = prompt("ingrese su usuario");

// while (usuario !== "andres") {
//    alert("usuario incorrecto");
//    usuario = prompt("ingrese el usuario"); 
// }

// alert("bienbenido")

// el for recorre cada uno de los elementos, la mayor utilidad que le damos es para recorrer un arreglo.
// popner simpre el inicio, hasta donde va a llegar y el incremento o actualizacion.
// y que te muestre por alert op por consola lo que queremos m9star


// for (let index = 0; index < 10; index++) {
//     alert(index);
    
// }

//Tambien estan las funciones

// las podemos definir como funcione con y le pasamos parametros y estas retornan algo,
// entonces en parametros pasamos x , y y esto va a retornar la suma de ambos, y si depues creamos una varible
// por ejemplo resultado que sea igual a suma y entre parentesis dos numeros como 5 , 4, y un console.log
// de resultado, este me dara la suma de estos dos  numeros.
// el return guarda el valor.
// si la funcion la poonemos abajo sigue funcionando, por eso se inventaron las arrow function, y se evita que el nombre de la funcion 
// se ponga abajo del codigo, y el codigo sea mas ardenados.
// el arrow function si tiene solo un param,etro no es necesario ponerle parentesis
// si le pongo la flecha y termina ahi no tengo que ponerle return es un treturn implicito.
// el const y el let, se pueden usar cualquiiera de las dos solamente que el let se puede cambiar el nombre y el const no porque,
// es una constante.


// function suma(x, y) {
//     return x + y;
// }

// let resultado = suma(4, 5);
// console.log(resultado);


// ahora tenemos los objetos

//Por ejemplo si creamos una variable que se llame persona, que sea oigual a llaves y dentro los 
// datos de esta variable llamada persona, y si quierop llamar a alguna de esta infromacion  por medio de la ocpnsola,
// lo que tengo que hacer es hace un  console.log y dentro poner el nombre de la variable un punto y seguido de 
// la informacion que quiero traer.


// let persona = {
//     nombre: "fabian",
//     edad: 45,
//     direccion: "av"
// }

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);


// funcion contructora  para armar persona con toda su informacion
// y dbajo con this. poniamos los parametro adelante para que despues creamos una persona nueva.
// let persona1 que sea igual a new Persona llamabamos al nombre de la funcion con el new adelante y adentro de los parentesis
// poniamos los datos de la persona que agregabamos


function Persona(nombre, edad, direccion) {
    this.nombre = nombre,
    this.edad = edad,
    this.direccion = direccion,
}
let persona1 = new Persona("german", 38, av)
console.log(persona1);