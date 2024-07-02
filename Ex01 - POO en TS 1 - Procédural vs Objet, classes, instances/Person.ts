class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName(): string {
    return `I am ${this.name}`;
  }

  tellMyAge(): string {
    return `I am ${this.age} years old`;
  }
}

const Person1: Person = new Person("John Doe", 40);
const Person2: Person = new Person("Mary Jane", 35);

console.info(Person1.tellMyName());
console.info(Person1.tellMyAge());

console.info(Person2.tellMyName());
console.info(Person2.tellMyAge());
