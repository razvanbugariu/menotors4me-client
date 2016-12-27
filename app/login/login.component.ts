import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../login/login.service';

@Component({
  // moduleId: module.id,
  selector:'m4me-login',
  templateUrl: 'app/login/login.template.html',
})
export class LoginComponent  {

constructor(
     private route: ActivatedRoute,
     private router: Router,
     private loginService: LoginService) { }

  model: any = {};

  login () {
    this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log("Success");
                },
                error => {
                    console.log("Fail");
                });
  }

 }
