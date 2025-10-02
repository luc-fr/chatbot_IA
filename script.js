const numeros = [1,2,3,4,5];

//MÉTODOS SIMPLES

//unshift
numeros.unshift(0); //adiciona no início

//push
numeros.push(6); //adiciona no final

//shift
numeros.shift(); //remove no início

//pop
numeros.pop(); //remove no final


//MÉTODOS COMPLEXOS

//map
const dobrados = numeros.map(n => n * 2);


console.log(dobrados); //apresentar o código no terminal ( Ctrl+J ), digitar ( node script.js )