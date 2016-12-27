import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routableComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent }  from './login/login.component';
import { MentorComponent }  from './mentor/mentor.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent, routableComponents, LoginComponent, MentorComponent],
  bootstrap:    [ AppComponent, LoginComponent, MentorComponent]
})
export class AppModule { }
