/*

STRUCTURES CONDITIONNELLES

B. LES BOUCLES
Une boucle est une structure conditionelle qui permet de répéter du code un certains nombres de fois jusqu'à ce le test ne soit plus vrai.

Il existe 2 types de boucles :

1. la boucle FOR : Permet de répéter du code un certains nombre de fois. On l'utilise si vous savez le nombre de fois que vous voulez répéter du code.

2. la boucle WHILE: Permet de répéter du code autant de fois qu'il le faut jusqu'à ce que la condition ne soit plus vraie.

*/

/* 
1. LA BOUCLE FOR

Syntaxe: 

for(Initialisation de la boucle; nombre de tour de la boucle; l'incrémentation de la boucle) {
    Code a répéter
}

N.B: - Le compteur de la boucle FOR doit etre déclaré dans la boucle.
Par convention, un compteur est déclaré par la variable i, vous le trouverez sous dans le code des autres.  Vous pouvez aussi dire par exmeple let compteur = 0; il n'a pas de problème mais c'est ne pas une manière récommandé.
    - N'oubliez jamais d'incrémenter la valeur de votre compteur i. Sinon, vous allez créer une boucle infinie et cela pourrait faire planter votre navigateur.

*/
// let message = "Boujour";

// for (let i = 1; i <= 10; i++) {
//     console.log(message);
//     // Ce code sera répéter 10 fois et si le nombre de tour est terminé, nous allons sortir de la boucle, le code ne sera plus répété.
// }

const listFilms = ["Tor", "Aladin", "Iron Man", "Venon"];

for (let i = 0; i < listFilms.length; i++) {
    console.log(listFilms[i]);
    // Ce code nous a permis de parcourir les éléments de notre tableau qui contient les noms de film et afficher chaque film à chaque fois que notre boucle tournent. Ici la boucle tourne 4 fois parceque nous avons utilisé la proprièté lenght qui permet de compter le nombre d'éléments du tableau
}




/*
2. LA BOUCLE WHILE

Syntaxe:

let i = 0

while(nombre de fois à répéter le code) {
    Code à répéter

    incrémentation de la boucle i
}

N.B: - Pour la boucle WHILE, le compteur i est déclaré avant la boucle et non à l'intérieur de la boucle.
    - N'oubliez jamais d'incrémenter la valeur de votre compteur i. Sinon, vous allez créer une boucle infinie et cela pourrait faire planter votre navigateur.

*/

/*

let i = 0;

while (i < listFilms.length) {
    console.log("Hello world!")
    // Dans cet exemple, tant que la valeur de notre boucle restera inférieur au nombre d'élément de notre table, le code sera toujours répété; Et une fois la valeur de notre boucle sera supérieur au nombre d'éléments de notre tableau, la répétition du code sera stopper et nous allons sortir de la boucle.
    i++
}

*/

/*

let myName = "Ekolele";
let nomUser = prompt("Ecrivez le nom :" + myName);
let i = 0;

if (nomUser === myName) {
    console.log("Bonjour " + nomUser);
}else {
    while (nomUser !== myName) {
        let nomUser = prompt("Ecrivez le nom :" + myName);
        i++
    }
}

*/
 