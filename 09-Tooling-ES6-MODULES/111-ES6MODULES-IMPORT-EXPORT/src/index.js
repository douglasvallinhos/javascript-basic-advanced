//npm install --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2
// utilizar 'as' para mudar o nome
import { nome as novoNome, soma } from './modulo1.js';
//importar a funcao default
import qualquerNome from './modulo1.js';

console.log(novoNome);
console.log(soma(2, 4));
