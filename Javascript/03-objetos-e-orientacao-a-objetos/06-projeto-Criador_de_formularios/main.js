class Form{

  items = [];
  method = 'GET';

  constructor(container, method, action){
    this.container = document.querySelector(container);
    this.method = method;
    this.action = action;
  }

  addItem(item){
    this.items.push(item);
  }

  render(){
    let formElement = document.createElement('form');
    formElement.setAttribute('method', this.method);
    formElement.setAttribute('action', this.action);

    for(let i in this.items){
      this.items[i].render(formElement);
    }

    this.container.appendChild(formElement);
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

  render(formElement){{
    let elementInput = document.createElement('input')
    elementInput.type = this.type;
    elementInput.name = this.name;
    elementInput.placeholder = this.label;
    elementInput.required = this.required
    formElement.appendChild(elementInput)
  }}

}

class Button extends Input{

constructor(label){
  super(' ', label);
  this.type = 'submit';
}

render(formElement){
  let elementInput = document.createElement('input');
  elementInput.type = this.type;
  elementInput.value = this.label;
  formElement.appendChild(elementInput)
}

}

let form = new Form('.formArea', 'POST',  'https://example.com');


let email = new Input('email', 'Digite seu email');
email.type = 'email';
email.required = true;
form.addItem(email);


let password = new Input('password', 'Digite sua senha');
password.type = 'password';
password.required = true;
form.addItem(password);

let button = new Button('Enviar');
form.addItem(button);

form.render()