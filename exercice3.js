'use strict';

let elm;

let unTableau = ['Québec', 'Ontario', 'Manitoba', 'Saskatshewan'];
console.log('////////////////////////////////////////  1')
unTableau.forEach(function(elm,i){ console.log(i + ' ' + elm)})

unTableau.push('Alberta')
unTableau.push('Vancouver')
unTableau.push('Nouveau-Brunswick')
console.log('////////////////////////////////////////  2');
unTableau.forEach(function(elm,i){ console.log(i + ' ' + elm)})

/* l'approche ES6 */
let i=0;
console.log('////////////////////////////////////////  3')
for (elm of unTableau){

console.log(elm + ' ' + i++)

}