// Training Abracadabra 
function abracadabra(){
    let firstName = prompt('Quel est votre prénom ?');
    let lastName  = prompt('Quel est votre nom ?');
    let age       = prompt('Quel est votre âge');
    age           = parseInt(age);
    alert(`Sapristi ! On ne m'avait pas prévenu que c'était vous, ${firstName} ! Euh... Je veux dire... Monsieur le grand magicien ${lastName} ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !`);
}

abracadabra();

// Calculateur IMC 
function IMCCalculate (weight, height) {
    let heightMeters = height / 100;
    let heightCalculate = Math.pow(heightMeters, 2);
    let result = weight / heightCalculate;
    return result;
}

    let weight = prompt('Quel est votre poids (en kg) ?');
    let height = prompt('Quelle est votre taille (en cm) ?');

    alert(IMCCalculate(weight, height));

// T'as quel âge ?
let age = prompt('Quel âge as-tu ?');
age = parseInt(age);

if (age < 18) { 
        alert("Tu n'es pas majeur !"); 
    }
    else if(age < 21) { 
        alert("Tu es majeur en France !"); 
    } 
    else { 
        alert("Tu es majeur partout, à toi les casinos !"); 
    }

// Conditions ternaires
let x = 4;
x > 3 ? console.log('x est supérieur à 3') : console.log('x est inférieur à 3');


//Subway
let departureStation = "New-York";
let arrivalStation = prompt('Where do you want to go ?') || "Los Angeles station";
let driver = "Carroll Shelby";

if ((departureStation != "" || arrivalStation != "") && driver != "") {
    alert('The train goes on to ' + arrivalStation + '.');
}
else {
    alert('The train doesn\'t go.');
}

// Calculator
function addition(numberA, numberB) {
    return numberA + numberB;
}

function multiplication(numberA, numberB) {
    return numberA * numberB;
}

function substraction(numberA, numberB) {
    return numberA - numberB;
}

function division(numberA, numberB) {
    if(numberB == 0) {
        throw new Error('Divide by zero error');
    }
    return numberA / numberB;
}


do {
    var choice = Number(prompt('What do you want to do ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Substraction\n 4 - Division\n'));
} while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

do {
    var firstNumber  = Number(prompt('Enter your first number : '));
    var secondNumber = Number(prompt('Enter your second number : '));
} while (isNaN(firstNumber) || isNaN(secondNumber));

try {
    switch (choice) {
        case 1 : 
            var result = addition(firstNumber, secondNumber);
            break;
        case 2:
            var result = multiplication(firstNumber, secondNumber);
            break;
        case 3 :
            var result = substraction(firstNumber, secondNumber);
            break;
        case 4 :
            var result = division(firstNumber, secondNumber);
            break;
        default:
            throw new Error('Error here')
        }
        alert('This is result : ' + result);
}
catch(error) {
    alert(error);
}