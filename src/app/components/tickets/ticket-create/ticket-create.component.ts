import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DepartmentService } from '../../../services/department.service';
import { TicketsService } from '../../../services/tickets.service';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  ticketid: undefined;
  departmentData;
  ticket: Ticket = new Ticket();
  ticketForm: FormGroup;

  constructor(private departmentService: DepartmentService,
    private ticketService: TicketsService, private route: ActivatedRoute ) { }

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

  createTicket() {
    console.log(this.ticket);
    var userData = JSON.parse(sessionStorage.getItem('userid'));
    if (this.ticketid == undefined) {
      this.ticketService.createTicket(this.ticket, userData.id)
        .subscribe(ticket => {
          //this.successMessage = 'Employee Created Successfully'
          //setTimeout(() => this.successMessage = '', 3000);
          //this.alertService.sendAlert('Employee Created Successfully');

          const link = ['/tickets', ticket.id];
          //this.router.navigate(link);
        },
        errorMessage => {
          //this.errorMessage = errorMessage;
        });
    }
    else {
      this.updateTicket();
    }
  }

  updateTicket() {
    var userData = JSON.parse(sessionStorage.getItem('userid'));
    console.log(this.ticket);
    this.ticketService.updateTicket(userData.id, this.ticket)
      .subscribe(ticket => {
        //this.successMessage = 'Employee Created Successfully'
        //setTimeout(() => this.successMessage = '', 3000);
        //this.alertService.sendAlert('Employee Created Successfully');
      },
      errorMessage => {
        //this.errorMessage = errorMessage;
      });
    //const link = ['/tickets/create', ticket.id];
    //this.router.navigate(link);
  }

}
