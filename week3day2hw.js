// CREATED CLASS W/O CONSTRUCTOR
// class Cat {
//     name = 'snowball'
//     age = 6
//     color = 'white'

//     play() {
//         console.log(`${this.name} is playing.`)
//     }

//     purr() {
//         console.log(`${this.name} is purring.`)
//     }

//     eat() {
//         console.log(`${this.name} is eating.`)
//     }
// }

// const cheetah = new Cat();
// const lion = new Cat();

// console.log(`cheetah`, cheetah);
// console.log(`lion`, lion);

// cheetah.play();
// cheetah.purr();
// cheetah.eat();
// lion.play();
// lion.purr();
// lion.eat();

// CREATED CLASS W/ CONSTRUCTOR
class Pirate {
    constructor(hook, pegleg, patch) { 
        this.hook = hook;
        this.pegleg = pegleg;
        this.patch = patch;
    }
}

const jollyRoger = [
    new Pirate(true, false, false),
    new Pirate(false, true, false),
    new Pirate(false, true, true),
  ];
  
  const blackPearl = [
    new Pirate(false, true, true),
    new Pirate(true, false, true),
    new Pirate(true, false, true),
  ];
  
  console.log("Jolly Roger Pirates:");
  jollyRoger.forEach((pirate, index) => {
    console.log(`Pirate ${index + 1}: Hook - ${pirate.hook}, Pegleg - ${pirate.pegleg}, Patch - ${pirate.patch}`);
  });
  
  console.log("Black Pearl Pirates:");
  blackPearl.forEach((pirate, index) => {
    console.log(`Pirate ${index + 1}: Hook - ${pirate.hook}, Pegleg - ${pirate.pegleg}, Patch - ${pirate.patch}`);
  });
