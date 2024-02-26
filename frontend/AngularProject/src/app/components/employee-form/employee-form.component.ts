import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Employee>();
  @Input() actionBtn! : string;
  @Input() titleBtn! : string;
  @Input() employeeData: Employee | null = null;

  employeeForm! : FormGroup;

  
  constructor() {}
  ngOnInit(): void {
    
    this.employeeForm = new FormGroup({
      id: new FormControl(this.employeeData ? this.employeeData.id : 0),
      name: new FormControl(this.employeeData ? this.employeeData.name : '', [Validators.required]),
      surname: new FormControl(this.employeeData ? this.employeeData.surname : '', [Validators.required]),
      department: new FormControl(this.employeeData ? this.employeeData.department : '', [Validators.required]),
      shift: new FormControl(this.employeeData ? this.employeeData.shift : '', [Validators.required]),
      active: new FormControl(this.employeeData ? this.employeeData.active : true),
      creationDate: new FormControl(this.employeeData ? this.employeeData.creationDate : new Date()),
      modificationDate: new FormControl(new Date())
    });
  }
  submit(){
    this.onSubmit.emit(this.employeeForm.value);
  }
}
