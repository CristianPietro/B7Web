class Person {
  _age = 10;
  steps = 0;

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeASteps(){
    this.steps++;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  get age(){
    return this._age;
  }

  set age(x){
    if(typeof x === 'number'){
      this._age = x
    }

  }

}

let p1 = new Person('João', 'Marques');
let p2 = new Person('Maria', 'Lima');
let p3 = new Person('Pedro', 'Soares');

p1.age = 25


console.log(`O ${p1.fullName} tem ${p1.age}`) ;