        // Exercício 1

// const a = 6
// const b = 5
// let resultado = 0

// if (a>b) {
//    resultado = 'a'
// } else {
//    resultado = 'b' 
// }

// console.log(resultado);

        // Exercício 2

// const dez = 10
// const quinze = 15
// const vinte = 20
// let resultado = 0

// if (dez > quinze && dez > vinte) {
//     resultado = dez
// } else if (quinze > dez && quinze > vinte) {
//     resultado = quinze
// } else {
//     resultado = vinte
// }

// console.log(resultado);

        // Exercício 3 

// const numb = 0

// if (numb > 0){
//     console.log('Positive');
// } else if (numb < 0) {
//     console.log('Negative');
// } else {
//     console.log('Zero');
// }

        // Exercício 4

let peca = 'Rei'


switch (peca.toLowerCase()) {
    case 'rainha': console.log('Diagonal, horizontal e vertical.');
        
        break;
    case 'rei': console.log('Qualquer Direção');
        
        break;   
    case 'Bispo': console.log('Diagonal');
        
        break;
    case 'Peão': console.log('Apenas uma casa para frente');
       
        break;     
}

