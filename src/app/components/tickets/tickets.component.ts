import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ticketData;

  constructor(private ticketService: TicketsService,private router: Router) { }

  ngOnInit() {
    this.ticketService.getTickets()
    .subscribe(tickets => {
      console.log(tickets);
      this.ticketData = tickets;
    },
    err => console.log(err));
  }

  updateTicket(ticket) {
    console.log(ticket);

    // this.ticketService.updateTicket(ticket)
    // .subscribe(ticket => {
    //   //this.successMessage = 'Employee Created Successfully'
    //   //setTimeout(() => this.successMessage = '', 3000);
    //   //this.alertService.sendAlert('Employee Created Successfully');
    // },
    // errorMessage => {
    //     //this.errorMessage = errorMessage;
    // });
    const link = ['/tickets/create', ticket.id];
    this.router.navigate(link);
  }

  getTicketDetails(ticket) {
    console.log(ticket);

    // this.ticketService.updateTicket(ticket)
    // .subscribe(ticket => {
    //   //this.successMessage = 'Employee Created Successfully'
    //   //setTimeout(() => this.successMessage = '', 3000);
    //   //this.alertService.sendAlert('Employee Created Successfully');
    // },
    // errorMessage => {
    //     //this.errorMessage = errorMessage;
    // });
    const link = ['/tickets/details', ticket.id];
    this.router.navigate(link);
  }

}
