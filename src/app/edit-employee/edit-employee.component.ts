import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
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
  idEdit: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.idEdit = JSON.parse(localStorage.getItem("idEdit") || '{}')
    let employee = this.filterData(this.idEdit)[0]
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

  onAddEmployee() {
    this.submitted = true

    if (this.email == '') {
      this.errorEmail =  true
      this.statusEmail = false
      this.textErrorEmail = 'Email Cannot be Empty'
    } else if (!this.email.match(this.validEmail)) {
      this.errorEmail =  true
      this.statusEmail = false
      this.textErrorEmail = 'Email Invalid Format'
    } else {
      this.errorEmail = false
      this.statusEmail = true
    }

    if (this.submitted && this.username !== '' && this.firstname !== '' && this.lastname !== '' && this.statusEmail && this.birthDate !== '' && this.basicSalary !== '' && this.status !== '' && this.selectedGroup !== '' && this.description !== '') {
      let employeeList = JSON.parse(localStorage.getItem("employee") || '{}')
      let editEmployee = {
        "id": this.idEdit,
        "username": this.username,
        "firstName":this.firstname,
        "lastName":this.lastname,
        "email":this.email,
        "birthDate":this.birthDate,
        "basicSalary":parseInt(this.basicSalary),
        "status":this.status,
        "group":this.selectedGroup,
        "description":this.description
       }
       employeeList[this.idEdit - 1] = editEmployee
       console.log(employeeList)
       localStorage.setItem("employee", JSON.stringify(employeeList))
      this.dataSuccess = true
      document.documentElement.scrollTop = 0;
      setTimeout(() => {
        this.router.navigate(['employee-list'])
      }, 1000);
    }
  }

  filterData(userId:any) {
    let employeeList = JSON.parse(localStorage.getItem("employee") || '{}')
    return employeeList.filter((object: { [x: string]: any; }) => {
      return object['id'] == userId;
    });
  }

  onCancel() {
    this.router.navigate(['employee-list'])
  }

}
