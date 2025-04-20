/* 
**** LES FONCTIONS ****
// - Une fonction est un programme appelant qui renvoi un résultat ou une action.
//  - Une fonction est consideré comme une variable qui contient une action, et elle peut-etre appellée n'importe ou dans le programme.

Une fonction est caractérisé par :
1. Un nom;
2. Des paramètres (pas obligatoire);
3. Retourner un résultat;
4. Effectuer une action.

*** AVATANGES D'UNE FONCTION ****
- Eviter des taches répétitives en créants des composants dans votre code;
- Falicite la maintenabilité du code (un changement fait dans une fonction, change partout ou la fonction est appelée);
- La gestion des erreurs (Vous saurez facilement quelle fonction renvoi une erreur).

Syntaxe:  

function nomDeLaFonction (parametres) {
    Action a efféctuer

    return resultatDeLaFonction
}


 */


// Fonction qui ne retourne rien (appelée Void)
function printHello() {
    console.log("Hello world!");
}

printHello();


// Fonction avec des paramètres et retourne un résultat
function calculSum(x, y) {
    let somme = x + y;
    return somme
}

let somme = calculSum(10, 20);

console.log(somme)

/*

*** SORTES DE FONCTION

Nous avons 2 types de fonction comme énumerer dans l'exemple précédent.

A. Une fonction vide (appelée Void) : Cette fonction ne retourne rien. Vous pouvez l'appelé immédiatement.

function printHello() {
    console.log("Hello world!");
}

printHello();


B. Une fonction qui retourne un résultat: Cette fonction à le type de la valeur qu'elle retourne. Elle est toujours utilisée comme affectation dans une variable.

function calculSum(x, y) {
    let somme = x + y;
    return somme
}

let somme = calculSum(10, 20);
console.log(somme)

*/


/* 

N.B: NOUS AVONS 2 MAINIERES DE DEFINIR UNE FONCTION

1. UNE FONCTION CLASSIQUES (ANONYMES)
2. UNE FONCTION FLECHEE
*/

// UNE FONCTION CLASSIQUES (ANONYMES)

function printName (name = "Ekolele") {
    console.log("Je suis " + name);
}
//printName();

let printMessage = function printMessage () {
    console.log("Hello world");
}
//printMessage();

let printSomme = function (x = 10, y= 20) {
    let z = x  + y
    return z
}
//console.log(printSomme());


// UNE FONCTION FLECHEE

let age = (age) => {
    console.log("J'ai " + age + " ans");
}
// age(20);