/**
 * PUC-Minas / Arquitetura de Sistemas Distribuídos
 * Author: Marcos Eduardo da Silva Santos
 */
function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function divide (x, y) {
    
	if(y==0) 
		throw "You Shouldn't divide a number by zero";

    return x / y;
}

function multiply (x, y) {
    return x * y;
}

module.exports = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
}