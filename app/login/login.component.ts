import { Component } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector:'m4me-login',
  templateUrl: 'app/login/login.template.html',
})
export class LoginComponent  { name = 'LoginComponent';
  model: any = {};model : any

  login () {
    console.log(this.model.username + " " + this.model.password);
  }

 }
