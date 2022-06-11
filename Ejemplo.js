//Funciones y Closures (Funciones anidadas)
// Language: javascript
// Path: BackEnd\Clase 2\Ejemplo.js
//¿Qué es una función anidada?
//una función anidada es una función que se puede llamar dentro de otra función.
//¿Cómo se puede definir una función anidada?
//La función anidada se define con la palabra reservada function y se puede definir dentro de otra función.
//¿Cómo se puede llamar una función anidada?
//La función anidada se puede llamar con la palabra reservada call.
//¿Cómo se puede llamar una función anidada desde otra función?
//La función anidada se puede llamar con la palabra reservada apply.
//¿Cómo se puede llamar una función anidada desde otra función?
//La función anidada se puede llamar con la palabra reservada bind.


function showList(list = []) {
    if(list.length == 0) {
        return "Lista vacía";
    }
    else {
        return list;
    }
}

showList([1,2,3,4,5]);

function multiply(a, b) {
    return a * b;
}

const doublemultiply = multiply(2);
const triplemultiply = multiply(3);

console.log(doublemultiply(5));
console.log(triplemultiply(5));

console.log(multiply(2,3));


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class counter {
    constructor(nombre) {
        this.nombre = nombre;
        this.individualNumber = 0;
    }

    static globalNumber = 0;

    getResponsable() {
        return this.nombre;
    }

    getIndividualNumber() {
        return this.individualNumber;
    }

    getGlobalCounter() {
        return counter.globalNumber;
    }
    
    count() {
        this.getIndividualNumber()++;
        counter.globalNumber++;
    }
}


const user1 = new User("Luciano", 19);
const user2 = new User("Nicolas", 20);
const user3 = new User("Cerullo", 21);

