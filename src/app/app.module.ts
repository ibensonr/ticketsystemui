import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from '../../node_modules/angular-font-awesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketsService } from './services/tickets.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,        
    LoginComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [TicketsService],
  bootstrap: [TicketsComponent]
})
export class AppModule { }
