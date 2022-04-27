// var horsTaxes = prompt("Prix HT :");
// console.log("Le prix TTC est de :" + horsTaxes * 1.2 + "€.");
// document.write(
//   "<h3>Résultat<br/>Le prix TTC est de: &nbsp" + horsTaxes * 1.2 + "€.<h3>"
// );

// var nb1 = 10;
// if (nb1 < 50) {
//   console.log("nb1 est bien inférieur à 50");
// }
var nb1 = 10;
var nb2 = 3;
if (nb1 < 50) {
  nb1++;
  nb1 = nb1 * nb2;
  //   console.log("nb1 est bien égale à :" nb1 + nb2);
  document.write(
    "nb1 et nb2 sont bien égale à :" + nb1 + "<br>" + nb2 + "<br>"
  );
  document.write(nb1 + "<br>" + nb2);
}
