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
    if(['text', 'password', 'email', 'submit'].includes(t)){
      this._type = t;
    }else{
      throw new Error(`O input "${t}" don't exist`);
    }
  }
}

// IMLEMENTACAO

//email

let email = new Input('email', 'Digite seu email');
email.type = 'email';
email.required = true;

// password

let password = new Input('password', 'Digite sua senha')
password.type = 'password';
password.required = true