import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  actionBtn = "Register"
  titleBtn = "Register new employee"

  constructor(private employeeService: EmployeeService, private router : Router){}
  CreateEmployee(employee : Employee){
    this.employeeService.CreateEmployee(employee).subscribe(data =>{
      this.router.navigate(['/'])
    })
  }
}
