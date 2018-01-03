import { Department } from "./department";


export class User {
    id?: number;   
    username: string;     
    password: string;
    departments: Department[];
    constructor() {
        this.username = '';
        this.password = '';
        this.departments = null;
    }
}