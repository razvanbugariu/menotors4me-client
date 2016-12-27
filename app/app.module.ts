import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routableComponents} from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent }  from './login/login.component';
import { LoginService } from './login/login.service'
import { MentorComponent }  from './mentor/mentor.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  FormsModule,
                  HttpModule],
  declarations: [ AppComponent,
                  routableComponents,
                  HeaderComponent,
                  FooterComponent],
  providers : [LoginService],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
