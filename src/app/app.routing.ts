import { RouterModule, Route } from '@angular/router';

import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketCreateComponent } from './components/tickets/ticket-create/ticket-create.component';

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
    }

];

export const ticketsRouting = RouterModule.forRoot(ticketsRoutes);