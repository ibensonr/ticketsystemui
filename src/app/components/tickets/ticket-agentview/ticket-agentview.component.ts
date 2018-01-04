import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketsService } from '../../../services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-agentview',
  templateUrl: './ticket-agentview.component.html',
  styleUrls: ['./ticket-agentview.component.css']
})
export class TicketAgentviewComponent implements OnInit {

  ticketData: Ticket;
  constructor(private ticketService: TicketsService,private router: Router) { }

  ngOnInit() {
    var userID = sessionStorage.getItem('userid');
    this.ticketService.getAgentTickets(userID)
    .subscribe(tickets => {
      console.log(tickets);
      this.ticketData = tickets;
    },
    err => console.log(err));
  }

  resolveTicket(ticket) {
    console.log(ticket);
    const link = ['/tickets/helpdeskresolve', ticket.id];
    this.router.navigate(link);
  }

}
