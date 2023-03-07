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


// const luckyNumber = Array.from({length: 5}, () => Math.floor(Math.random() * 5));


// const gimmeYourNumber = (number) =>  number

// const trueFalse = luckyNumber.some((element) => element === gimmeYourNumber())

// if (trueFalse === true){
//     console.log('Parabéns, você ganhou');
// } else {
//     console.log('Tente Novamente');
// }


// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//     let contador = 0;
//     for (let index = 0; index < rightAnswers.length; index += 1) {
//       const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//       contador += actionReturn;
//     }
//     return `Resultado final: ${contador} pontos`;
// };





