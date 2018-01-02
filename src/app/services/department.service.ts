import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Department } from '../models/department';

@Injectable()
export class DepartmentService {

  departmentsUrl = 'http://localhost:63196/api/Department';

  constructor(private http: Http) { }

  getDepartments() {
    return this.http.get(this.departmentsUrl)
      .map(response => response.json())
      .map(tickets => this.formatAllDepartments(tickets))
      .catch(this.handleErrors);
      
  }

  private formatAllDepartments(departments) {
    let convertedList = departments.map(this.formatDepartment);
    return convertedList;
  }

  private handleErrors(errResponse) {
    const errorMessage = errResponse.json().error.message;

    return Observable.throw('Internal Server Error : ' + errorMessage);
  }

  private formatDepartment(data) {
    let department = new Department();
    
    department.id = data.id;
    department.deptname = data.deptname;
    department.deptdesc = data.deptdesc;

    return department;
  }

}
