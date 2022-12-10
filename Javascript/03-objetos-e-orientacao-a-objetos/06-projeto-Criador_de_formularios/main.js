class Form{

  items = []
  method = 'GET';

  constructor(container, method, post){
    this.container = document.querySelector(container);
    this.method = method;
    this.post = post;
  }

addItem(item){
  this.items.push(item)
}

}

class Input{

  _type = 'text';
  required = false;

  constructor(name, label){
    this.name = name;
    this.label = label;
  }

  get type(){
    return this._type;
  }

  set type(t){
    if([ 'text', 'password', 'email', 'submit'].includes(t)){
      this._type = t;
    }else{
      throw new Error(`O input "${t}" don't exist`);
    }
  }

}

class Button extends Input{

constructor(label){
  super(' ', label);
  this.type = 'submit';
}

}

let form = new Form('.formArea', 'POST',  'https://example.com');


let email = new Input('email', 'Digite seu email');
email.type = 'email';
email.required = true;
form.addItem(email)


let password = new Input('password', 'Digite sua senha');
password.type = 'password';
password.required = true;
form.addItem(password)

let button = new Button('Enviar');
form.addItem(button)

