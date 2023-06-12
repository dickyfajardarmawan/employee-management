import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    
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
      employeeList.push({
        "id": employeeList.length + 1,
        "username": this.username,
        "firstName":this.firstname,
        "lastName":this.lastname,
        "email":this.email,
        "birthDate":this.birthDate,
        "basicSalary":parseInt(this.basicSalary),
        "status":this.status,
        "group":this.selectedGroup,
        "description":this.description
       })
       localStorage.setItem("employee", JSON.stringify(employeeList))
      this.dataSuccess = true
      document.documentElement.scrollTop = 0;
      setTimeout(() => {
        this.router.navigate(['employee-list'])
      }, 1000);
    }
  }

  onCancel() {
    this.router.navigate(['employee-list'])
  }

}
