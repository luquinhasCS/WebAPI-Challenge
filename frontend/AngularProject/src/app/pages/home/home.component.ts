import { Component, Injector, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { ColDef } from 'ag-grid-community';
import { EditButtonComponent } from 'src/app/components/edit-button/edit-button.component';
import { DetailsButtonComponent } from 'src/app/components/details-button/details-button.component';
import { DeleteButtonComponent } from 'src/app/components/delete-button/delete-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeList: Employee[] = [];
  generalEmployeeList: Employee[] = [];

  colDefs: ColDef[] = [
    { cellRenderer: (params: { data: any; }) => {
      const employeeData: Employee = params.data;
      if (employeeData['active']) {
        return "<img src='../../../assets/images/Ativo.png' style='width: 20px'>"
      } else {
        return "<img src='../../../assets/images/Inativo.png' style='width: 20px'>"
      }
    }, headerName: 'Status' },
    { field: 'name', headerName: 'Name' },
    { field: 'surname', headerName: 'Surname' },
    { field: 'department', headerName: 'Department' },
    {cellRenderer: EditButtonComponent,
    cellRendererParams(params: { data: { id: any; }; }) {
      return {
        employeeId: params.data.id
      }
    }},
    {cellRenderer: DetailsButtonComponent,
    cellRendererParams(params: { data: { id: any; }; }) {
      return {
        employeeId: params.data.id
      }
    }},
    { cellRenderer: DeleteButtonComponent,
      cellRendererParams(params: { data: { id: any; }; }) {
        return {
          employeeId: params.data.id
        }
      }
    }
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
    resizable: true,
  };

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.GetEmployee().subscribe((dataFromDb) => {
      const data = dataFromDb.data;

      data.map((item) => {
        item.creationDate = new Date(item.creationDate!).toLocaleDateString(
          'pt-BR'
        );
        item.modificationDate = new Date(
          item.modificationDate!
        ).toLocaleDateString('pt-BR');
      });

      this.employeeList = dataFromDb.data;
      this.generalEmployeeList = dataFromDb.data;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.employeeList = this.generalEmployeeList.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(value.toLowerCase()) ||
        employee.surname.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
}

