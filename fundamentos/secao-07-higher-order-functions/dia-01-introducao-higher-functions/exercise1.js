const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  
const authorBornIn1947 = books.find((element) => element.author.birthYear === 1947)
const result = authorBornIn1947.author.name



// const smallerName = books.forEach((element) => element.name)


const smallerName = (book) => {
  let nameBook = ''
  books.forEach((element) => {
    if (element.name.length < book.length){
        nameBook = element.name
    }
  })
    return nameBook;
}

// console.log(smallerName('As Crônicas de Gelo e Fogo'));




  
//   const getNamedBook = () => {
//     const char = books.find((element) => element.name.length === 26)
//     return char
//   }

//  console.log(getNamedBook());




// function everyoneWasBornOnSecXX() {
//   const century = books.every((element) => element.author.birthYear > 1800 && element.author.birthYear < 1902)
//   return century
// }


// const someBookWasReleaseOnThe80s = () => {
//     const release80 = books.some((element) => element.releaseYear > 1981 && element.releaseYear < 1991)
//     return release80
// }


const numbers = [50, 85, -30, 3, 15];


let biggest = numbers.reduce((acc,curr) => {
    if (curr > acc) { 
        acc = curr 
    }
  return acc 
},0)


const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

let x2 = numbers2.reduce((acc,curr,index) => {
    if (numbers2[index] % 2 === 0) {
        acc += curr
    }
    return acc
}, 0)

console.log(x2);