var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "I am ".concat(this.name);
    };
    Person.prototype.tellMyAge = function () {
        return "I am ".concat(this.age, " years old");
    };
    return Person;
}());
var Person1 = new Person("John Doe", 40);
var Person2 = new Person("Mary Jane", 35);
console.info(Person1.tellMyName());
console.info(Person1.tellMyAge());
console.info(Person2.tellMyName());
console.info(Person2.tellMyAge());
