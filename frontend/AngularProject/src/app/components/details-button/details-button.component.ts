import { Component, OnInit } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-details-button',
  template: `<div>
  <button mat-raised-button routerLink="/details/{{this.employeeId}}">Details</button>
</div>`
})
export class DetailsButtonComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  employeeId: any;
  agInit(params: any): void {
    this.params = params;
    this.employeeId = params.employeeId;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false
  }
  ngOnInit(): void {
  }

}
