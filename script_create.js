
//supprimer id
document.querySelector('#a-supprimer').remove()

//Créer les éléments
let header = document.createElement('header');
let menu   = document.createElement('div');
let paragraph = document.createElement('p');

// Personnaliser header
header.textContent           = 'Bienvenue';
header.style.backgroundColor = "#e3b04b";
header.style.padding         = "50px";
header.style.textAlign       = "center";
header.style.fontWeight      = "bold";
header.style.fontFamily      = "Arial";
header.style.fontSize        = "50px";
header.style.color           = "#fff";

// Personnaliser menu
menu.innerHTML             = "<a href ='#'>Accueil</a> / <a href='#'>Une autre page</a>";
menu.style.backgroundColor = '#f1d6ab';
menu.style.padding         = "25px";
menu.style.fontFamily      = "Arial";
menu.style.fontSize        = "25px";

// Personnaliser paragraphe
p.textContent = 'Ceci est un paragraphe créé avec JS !';
p.style.margin = "25px";

// Appeler header, menu, paragraph
document.body.append(header, menu, paragraph);