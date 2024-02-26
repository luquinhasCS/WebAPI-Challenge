import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EditComponent } from './pages/edit/edit.component';
import { DetailsComponent } from './pages/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridAngular } from 'ag-grid-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { DetailsButtonComponent } from './components/details-button/details-button.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    EmployeeFormComponent,
    EditComponent,
    DetailsComponent,
    EditButtonComponent,
    DetailsButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    AgGridAngular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
