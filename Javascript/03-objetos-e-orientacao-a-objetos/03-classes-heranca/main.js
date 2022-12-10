class Person{
  age = 0;
  constructor(name){
    this.name = name;
  }

  sayHi(){
    console.log(`${p1.name} diz oi`)
  }
}

class Student extends Person{

  constructor(name, id){
    super(name)
    this.id = id;
  }

}

let p1 = new Student('Pietro', 01)
p1.age = 20;
let p2 = new Student('Cristian', 02)

p1.sayHi()
// console.log(`${p1.name} tem ${p1.age} anos e matricula ${p1.id}`)