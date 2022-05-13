// document.write("<ul>");
// for (i = 1; i <= 10; i++) {
//   console.log("C'est le tour de manège n° :");
//   document.write( + "C'est le tour de manège n° : " + i + "</li>");
// }
// document.write("</ul>");
// document.write("<hr>");

document.write("<ul>");
var tour = parseInt(prompt("veuillez saisir votre tour : "));
for (i = 1; i <= tour; i++) {
  console.log("C'est votre tour de manège n° : " + i);
  document.write("<li>" + "C'est votre tour de manège n° : " + i + "</li>");
}
document.write("</ul>");
