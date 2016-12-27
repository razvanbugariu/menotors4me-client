import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { MentorComponent }  from './mentor/mentor.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mentors', component: MentorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  LoginComponent,
  MentorComponent
]
