import { Component } from '@angular/core';

@Component({
  selector:'login',
  templateUrl: 'app/login/login.template.html',
})
export class LoginComponent  {

  name = "asdfasdas";

  login () {
    console.log("Login");
  };

 }
