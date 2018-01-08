import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from '../../node_modules/angular-font-awesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketsService } from './services/tickets.service';
import { HttpModule } from '@angular/http';
import { TicketCreateComponent } from './components/tickets/ticket-create/ticket-create.component';
import { FormsModule } from '@angular/forms';
import { ticketsRouting } from './app.routing';
import { DepartmentService } from './services/department.service';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { UserService } from './services/user.service';
import { TicketAgentviewComponent } from './components/tickets/ticket-agentview/ticket-agentview.component';
import { TicketResolveComponent } from './components/tickets/ticket-resolve/ticket-resolve.component';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,        
    LoginComponent,
    TicketsComponent,
    TicketCreateComponent,
    TicketDetailsComponent,
    TicketAgentviewComponent,
    TicketResolveComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpModule,
    FormsModule,
    ticketsRouting
  ],
  providers: [TicketsService, DepartmentService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
