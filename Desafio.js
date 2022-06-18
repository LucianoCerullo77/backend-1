class User {
    constructor(name, subname, books, pets) {
        this.name = name;
        this.subname = subname;
        this.books = books;
        this.pets = pets;
    }
}

const user = new User('Luciano', 
'Cerullo',
 ['The Lighthouse', 'The Wall', 'Heartless'], 
 ['Fish', 'Cat', 'Bird']);

getFullName = this.name + ' ' + this.subname;
addPet = this.pets.push('Dog'); 
countPets = this.pets.length;
addBooks = this.books.push('Heartstoppers');
getBooksNames = this.books.map(book => book);

console.log(user);  // Imprime todo el objeto
