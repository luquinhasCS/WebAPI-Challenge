import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-delete-button',
  template: `<div>
              <button mat-raised-button color="warn" (click)="OpenDialog(this.employeeId)">Delete</button>
            </div>`
})
export class DeleteButtonComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  employeeId: any;

  agInit(params: any): void {
    this.params = params;
    this.employeeId = params.employeeId;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog){}

  OpenDialog(employeeId:number){
      this.dialog.open(DeleteModalComponent, {
        width: '500px',
        height: '500px',
        data: {employeeId: employeeId}
      });
  }

}
