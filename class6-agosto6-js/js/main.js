const MONTHLY_SALARY = 450 * 30
const DISCOUNT_PERCENT = 2
let paysheet = [['Thelma', 5], ['Irving', 3], ['Hector', 1]]
​
for (let index in paysheet) {
    let worker = paysheet[index]
    let totalDiscountPercent = worker[1] * DISCOUNT_PERCENT
    let totalDiscount = MONTHLY_SALARY * (totalDiscountPercent / 100)
    let finalSalary = MONTHLY_SALARY - totalDiscount
    console.log(`${worker[0]}: $${finalSalary}`);
}


const MONTHLY_SALARY = 450 * 30
const DISCOUNT_PERCENT = 2


// 'Holi a todos'
// ['Holi','a','todos']
// 1-Holi 2-a 3-todos 
// 1-H      2-A     3-T
// 1-Hola   2-A     3-Todos
// ['Holi','A','Todos']
// 'Holi A Todos'
​
const capitalize = function (phrase) {
    let wordArray = phrase.split(' ')
    for (index in wordArray) {
		
			let word = wordArray[index]
        let letterCapitalize = word[0].toUpperCase()
        let wordCapitalize = `${letterCapitalize}${word.slice(1)}`
        wordArray[index] = wordCapitalize
    }
    return wordArray.join(' ')
}

//Escribitr una función que acepte
//como argumento un string y capitalizar cada palabra dentro de un string

//Escribir una función cuyo argumento sea un string devuelva la palabra mas larga
//dentro de el

//Dada una matriz obtener la cantidad total de unos que aparezcan en ella



function largeWord (userWord) {
	var wordArray = userWord.split(" ")
	console.log(wordArray)
	for ( index in wordArray ) {
		var lengthWord = [wordArray[index].length]
		console.log(lengthWord)
		//var lengthArray = lengthWord.push(wordArray[index].length)
	}
		//var lengthWordArray = [lengthWord]

return lengthWord
}





