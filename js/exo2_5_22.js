// var nom;
// nom = "yamina";
// alert(nom);

// prompt("quel montant?", nom);

// var jour;
// jour = prompt("quel jour", "lundi");
// document.write(jour);

// var monExercice;
// monExercice = "j'ai réussi mon exercice";
// document.write(typeof monExercice);
// alert(monExercice);
// var monChiffre = 2022;
// document.write(typeof monChiffre);
// var monChiffreDecimal = 3.14;
// document.write(typeof monChiffreDecimal);
// var maChaineDeCaractere = "57.12";
// console.log(typeof maChaineDeCaractere);
// var maChaineDeCaractere2 = parseFloat(maChaineDeCaractere);
// console.log(typeof maChaineDeCaractere);
// var maChaineDeCaractere3 = parseInt(maChaineDeCaractere2);
// console.log(maChaineDeCaractere3);
// console.log(typeof maChaineDeCaractere3);
// var maChaineDeCaractere4 = maChaineDeCaractere3.toString();
// console.log(typeof maChaineDeCaractere4);
// document.write(
//   maChaineDeCaractere +
//     "-" +
//     maChaineDeCaractere2 +
//     "-" +
//     maChaineDeCaractere3 +
//     "-" +
//     maChaineDeCaractere4
// );

// var annee = 2017;
// var futur = 3;
// var calcul = annee + futur;
// console.log(calcul);
// document.write(calcul + "&nbsp&nbsp" + calcul + "<br>");
// document.write(calcul + "<br>");

// var nb1, nb2, resultat;
// nb1 = 10;
// nb2 = 5;
// resultat = nb1 + nb2;
// console.log(resultat);
// document.write(resultat);
// var resultatSoustraction;
// resultatSoustraction = nb1 - nb2;
// console.log(resultatSoustraction);
// document.write(resultatSoustraction);
// var resultatMultiplicaction;
// resultatMultiplicaction = nb1 * nb2;
// console.log(resultatMultiplicaction);
// document.write(resultatMultiplicaction);
// var resultatDivision;
// resultatDivision = nb1 / nb2;
// console.log(resultatDivision);
// document.write(resultatDivision);
// var modulo = nb1 % nb2;
// console.log(modulo);
// document.write(modulo);

// alert("je sais!");
// var jour;
// jour = prompt("quel jour de la semaine", "lundi");
// document.write(jour);

// var nb1, nb2, nb3, nb4;
// nb1 = "mercredi";
// nb2 = 4;
// nb3 = "mai";
// nb4 = 2022;
// console.log(nb1 + "" + nb2 + "-" + nb3 + "-" + nb4);
// document.write(nb1 + "&nbsp" + nb2 + "&nbsp" + nb3 + "&nbsp" + nb4);

// nb1 = parseInt(nb1);
// console.log(typeof nb1);

// var prix;
// prix = prompt("quel montant?");
// var tva = 1.02;
// var resultat = prix * tva;
// console.log(resultat);
// document.write(resultat);

// var nombreEntier = prompt("Entrez un nombre entier");

// if (nombreEntier > 10) {
//   document.write("yamina");
// }

// var prenom = prompt("entrez votre prénom");
// if (prenom == "yamina") {
//   document.write(prenom);
// } else {
//   document.write("cette valeur n'est pas mon prénom");
// }

// var nombre = prompt("votre nombre");
// var resultat = nombre % 5;

// if (resultat == 0) {
//   document.write(nombre);
// } else {
//   document.write("ce n'est pas un multiple de 5");
// }

// var nb2 = Number(prompt("entrez nb1 :"));
// document.write(typeof nb2);

// var nom = prompt("c'est un essai");
// alert(nom);

// var nombre = prompt("votre nombre");
// if (nombre == 5) {
//   document.write(nombre);
// }
// var nombre = prompt("votre nombre");
// var montant = nombre % 13;
// if (montant == 0) {
//   document.write(nombre + "est un mutiple de 13");
// } else {
//   document.write(nombre + "est pas un mutiple de 13" + "&nbsp" + montant);
// }

// var nb1 = prompt("votre nombre");
// var mod = nb1 % 7;²
// if (isNaN(result)) {
//   document.write(
//     nb1 + "&nbsp" + "est une chaine de carctère composée de lettres"
//   );
// } else {
//   var final = result % 7;
// }
// if (final == 0) {
//   document.write(
//     result +
//       "&nbsp" +
//       "est un mutiple de 7" +
//       "&nbsp" +
//       "votre modulo est de:" +
//       mod
//   );
// } else {
//   document.write(result + "&nbsp" + "votre nombre n'est pas un mutiple de 7");
// }
// var cel = prompt("quel degré?");
// var far = cel * 1.8 + 32;
// document.write("la valeur est de :" + "&nbsp" + far + "°F");

var var1 = 25;
var var2 = "arbre";
var var3;

var3 = var1;
var1 = var2;
var2 = var3;
var2 = prompt("votre saisie");
document.write(var1 + "&nbsp" + "est égale à une chaine de caractère");
