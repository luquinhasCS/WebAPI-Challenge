import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl =  `${environment.ApiUrl}/Employee`

  constructor( private http: HttpClient) { }
    GetEmployee() : Observable<Response<Employee[]>> {
       return this.http.get<Response<Employee[]>>(this.apiUrl);
    }
    
    GetEmployeeById(id : number) : Observable<Response<Employee>> {
      return this.http.get<Response<Employee>>(`${this.apiUrl}/${id}`)
    }
    CreateEmployee(employee : Employee) : Observable<Response<Employee[]>> {
      return this.http.post<Response<Employee[]>>(`${this.apiUrl}`, employee);
    }

    EditEmployee(employee : Employee) : Observable<Response<Employee[]>> {
      return this.http.put<Response<Employee[]>>(`${this.apiUrl}`, employee);
    }

    DisableEmployee(id: Number) : Observable<Response<Employee[]>> {
      return this.http.put<Response<Employee[]>>(`${this.apiUrl}/DisableEmployee/${id}`, id)
    }

    DeleteEmployee(id:number) : Observable<Response<Employee[]>> {
      return this.http.delete<Response<Employee[]>>(`${this.apiUrl}?id=${id}`)
    }
}
