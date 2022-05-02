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
var maChaineDeCaractere = "57.12";
console.log(typeof maChaineDeCaractere);
var maChaineDeCaractere2 = parseFloat(maChaineDeCaractere);
console.log(typeof maChaineDeCaractere);
var maChaineDeCaractere3 = parseInt(maChaineDeCaractere2);
console.log(maChaineDeCaractere3);
console.log(typeof maChaineDeCaractere3);
var maChaineDeCaractere4 = maChaineDeCaractere3.toString();
console.log(typeof maChaineDeCaractere4);
document.write(
  maChaineDeCaractere +
    "-" +
    maChaineDeCaractere2 +
    "-" +
    maChaineDeCaractere3 +
    "-" +
    maChaineDeCaractere4
);
