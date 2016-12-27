import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routableComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent }  from './login/login.component';
import { MentorComponent }  from './mentor/mentor.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent,
                  routableComponents,
                  HeaderComponent,
                  FooterComponent],
  bootstrap:    [ AppComponent,
                  LoginComponent,
                  MentorComponent,
                  HeaderComponent,
                  FooterComponent]
})
export class AppModule { }
