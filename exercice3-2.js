'use strict';

let unTableau = ['Québec', 'Ontario', 'Manitoba', 'Saskatshewan']

const affiche_tableau = (t) =>{ 
   console.log('----------------------------') 
   /* on accède au tableau par .forEach() */ 
   t.forEach((elm,i)=>{
     console.log(i + ' ' + elm) 
   })
}
affiche_tableau(unTableau)

unTableau.push('Alberta')
unTableau.push('Vancouver')
unTableau.push('Nouveau-Brunswick')

affiche_tableau(unTableau)