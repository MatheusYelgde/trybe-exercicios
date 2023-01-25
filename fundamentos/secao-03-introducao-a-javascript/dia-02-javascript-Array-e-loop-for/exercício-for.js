        //Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

        //Exercício 2
let soma = 0

for(index = 0; index < numbers.length ; index += 1)
 soma = soma + numbers[index]
 console.log(soma)
        
        //Exercício 3
let media = 0
for(index = 0; index < numbers.length ; index += 1)
 media = soma/numbers.length
 console.log(media);
       
        //Exercício 4

if (media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

        //Exercício 5

let maiorNumero = 0

for(index = 0 ; index < numbers.length ; index+= 1)
 maiorNumero =  Math.max(...numbers);
 console.log(maiorNumero);
 
         //Exercício 6

        
let result = 0;
         
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result += 1;
    }
}
         
if (result === 0) {
console.log('nenhum valor ímpar encontrado');
} else {
console.log(result);
}
         




        //Exercício 7

let menorNumero = 0

for(index = 0 ; index < numbers.length ; index+= 1)
menorNumero =  Math.min(...numbers);
console.log(menorNumero);

        
        //Exercício 8

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
        numeros.push(index);
}
        
console.log(numeros);

         //Exercício 9

let div = []

for (let index = 0; index < numeros.length; index += 1){
 
        div = numeros[index] / 2

 console.log(div);
}



