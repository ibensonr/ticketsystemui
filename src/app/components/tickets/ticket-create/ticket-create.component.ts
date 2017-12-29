import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  ticket : Ticket = new Ticket();
  createForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.ticket = new Ticket();
  }

  createTicket() {

  }

}
