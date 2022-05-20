// var camarades = ["Michel" , "Rashid", "Salima" , "Sorenne", "Cédric" , "Rémi", "Lucas" , "Mariama" , "Mathieu" , "Yamina" , "Eddy" , "Shazad", "<br>"];
// document.write(camarades)
// console.log(camarades)

// var m = camarades.sort();
// document.write(camarades)
// console.log(camarades)


var nom = [];

for (var i = 0; i<= 5; i++) {
    nom[i] = prompt("insérez un nom");
    document.write(nom[i])
    console.log(nom[i]);
}
nom.sort()
for (var e = 0; e < nom.length; e++){
document.write(nom[e]);
console.log(nom);
}

// var noms = [];

// for (var i = 0; i <= 5; i++) {
//     noms[i] = prompt("insérez un nom")
//     document.write("vous avez taper : " + noms[i] + "<br>")
// }
// noms.sort()

// for (var e = 0; e < noms.length; e++) {
//     document.write(" <br> je vous les ai rangé par ordre alphabetique : " + noms[e])
// }

// console.log(noms)