'use strict';
/* 
on définit un Object litéral qui contient l'ensemble des provinces 
*/
let oProvince = {  "QC" : "Québec",
                   "ON" : "Ontario",
                   "MA" : "Manitoba",
                   "SK" : "Saskashewan"
                }
/* 
permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */

const contenu_objet_json = (o) => {
   let trace = '';
   for (let p in o) { 
     trace += p + ': ' + o[p] + '\n'; 
   } 
   return trace;
   }

console.log(contenu_objet_json(oProvince))
console.log('----------------------------')

oProvince['AL'] = 'Alberta'
oProvince.NB = 'Nouveau-Brunswick'

console.log(contenu_objet_json(oProvince))