import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../../services/tickets.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-ticket-resolve',
  templateUrl: './ticket-resolve.component.html',
  styleUrls: ['./ticket-resolve.component.css']
})
export class TicketResolveComponent implements OnInit {

  ticketid: undefined;
  departmentData;
  ticket: Ticket = new Ticket();

  constructor(private departmentService: DepartmentService,
    private ticketService: TicketsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.ticket = new Ticket();

    this.ticketid = this.route.snapshot.params['id'];
    console.log(this.ticketid);

    this.departmentService.getDepartments()
      .subscribe(departments => {
        console.log(departments);
        this.departmentData = departments;
      },
      err => console.log(err));

    if (this.ticketid != undefined) {
      this.ticketService.getTicketDetails(this.ticketid)
        .subscribe(ticket => {
          console.log(ticket);
          this.ticket = ticket;
        },
        err => console.log(err));
    }
  }

  updateTicket() {
    var userID = sessionStorage.getItem('userid');
    console.log(this.ticket);
    this.ticketService.updateTicket(userID, this.ticket)
      .subscribe(ticket => {
      },
      errorMessage => {
        //this.errorMessage = errorMessage;
      });
  }

  closeTicket() {
    var userID = sessionStorage.getItem('userid');
    console.log(this.ticket);
    this.ticketService.closeTicket(userID, this.ticket.id, this.ticket.comment)
      .subscribe(ticket => {
      },
      errorMessage => {
        //this.errorMessage = errorMessage;
      });
  }

}
