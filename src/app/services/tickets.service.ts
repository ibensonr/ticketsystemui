import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Ticket } from '../models/ticket';

@Injectable()
export class TicketsService {

  ticketsUrl = 'http://localhost:63196/api/ticket';

  constructor(private http: Http) { }

  getTickets() {
    return this.http.get(this.ticketsUrl)
      .map(response => response.json())
      .map(tickets => this.formatAllTickets(tickets))
      .catch(this.handleErrors);
      
  }

  private formatAllTickets(tickets) {
    let convertedList = tickets.map(this.formatTicket);
    return convertedList;
  }

  private handleErrors(errResponse) {
    const errorMessage = errResponse.json().error.message;

    return Observable.throw('Internal Server Error : ' + errorMessage);
  }

  private formatTicket(data) {
    let ticket = new Ticket();
    
    ticket.id = data.id;
    ticket.ticket_name = data.ticketname;
    ticket.ticket_desc = data.ticketdesc;
    ticket.status;    
    
    return ticket;
  }

}
