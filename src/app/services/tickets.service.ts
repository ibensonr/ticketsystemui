import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Ticket } from '../models/ticket';
import { TicketHistory } from '../models/tickethistory';

@Injectable()
export class TicketsService {

  ticketsUrl = 'http://localhost:63196/api/ticket';

  ticketHistoryUrl = 'http://localhost:63196/api/TicketHistory';

  constructor(private http: Http) { }

  getUserTickets(userid) {
    return this.http.get(this.ticketsUrl + "/GetTicketForUser/" + userid)
      .map(response => response.json())
      .map(tickets => this.formatAllTickets(tickets))
      .catch(this.handleErrors);

  }

  getAllTickets() {
    return this.http.get(this.ticketsUrl)
      .map(response => response.json())
      .map(tickets => this.formatAllTickets(tickets))
      .catch(this.handleErrors);

  }

  getTicketDetails(ticketid) {
    return this.http.get(this.ticketsUrl + "?id=" + ticketid)
      .map(response => response.json())
      .map(ticket => this.formatTicket(ticket))
      .catch(this.handleErrors);

  }

  getTicketHistoryById(ticketid) {
    return this.http.get(this.ticketHistoryUrl + "?id=" + ticketid)
      .map(response => response.json())
      .map(ticket => this.formatTicket(ticket))
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
    ticket.deptid = data.deptid;
    ticket.subject = data.subject;
    ticket.description = data.description;
    ticket.comment = data.comment;
    ticket.status = data.status;
    ticket.modifiedon = data.modifiedon;
    ticket.tickethistory = data.tbltickethistory;
    return ticket;
  }

  private formatTicketHistory(data) {
    let ticket = new TicketHistory();

    ticket.id = data.id;
    ticket.deptid = data.deptid;
    ticket.subject = data.subject;
    ticket.description = data.description;
    ticket.comment = data.comment;
    ticket.status = data.status;
    ticket.modifiedon = data.modifiedon;
    //ticket.tickethistory = data.tbltickethistory;
    return ticket;
  }

  createTicket(ticket, userid) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.ticketsUrl + "?userid="+userid, ticket, { headers: headers })
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  updateTicket(ticket) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .put(this.ticketsUrl + "?id=" + ticket.id, ticket, { headers: headers })
      .map(response => response.json())
      .catch(this.handleErrors);
  }

}
