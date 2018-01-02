import { Ticket } from "./ticket";

export class TicketHistory {
    id?: number;
    deptid: number; 
    status: string;
    modifiedon: string;
    subject: string;
    description: string;
    comment: string;
    //prorityid: string;
    //tickethistory: Ticket;

    constructor() {
        
        this.status = '';
         //this.prorityid = ''; 
        this.modifiedon = '';  
        this.subject = '';
        this.description = '';
        this.comment = '';
        //this.tickethistory = new Ticket();
    }
}