class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`hello ${this.name} and ${this.age}`)
    }
}
module.exports = Person