// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let form  = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 1001);
let game         = 0;
let choosenNumber;

// Etape 6 - Créer la fonction vérifier
function verify(number) {

    let instruction = document.createElement('div');

    if(number < randomNumber) {
        instruction.textContent = "#" + game + "(" + nombre + ") C'est plus !";
        instruction.className = "instruction plus";
    }
    else if(number > randomNumber) {
        instruction.textContent = '#' + game + "(" + nombre + ") C'est moins !";
        instruction.className = "instruction moins";
    }
    else {
        instruction.textContent = '#' + game + "(" + nombre + ") Vous avez trouvé le juste prix !";
        instruction.className = "instruction fini";
    }

    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
        error.style.display = "inline";
    }
    else {
        error.style.display = "none";
    }
})
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    }
    else {
        game++;
        input.style.borderColor = 'silver';
        choosenNumber           = input.value; // stocker le number choisi
        input.value             = '';
        verify(choosenNumber);
    }
});


