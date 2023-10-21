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
// class Person {
//     constructor(name, age, eyeColor) {
//         this.name = name
//         this.age = age
//         this.eyeColor = eyeColor
//     }
// }

// class PostalWorker extends Person {

// }

// const usps = new PostalWorker(
//     "Worker",
//     29,
//     "brown"
// );

// console.log(usps)

// class Chef extends Person {

// }

// const emeril = new Chef(
//     "Emeril",
//     52,
//     "green"
// );

// console.log(emeril)

// //FACTORY FOR POSTALWORKER

// function createPostalWorker(name, age, eyeColor) {
//     return new PostalWorker(name, age, eyeColor)
// }

// const worker1 = createPostalWorker('Michael', 48, 'brown')
// const worker2 = createPostalWorker('Noah', 18, 'brown')

// console.log(worker1)
// console.log(worker2)

// //FACTORY FOR CHEF

// function createChef(name, age, eyeColor) {
//     return new Chef(name, age, eyeColor)
// }

// const chef1 = createChef('Laureen', 39, 'brown')
// const chef2 = createChef('Farah', 18, 'brown')

// console.log(chef1)
// console.log(chef2)