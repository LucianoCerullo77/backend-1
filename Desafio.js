class user {
    constructor(name, subname, books, pets) {
        this.name = name;
        this.subname = subname;
        this.books = books;
        this.pets = pets;
    }
}

const user = new user('Luciano', 'Cerullo', ['The Lord of the Rings', 'The Hobbit'], ['Dog', 'Cat']);

getFullName = this.name + ' ' + this.subname;
