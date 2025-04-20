// LE STRUCTURE DE DONNEES

/* Le Tableau: est un objet qui permet de stocker plusieurs valeurs ou variables qui partagent la meme thématique ou qui ont des données similaires */

const listeFilms = ["Terminator", "Advengers", "Venon", "Spirderman"];



// ACCEDER AUX ELEMENTS DU TABLEAU

console.log(listeFilms[0]) // Element un du tableau à l'Index 0
console.log(listeFilms[1]) // Element un du tableau à l'Index 1


// AJOUTER LES ELEMENTS DANS UN TABLEAU

listeFilms.push("Batman"); // Ajouter un élément à la fin du tableau
listeFilms.push("Moana", "Iron Man"); // Ajouter plusieurs éléments à la fin  du tableau

// console.log(listeFilms)

listeFilms.unshift("Un prince à New York"); // Ajouter un élément au début du tableau
listeFilms.unshift("BangKok", "KingKong"); // Ajouter plusieurs éléments au début du tableau

// console.log(listeFilms)



// SUPPRESSION DES ELEMENTS DANS UN TABLEAU

listeFilms.pop(); // Supprime le dernier élément d'un tableau

// console.log(listeFilms)

listeFilms.shift(); // Supprime le premier élément d'un tableau

// console.log(listeFilms)


delete(listeFilms[2]); // Supprimer un élément spécifique dans mettre à jour le tableau

// console.log(listeFilms)

listeFilms.splice(2, 1); // Supprimer un élément spécifique du tableau. Il comprend 2 paramètres (indexOfElement, NombresElementDelete)

// console.log(listeFilms)



// COVERTIR UN TABLEAU EN UNE CHAINE DE CARACTERES

let myConvertArray = listeFilms.toString(); // toString() convertit un tableau en chaine de caractère uniquement.

// console.log(myConvertArray);

let myConvertArraySpecial = listeFilms.join(" - "); // joint() converti un tableau en chaine de caractère et en choisi comment espacer les éléments du tableau. Vous pouvez choisir: " - ", " | " , etc ...

// console.log(myConvertArraySpecial);










