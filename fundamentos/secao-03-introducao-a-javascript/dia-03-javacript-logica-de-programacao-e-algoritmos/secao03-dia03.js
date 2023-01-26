        // Exercício 1

let fatorial = 1;


for (let index = 10 ; index > 0 ; index-=1){
fatorial *= index
}
console.log(fatorial);


        // Exercício 2

let palavra ='trybe'
let palavraInvertida = ''

for(let index = 4 ; index >= 0 ; index -= 1){

    palavraInvertida += palavra[index]
}
console.log(palavraInvertida);

        // Exercício 3
        
let array = ['java', 'javascript', 'python', 'html', 'css'];        

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > biggestWord.length) {
          biggestWord = array[index];
        }
      }
          
 for (let index = 0; index < array.length; index += 1) {
        if (array[index].length < smallestWord.length) {
          smallestWord = array[index];
        }
      }
      
      
        // Exercício 4

let maiorPrimo = 2
let lista = []

for(let index = 2 ; index <= 50 ; index+=1){
        lista.push(index);
        
   if(lista[index] > maiorPrimo){
     maiorPrimo = lista[index]
   };     
};

