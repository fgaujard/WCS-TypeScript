// Define the Animal interface

interface Animals {
  name: string;
  color?: string;
  sound(): string;
  takePic(): string;
  crush(): string;
}

// Abstract class implementing the Animal interface

abstract class Animals implements Animals {
  public name: string;
  public color?: string;

  constructor(name: string, color?: string) {
    this.name = name;
    this.color = color;
  }

  takePic(): string {
    return `You take a picture of a ${this.name}`;
  }

  crush(): string {
    return this.legs === 4
      ? `You crush a ${this.name} 😢`
      : `You can't crush a ${this.name}`;
  }

  feed(): string {
    return this.color === "black"
      ? "You fed me"
      : "I'm not black, you can't fed me";
  }

  protected abstract get legs(): number;
}

// Cats

class Cats extends Animals {
  protected get legs(): number {
    return 4;
  }

  constructor(name: string, color?: string) {
    super(name, color);
  }

  sound(): string {
    return "Meow !!";
  }
}

// Dogs

class Dogs extends Animals {
  protected get legs(): number {
    return 4;
  }

  constructor(name: string, color?: string) {
    super(name, color);
  }

  sound(): string {
    return "Woof !!";
  }
}

// Birds

class Birds extends Animals {
  protected get legs(): number {
    return 2;
  }

  constructor(name: string, color?: string) {
    super(name, color);
  }

  fly(): string {
    return "I believe I can fly !";
  }
}

// Fish

class Fish extends Animals {
  protected get legs(): number {
    return 0;
  }

  constructor(name: string, color?: string) {
    super(name, color);
  }

  swim(): string {
    return "I can swim !";
  }
}

// TESTS

const WhiskersCat = new Cats("Whiskers");
const PotironCat = new Cats("Potiron", "black");
const SnoopDog = new Dogs("Snoop Dog");
const Crow = new Birds("Crow");
const Salmon = new Fish("Salmon");

console.info(WhiskersCat.takePic()); // You take a picture of Whiskers

console.info(WhiskersCat.sound()); // Meow !!

console.info(SnoopDog.sound()); // Woof !!

console.info(Crow.fly()); // I believe I can fly !

console.info(Salmon.swim()); // I can Swim !

console.info(WhiskersCat.crush()); // You crush Whiskers 😢

console.info(PotironCat.feed()); // You fed me
