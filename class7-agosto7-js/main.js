//forma 1
var array = [1,2,3,4,5]

array.forEach(element => {
    var residuo = element % 2
    if(residuo === 0) {
        console.log("es par")
    } 
    else {
        console.log("es impar")
    }  
});

//forma 2
var array = [1,2,3,4,5]

array.forEach(element => {
    (element % 2 === 0) ? console.log("es par") : console.log("no es par")
})

//- Dado un {array}, devolver los elementos que empiecen con a - A
//- Verificar que todos los elementos en mi {array} son pares positivos
//- Retornar el total de cada uno de los elementos del {array} al cuadrado

/1
let words = ['almacen', 'Nna', 'alameda', 'Arturo', 'Azucena', 'arbol']
var filtrado = words.filter(word => (word === "a") ? console.log(word) : console.log("no es a ni A"))

//solucion david
words = ["hola","aquí","Alitas","mañana"]
words.filter(word => word[0] === 'a' ||  word[0] === 'A').forEach(item => {
	console.log(`${item} si empieza con a || A`)
})

//2
var array = [1,2,3,4,5, -1, -2, -3]

array.forEach(element => {
    (element % 2 === 0 && element > 0) ? console.log("es par y es positivo") : console.log("no es par")
})


//ejemplo reduce
var words = ["h","o","l","a"]
words.reduce(	function funcionConNombre(valorAnterior, valorActual, indiceActual, words) {
	console.log(valorAnterior, valorActual, indiceActual, words)
	return a + b
}, "Mimi")

//3
[2,2,3,4,5].reduce((initial,current) => {
	return initial + current**2
}, 0)

// otra forma
[2,2,3,4,5].reduce((initial,current) => initial + current**2, 0)


Auto:
	marca
	color
	modelo
	año
	motor
	llantas


persona:
	nombre: Noemi,
	apellidos: Herrera Cortes,
	genero: femenino,
	nacionalidad: mexicana,
	edad: 51,
	religión: catolica,
	profesión; estudiante,
	estado civil: union libre,
	complexión: media
