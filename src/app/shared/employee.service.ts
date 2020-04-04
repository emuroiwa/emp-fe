import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData  : Employee;
  list : Employee[];
  readonly rootURL ="http://localhost:52628/api"

  constructor(private http : HttpClient) { }

  postEmployee(formData : Employee){
   return this.http.post(this.rootURL+'/employees',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/employees')
    .toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'/employees/'+formData.EmployeeID,formData);
     
   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/employees/'+id);
   }
}
