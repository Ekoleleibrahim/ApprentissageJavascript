/* LA LOGIQUE DE PROGRAMMATION */

/* Les Blocs de Code est un regroupement des parties de code. Elles permettent d'organiser le code pour la lisibilité et éclaircir que fait un bout de code.

Exemple du Calcul de la somme

{
    let x = 20;
    let y = 30;
    let sum = x + y;
    // console.log(sum)
}

N.B: Vous serez plus améné à le utiliser avec des fonctions ou des conditions.

*/


/* 
STRUCTURES CONDITIONNELLES

 A. LES CONDITIONS 
 Les conditions sont des structures conditionelles qui contiennent un test dont le résultat sera Vrai ou Faux.

 Pour rédiger une condition, vous devez :
 1. Utiliser des structuctures conditionnelles;
 2. Rédiger un test;
 3. Rédiger un bloc de code.

 En Js, il existe 2 types de condtions:

 a. if/else : Exécute du code en testant une seule réponse de l'utilisateur.

 b. switch/case : Exécute du code en testant plusieurs réponses de l'utlisation
 
 */

//  a. if/else

// Savoir si l'utilisateur est majeur ou mineur
let ageUser = Number(prompt("Votre age:")); // la méthode prompt() permet d'intéragir avec l'utilisateurou savoir ce que l'utilisateur a écrit

if (ageUser >= 18) {
    // si la condition est vrai, ce bout de code sera exécuté
    console.log("Vous etes majeur");
}else {
    // si la condition est fausse, ce bout de code sera exécuté
    console.log("Vous etes mineur");
}

// Savoir si un nombre est Pair ou Impair
let numberUser = Number(prompt("Entrez une valeur : "));

if (numberUser % 2 === 0) {
    console.log("le nombre est pair");
}else {
    console.log("le nombre est impair");
}

/* 
N.B: Vous pouvez écrire des conditions if/else de manière simplifié avec l'opérateur ternaire ?.
Syntaxe: let numberUser = (condition à tester) ? Action 1 a exécuté : Action 2 a exécuté
*/
numberUser = (numberUser % 2 === 0) ? console.log("le nombre est pair") : console.log("le nombre est impair");



// b. switch/case

let name1, name2, name3, name4;
name1 = "Ekolele";
name2 = "Ntumba";
name3 = "Tshika";
name4 = "Romanie";
let nameUser = prompt("Quel est votre nom :");

switch (nameUser) {
    case name1 :
        console.log("Votre nom est " + name1);
    break
    case name2 :
        console.log("Votre nom est " + name2);
    break
    case name3 :
        console.log("Votre nom est " + name3);
    break
    case name4 :
        console.log("Votre nom est " + name4);
    break
    default :
    console.log("Désole le nom est incorrect");
}





