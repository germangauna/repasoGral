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


// funcion contructora  para armar un objeto con toda su informacion, funcion Persona y los datos(nombre, edad, direccion)
// y debajo con this. poniamos los parametro adelante para que despues creamos una persona nueva, que sean igual a los parametros tambien
//Creamos la variable del nuevo objeto, let persona1 que sea igual a new Persona (o sea el nombre de la funcion con el prefijo new),
// abrimos parentesis y dentro pondremos, los datos del objeto que queremos crear, y estos datos quedaran guardados en la variable.


// function Persona(nombre, edad, direccion) {
//     this.nombre = nombre,
//     this.edad = edad;
//     this.direccion = direccion;
// }

// let persona1 = new Persona("german", 38, "av");
// console.log(persona1);

//Tambien la podemos hacer con una clase.
//pondremos class Persona abrimos llaves, y pondremos dentro de las llaves la palabra constructor y por parametros pondremos,
//los datos qwue queremos traer de los obajetos, y debajo el this. como en el anterior
//Y podemos poner una funcion o un metodo,  creamos una funcion y le pasamos un mensaje y por ultimo le popndremos tambien la variable,
// por ejemplo persona1 que sea igual  new persona y dentro de los parentesis los datos del obajeto.
// con la funcion adentro y despúes la llamamos afuera con el pr3efijo de la nueva persona, a´parecera el mensaje.

// class Persona{
// constructor(nombre, edad, direccion) {  
//     this.nombre = nombre,
//     this.edad = edad;
//     this.direccion = direccion;
// }

// hablar(){
//     console.log("hablando "  +  this.nombre);
// }
// }

// let persona1 = new Persona("german", 38, "av");
// console.log(persona1.hablar());


//arreglos
//creamos un arreglo con los productos, y los podemos recorrerlo con un for, o el for of o el forEach, le pasamos al arreglo productos un forEach,
// despues entre parentesis un item arrow function y un console.log del item, y me va a traer a tosdos los productos del arreglo.
//y podemos pasarle varios metodos, filter, para filtrar, el find permite encontrar, y varios, hay que leeer la documentacion, y son de alto orden.
// tabie

// const productos = [
//     {id: 1, producto: "arroz", precio: 100},
//     {id: 2, producto: "fideos", precio: 105},
//     {id: 3, producto: "pan", precio: 50},
//     {id: 4, producto: "flan", precio: 70}
// ];

// //for, for of, y forEach

// productos.forEach(item => console.log(item.producto ));


// si queremos guardar en el localStorage y el sessionStorage, tienen varios metodos,
//setItem para guardar y le pasmos la clave y el valor, getItem para tarer los datos del storage y le pasamos la clave, removeItem si queremos
// borrar alguno en particular y le pondremos la clave, para borar todo clear() asi solo,
// y esta el JSON.stringify que es para guardar el array en formato JSON y se le pasa el elemento que queremos pasar, y esta el JSON.parse que
// es para traer los datos que habiamos guardado en el local o en el session, y le passmos el JSON que habiamos guardado.

//DOM, creamos un arreglo, igual que el anterios, recorrermos con un  froEach() como en ejercicio anterios arrow function, y en las llaves pondremos
// vamos a crear un div con una variablke que sea igual a document. que ete va hacer el puente entrre el html y js, seguido de createElement y
// en los parentesis la etiqueta que queremos crear, "div" por ejemplo, y debajo pondremos div innerHTML que sea igual a los que queremos que aparesca
// en la pantalla de nuestro sitio web, pondremos en bactic las etiquetas con las cuales queremos representar a nuestros datos en la pantalla,
// entonces pondremos un <h2> para el item.id, le ponemos el item de prefijo ya que es el parametro que elegimos para la arrow function, <p> para el 
//nombre del producto y <b> para el precio del producto del array, y fuera de los bactic llamaremos
// a lo que acabamos de crear, necesita un padre, entonces pondremos debajo, document.body este sera el contenedor de nuestro div, seguido del append 
// que este va a ser el encargado de agregarselo al padre, y entre parentesis el nuevo hijo creado div.

// const productos = [
//     {id: 1, producto: "arroz", precio: 100},
//     {id: 2, producto: "fideos", precio: 105},
//     {id: 3, producto: "pan", precio: 50},
//     {id: 4, producto: "flan", precio: 70}
// ];


// productos.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//                     <h2>${item.id}</h2>
//                     <p>${item.producto}</p>
//                     <b>${item.precio}</b>
//     `;

//     document.body.append(div);
// });


// hay ujn metodeo que se lalama el pripend se agrega arriba, y tambien  el innerText te muestra solo texto.


// Ahora lo que vamos hacer es un formulario, iremos al html, con la etiqueta form dentro de esta ppondremos un ID con 
// el nombre formulario, y depues tiene 3 inputs, el primetro dira type text, el segun}do type number, y el tercero tendra
// un type que dira "submit" y seguido de value que este dira el mensaje del boton del formulario y terminara con la 
// etiqueta de cierre de form.
// nos permite recuperar cosas y guardarlos en nuestro javascript, ahora vamos al js, y creamos una variable formulario que sea igual
// a document.getElementById del id que le pusimos como nombre "formulario" entre parentesis y debajo,
// pondremos un escuchador de eventos, nombre de la variable y addEventListener y entre parentesis pondremos el
// "submit"  entre comillas, seguido de un  arrow function , y tenemos que ponerle si o si para que recargue e.preventDefault(); 
// y la (e) en los parentesis de la arrow function, si no pongo esto el fotmulario no se recargara. 
// Ahora creamos otra variablñe inputs por ejemplo que sea igual a e.target.children este hara que ,me traiga la informacion, 
// de los hijos que estan adentro de el fomulario,  entonces si hacemos un console.log de la variable inputs y ponemos la posicion
// del hijo ue queremos ver por consola, [0] y seguido de la .value nos dara el valor mde los que escribieron en el formulario.

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children
    console.log(inputs[0].value);
    console.log(inputs[1].value);
})



mnhm








































