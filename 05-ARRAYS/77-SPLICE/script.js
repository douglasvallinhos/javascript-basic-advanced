//                -4       -3        -2        -1
//                 0        1         2         3
const nomes = ['Douglas', 'Fran', 'Valdir', 'Stella'];

//splice(índice, delete, addItem1,addItem2,addItem3...)

//Adicionando varios PUSH de uma vez só no final do array
nomes.splice(nomes.length, 0, 'Bolota', 'Schin');

//REMOvendo o item de indece 2 do array
nomes.splice(2, 1);

console.log(nomes);
