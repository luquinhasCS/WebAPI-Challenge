import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employee?: Employee;
  id!: number;

  constructor (private employeeService: EmployeeService, private router: Router, private route : ActivatedRoute){}
  ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));

      this.employeeService.GetEmployeeById(this.id).subscribe(dataFromDb => {
        const data = dataFromDb.data;
        data.creationDate = new Date(data.creationDate!).toLocaleDateString("pt-BR")
        data.modificationDate = new Date(data.modificationDate!).toLocaleDateString("pt-BR")

        this.employee = data;
      });
  }

  DisableEmployee(): void {
    this.employeeService.DisableEmployee(this.id).subscribe((data => {
      this.router.navigate(['/']);
    }))
  }
}
