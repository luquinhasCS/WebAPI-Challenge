import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-edit-button',
  template: `<div>
              <button mat-raised-button color="accent" routerLink="/edit/{{this.employeeId}}">Edit</button>
            </div>`
})
export class EditButtonComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  employeeId: any;
  agInit(params: any): void {
    this.params = params;
    this.employeeId = params.employeeId;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false
  }

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
}
