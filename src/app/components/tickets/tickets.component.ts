import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ticketData;

  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.ticketService.getTickets()
    .subscribe(tickets => {
      console.log(tickets);
      this.ticketData = tickets;
    },
    err => console.log(err));
  }

}
