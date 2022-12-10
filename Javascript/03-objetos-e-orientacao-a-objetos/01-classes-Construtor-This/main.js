class Person {
  age = 0;
  steps = 0;

  constructor (name){
     this.name = name;
  }

  takeStep(){
    this.steps++;
  }

  setAge(newAge){
    if(typeof newAge === 'number')
    this.age = newAge;
  }

}



let p1 = new Person('João')
let p2 = new Person('Maria')
let p3 = new Person('Pedro')

p1.setAge(25)

console.log(`O ${p1.name} tem ${p1.age} anos`) 

// console.log(`p1 = ${p1.name} tem ${p1.age} anos`);
// console.log(`p2 = ${p2.name} tem ${p2.age} anos`);
// console.log(`p3 = ${p3.name} tem ${p3.age} anos`);