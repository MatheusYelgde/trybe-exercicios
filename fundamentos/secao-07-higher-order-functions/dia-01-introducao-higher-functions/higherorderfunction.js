// const noobies = (name,surname) => {
//     return {FullName : `${name} ${surname}` , email : `${name}_${surname}@trybe.com`}
// }

// const newEmployees = (funcionario) => {
//     const employees = {
//         id1: funcionario('Pedro','Guerra'),
//         id2: funcionario('Luiza','Drumond'),
//         id3: funcionario('Carla','Paiva'),
//     }
//     return employees;
//   };

//  console.log(newEmployees(noobies));


const luckyNumber = Array.from({length: 5}, () => Math.floor(Math.random() * 5));


const gimmeYourNumber = (number) =>  number

const trueFalse = luckyNumber.some((element) => element === gimmeYourNumber(0))

if (trueFalse === true){
    console.log('Parabéns, você ganhou');
} else {
    console.log('Tente Novamente');
}


