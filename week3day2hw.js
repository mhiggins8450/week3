class Cat {
    constructor(eyes, legs, fur, color, age) { //five properties
        this.eyes = eyes;
        this.legs = legs;
        this.fur = fur;
        this.age = age;
        this.color = color; //five methods
    }
}

const sphynx = new Cat(2, 4, false, 'translucent', 5) //instance #1
const cheetah = new Cat(2, 4, true, 'spotted', 10) //instance #2

console.log(sphynx)
//Cat { eyes: 2, legs: 4, fur: false, age: 5, color: 'translucent' }
console.log(cheetah)
// Cat { eyes: 2, legs: 4, fur: true, age: 10, color: 'spotted' }