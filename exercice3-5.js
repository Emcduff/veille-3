 "use strict";
const fs = require("fs");
/* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
fs.readFile('04.txt', (err, data) => {
 if (err) return console.error(err);
 console.log(data.toString());
});
/* «Fin du programme» apparaît avant la lecture du fichier */
console.log("Fin du programme");