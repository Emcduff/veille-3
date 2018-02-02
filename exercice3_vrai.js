"use strict";

const fs = require("fs");
let objet;

fs.readFile('ProvincesJSON.json', (err, data) => {
	if (err) return console.error(err);
	objet = JSON.parse(data);
});

const contenu_objet_json = (o) =>{
   let info = '<table>';
   for (let p in o) { 
   	info += '<tr><td>' + p + '</td><td>' + o[p] + '</td></tr>';
     //info += p + ': ' + o[p] + '\n </td><td>'; 
   }
   info += '</table>';
   return info;
}

const http = require("http"); 
http.createServer((request, response) => 
{ 
 console.log('branchement sur le port 3000')
 response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
 response.write(contenu_objet_json(objet));
 response.end();
}).listen(3000);