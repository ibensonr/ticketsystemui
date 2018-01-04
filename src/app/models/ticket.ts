import { TicketHistory } from "./tickethistory";
import { User } from "./user";

export class Ticket {
    id?: number;   
    deptid: number; 
    status: string;
    modifiedon: string;
    subject: string;
    description: string;
    comment: string;
    //prorityid: string;
    tickethistory: TicketHistory[];
    user: User

    constructor() {
        this.deptid = 0;
        this.status = '';
         //this.prorityid = ''; 
        this.modifiedon = '';  
        this.subject = '';
        this.description = '';
        this.comment = '';
        this.tickethistory = null;
        this.user = null;
    }
}