import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  inputdata : any
  employee!: Employee
  
  constructor(private employeeService: EmployeeService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public employeeId:any,
              private ref : MatDialogRef<DeleteModalComponent>
             )
    {}

  ngOnInit(): void {
    this.inputdata = this.employeeId;
    console.log(this.inputdata);
    this.employeeService.GetEmployeeById(this.inputdata.employeeId).subscribe((dataFromDb)=>{
      this.employee = dataFromDb.data;
    })
  }
  
  Delete(){
    this.employeeService.DeleteEmployee(this.inputdata.employeeId).subscribe((dataFromDb)=>{
      this.ref.close();
      window.location.reload();
    });
  }

  Cancel(){
    this.ref.close()
  }

}
