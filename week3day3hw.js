//STATIC METHODS & PROPERTIES
// class Governor {
//     static age = 42
//     static style = 'awkward'
//     static gender = 'non-binary'

//     static announce() {
//         return 'I am the first non-binary Governor'
//     }

//     static greet() {
//         return 'Hello. I have been in politics since I was 18'
//     }
// }

// console.log(Governor.announce());
// console.log(Governor.greet());


//INHERITANCE
class Person {
    constructor(name, age, eyeColor) {
        this.name = name
        this.age = age
        this.eyeColor = eyeColor
    }
}

class PostalWorker extends Person {
    constructor(name, age, eyeColor, hairColor) {
        super(name, age, eyeColor);
        this.hairColor = hairColor
    }
}

const worker1 = new PostalWorker(
    "Denise",
    29,
    "brown", 'black'
);

// const worker2 = new PostalWorker(
//     "Dennis",
//     45,
//     "hazel", 'grey'
// );
// console.log(worker2)

class Chef extends Person {
    constructor(name, age, eyeColor, weight) {
        super(name, age, eyeColor);
        this.weight = weight
    }
}

const chef1 = new Chef(
    "Denise",
    29,
    "brown", 'None of your damn business'
);

const chef2 = new Chef(
    "Dennis",
    29,
    "brown", 218
);
console.log(chef1)