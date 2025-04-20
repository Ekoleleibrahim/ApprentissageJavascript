// LES OPERATEURS
/*
    Opérateur d'assignation ou affectation: =
    Opérateur de concaténation : +
    Opérateurs arithmétiques ou de calcul: + , - , * , / , %
    Opérateurs de comparaison: > , >= , < , <= , == , === , != , !==
    Opérateurs logiques : && , || , ! 
*/

/* A. Opérateur d'assignation ou affectation */

let fistName = "Ekolele ";
let lastName = "Chadrack ";
let age = 20;

/* B. Opérateur de concaténation */

let completName = fistName + lastName + age;

/* C.Opérateurs arithmétiques ou de calcul */

let x = 20;
let y = 22;
const add = x + y;
const soust = x - y;
const mult = x * y;
const div = x / y;
const modul = x % y;
const expos = x ** y;

// console.log(add);
// console.log(soust);
// console.log(mult);
// console.log(div);
// console.log(modul);
// console.log(expos)

/* 
Priorité des opérateurs:
    1. Les parenthèses
    2. Les exposants
    3. Les multiplications et les divisions de la gauche vers la droite
    4. Les additions et les soustractions de la gauche vers la droite
*/


/* D. Opérateurs de comparaison */

// console.log(50 > 20 ) // 50 > 20    True

// console.log(50 >= 20) // 50 >= 20   True

// console.log(50 < 20) // 50 < 20     False

// console.log(50 <= 20) // 50 <= 20   False

/* Ici l'entier 50 est égale à la chaine de caractère "50" parceque l'opérateur logique == compare uniquement la valeur et non le type. Ceci est une méthode d'égalité non récommandé mais peut etre vous pourrez en avoir besoin.  */

// console.log( 50 == "50")  // 50 == "50"   True

/* Ici l'entier 50 est égale à l'entier 50 parceque nous avons utilisé l'opérateur d'égalité stricte. Si vous voulez vraiment comparé 2 valeurs de manière stricte, vous devez utilisé ===. Ceci est méthode récommandé. */

// console.log(50 === 50)  // 50 === 50    True


// Ici aussi il en va de meme avec les exemples précédents

// console.log(50 != "50")  // 50 != "50"     False
// console.log(50 !== "50")  // 50 !== "50"   True



/* E.Opérateurs logiques */


/*

if (fistName !== lastName && fistName === lastName) {
       console.log("Mon message")
}

*/


/*

if (fistName !== lastName || fistName === lastName) {
    console.log("Mon message")
}

*/