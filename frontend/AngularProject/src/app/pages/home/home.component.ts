import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeList: Employee[] = [];
  generalEmployeeList: Employee[] = [];

constructor(private employeeService : EmployeeService){ }
  ngOnInit(): void {
    this.employeeService.GetEmployee().subscribe(dataFromDb => {
      const data = dataFromDb.data;

    data.map((item) => {
      item.creationDate = new Date(item.creationDate!).toLocaleDateString('pt-BR');
      item.modificationDate = new Date(item.modificationDate!).toLocaleDateString('pt-BR');
    })

    this.employeeList = dataFromDb.data
    this.generalEmployeeList = dataFromDb.data

    })
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.employeeList = this.generalEmployeeList.filter((employee) => {
      return employee.name.toLowerCase().includes(value.toLowerCase()) || employee.surname.toLowerCase().includes(value.toLowerCase())
    })
  }

}
