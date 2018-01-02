import { RouterModule, Route } from '@angular/router';

import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketCreateComponent } from './components/tickets/ticket-create/ticket-create.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';

const ticketsRoutes: Route[] = [
    {
        path: '',
        component: TicketsComponent        
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

];

export const ticketsRouting = RouterModule.forRoot(ticketsRoutes);