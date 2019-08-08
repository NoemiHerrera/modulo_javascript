//FOR IN

//3-. Se tiene una lista con el nombre de cada uno de los empleados, con los días que faltaron al trabajo
// Ej -> [[David, 4]], [josé , 2]

//a. Si el sueldo diario son 450.00 Y por cada día que faltaron se les descuenta el 2% del salario (acumulable) 
//cuanto es el sueldo fnal del empleado

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


​

  funtion finalSalary(multiplication (montlySalary - totalDiscount)){
      const montlySalary = 450 *30
      return 
  }
    function montlySalary(multiplication (salarydays * daysMounth))
    function absenceDays(multiplication (absenceDays *2%))
  



//FUNCIONES

//Syntax -> 
//Conjunto de sentencias que hacen una tarea , definen valor
// Sintaxis  -> 
// function name (argumemts){
//     //code to be exected
// }

// const myFirstFunction= function (**)

	// code to be executed


​
function subtraction(numberOne, numberTwo) {
    return numberTwo - numberOne
}
​
const calculator = function() {
    let operator = '-'
    let total = Number()
    if (operator === '-') {
        total = subtraction(1, 2)
        console.log(`La resta es: ${total}`);
    } else if (operator === '+') {
        total =  addition(1, 2)
        console.log(`La suma es: ${total}`);
    } else {
        console.error('Operador no soportado');
    }
    return undefined
}
​
var total = calculator(4,5,"-")





    

