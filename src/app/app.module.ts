import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
