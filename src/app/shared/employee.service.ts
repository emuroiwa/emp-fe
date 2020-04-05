import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

// Employee backend service state

export class EmployeeService {

  formData  : Employee;
  list : Employee[];
  readonly rootURL ="http://localhost:52628/api"

  constructor(private http : HttpClient) { }

  // Post Data to API
  postEmployee(formData : Employee){
   return this.http.post(this.rootURL+'/employees',formData);
    
  }

  // Fetch all data from API
  refreshList(){
    this.http.get(this.rootURL+'/employees')
    .toPromise().then(res => this.list = res as Employee[]);
  }

  //Update data from API
  putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'/employees/'+formData.EmployeeID,formData);
     
   }

    //Remove data from API
   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/employees/'+id);
   }
}
