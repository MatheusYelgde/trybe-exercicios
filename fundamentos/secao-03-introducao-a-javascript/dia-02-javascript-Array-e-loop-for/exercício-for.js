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
 