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