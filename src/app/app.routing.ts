import { RouterModule, Route } from '@angular/router';

import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketCreateComponent } from './components/tickets/ticket-create/ticket-create.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { LoginComponent } from './components/login/login.component';
import { TicketAgentviewComponent } from './components/tickets/ticket-agentview/ticket-agentview.component';
import { TicketResolveComponent } from './components/tickets/ticket-resolve/ticket-resolve.component';

const ticketsRoutes: Route[] = [
    {
        path: '',
        component: LoginComponent        
    },
    {
        path: 'tickets',
        component: TicketsComponent        
    },
    {
        path: 'tickets/create',
        component: TicketCreateComponent
    },
    {
        path: 'tickets/create/:id',
        component: TicketCreateComponent
    },
    {
        path: 'tickets/details/:id',
        component: TicketDetailsComponent
    }
    ,
    {
        path: 'tickets/helpdeskview',
        component: TicketAgentviewComponent
    },
    {
        path: 'tickets/helpdeskresolve/:id',
        component: TicketResolveComponent
    }
    
    

];

export const ticketsRouting = RouterModule.forRoot(ticketsRoutes);