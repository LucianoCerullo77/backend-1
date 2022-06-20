class User {
    constructor(name, subname, books, pets) {
        this.name = name;
        this.subname = subname;
        this.books = books;
        this.pets = pets;
    }
}


const user = {
    name: 'Luciano',
    subname: 'Cerullo',
    books: [{
        name: 'The Lighthouse',
        autor: 'J.R.R. Tolkien',
        year: '1954',
    },
    {
    name : 'The Lord of the Rings',
        autor: 'J.R.R. Tolkien',
        year: '1954',
    }],
    pets: ['Fish', 'Cat', 'Bird']
}



addPets = user.pets.push('Dog');
getPets = user.pets.join(', ');
getBooksNames = (user) => {
    return user.books.map(book => book.name);
}

const getFullName = (user) => {
    return `${user.name} ${user.subname}`;
}
const countPets = user.pets.length;


console.log(user);  // Imprime todo el objeto
console.log(getFullName(user)); // Imprime el nombre completo
console.log(getBooksNames(user)); // Imprime el nombre de los libros
console.log(countPets); // Imprime el numero de mascotas
console.log(getPets); // Imprime los datos separados por una coma