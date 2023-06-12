import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  username:any = ''
  firstname:any = ''
  lastname:any = ''
  email:any = ''
  birthDate:any = ''
  basicSalary:any = ''
  status:any = ''
  selectedGroup:any = ''
  description:any = ''
  submitted = false
  validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  statusEmail = false
  errorEmail = false
  dataSuccess = false
  textErrorEmail = ''

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let idUser = JSON.parse(localStorage.getItem("id") || '{}')
    let employee = this.filterData(idUser)[0]
    console.log(employee)
    this.username = employee.username
    this.firstname = employee.firstName
    this.lastname = employee.lastName
    this.email = employee.email
    this.birthDate = employee.birthDate
    this.basicSalary = employee.basicSalary
    this.status = employee.status
    this.selectedGroup = employee.group
    this.description = employee.description
  }

  filterData(userId:any) {
    let employeeList = JSON.parse(localStorage.getItem("employee") || '{}')
    return employeeList.filter((object: { [x: string]: any; }) => {
      return object['id'] == userId;
    });
  }

  onBack() {
    this.router.navigate(['employee-list'])
  }

}
