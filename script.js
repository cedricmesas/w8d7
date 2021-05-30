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