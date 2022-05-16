// // alert('test');

// var disMoi = "";
// var i = 1;

// while ((disMoi !== "oui") && (disMoi !== "non") && (disMoi !== "Oui") && (disMoi !== "Non") && (disMoi !== "OUI") && (disMoi !== "NON")) {
//     disMoi = prompt("Allez!! On joue à ni oui ni non?");
//     document.write('"' + disMoi + '" n\'est pas une réponse, pour la ' + i + '° fois, veux-tu jouer oui ou non? <br>');
//     i++;
// }
// i--;//parce qu'il y a une incrémentation en trop
// document.write("<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " + i + " tours.</p>");

//  alert("veuillez entrer votre réponse sans le oui ou non");
// var reponseUser = prompt("ça va ?");
// while ((reponseUser != "oui") && (reponseUser != "non")) {
//     reponseUser = prompt("t'es majeur ?"); 
//     if ((reponseUser != "oui") && (reponseUser != "non")) {
//         document.write (reponseUser + " vous avez gagnez !");}
//    } 
//         document.write( reponseUser + "Vous avez perdu ! " + "veuillez entrer votre texte à nouveau sans le oui et non")
    
    
var nom = prompt("entrez votre mot");
while ((nom !== "mitra") && (nom !== "formatrice")) {
    prompt("félicitation")
    document.write( "félicitation");
    if (( nom == "mitra"|| nom == "formatrice")) {
        prompt( nom + "perdu ! Entrez à nouveau votre mot sans mitra ni formatrice")
        document.write( nom + " perdu ! Entrez à nouveau votre mot sans mitra ni formatrice")
    }
}
