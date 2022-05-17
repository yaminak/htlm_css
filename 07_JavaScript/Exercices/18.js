// Solution utilisant une série de if/else
// for (var nombre = 1; nombre <= 100; nombre++) {
//     if ((nombre % 3 === 0) && (nombre % 5 === 0)) console.log("FizzBuzz");
//     else if (nombre % 3 === 0) console.log("Fizz");
//     else if (nombre % 5 === 0) console.log("Buzz");
//     else console.log(nombre);
// }

// var nb1= parseInt(prompt("inscrivez-votre nombre"))
for(var nb1 = 1; nb1 <= 100; nb1++) {
    if((nb1 % 3 === 0) && (nb1 % 5 === 0 )){ document.write( "<br>" + "fizzBuzz" + "<br>");
} else if (nb1 % 3 === 0) document.write ( nb1 + " :" + "<h4 style='color:purple'>Fizz</h4>" + "<br>");
    else if (nb1 % 5 === 0) document.write ( nb1 + " :" + "<h4 style='color:orange'>Buzz</h4>" + "<br>");
     else document.write ("<br>" + nb1 + " :" + "<h4 style='color:green'>Aucun</h4>" + "<br>");
}