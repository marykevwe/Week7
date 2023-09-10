class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`The ${this.species} makes a ${this.sound} sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(species, sound, color) {
      super(species, sound);
      this.color = color;
    }
  
    makeSound() {
      console.log(`The ${this.color} ${this.species} barks: ${this.sound}!`);
    }
  }
  
  const myDog = new Dog('Dog', 'Woof', 'black');
  
  myDog.makeSound();
  