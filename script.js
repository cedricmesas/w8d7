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

