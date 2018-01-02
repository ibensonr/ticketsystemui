import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TicketsService } from '../../../services/tickets.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticketid = undefined;

  ticket: Ticket = new Ticket();

  constructor(private route: ActivatedRoute, private ticketService: TicketsService) { }

  ngOnInit() {

    this.ticketid = this.route.snapshot.params['id'];

    if (this.ticketid != undefined) {
      this.ticketService.getTicketHistoryById(this.ticketid)
        .subscribe(ticket => {
          console.log(ticket);
          this.ticket = ticket;
        },
        err => console.log(err));
    }
  }

}
