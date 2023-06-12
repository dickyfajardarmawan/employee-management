import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  listEmployee:any = []
  p: number = 1;
  pageSize: any = 10
  searchText:any = ''

  constructor(private router: Router) {
    
  }

  onLoadDataEmployee() {
    if (localStorage.getItem("employee") == null) {
      for (let i = 0; i < 100; i++) {
        this.listEmployee.push({
          "id": i + 1,
          "username": (Math.random() + 1).toString(36).substring(7),
          "firstName":(Math.random() + 1).toString(36).substring(7),
          "lastName":(Math.random() + 1).toString(36).substring(7),
          "email":(Math.random() + 1).toString(36).substring(7),
          "birthDate":new Date(),
          "basicSalary":"10,000",
          "status":(Math.random() + 1).toString(36).substring(7),
          "group":(Math.random() + 1).toString(36).substring(7),
          "description":(Math.random() + 1).toString(36).substring(7)
         })
      }
      localStorage.setItem("employee",JSON.stringify(this.listEmployee))
    }
    this.listEmployee = JSON.parse(localStorage.getItem("employee") || '{}')
    console.log(this.listEmployee)
  }

  ngOnInit(): void {
    this.onLoadDataEmployee()
  }

  filterData(usernameSearch:any) {
    return this.listEmployee.filter((object: { [x: string]: any; }) => {
      return object['username'] == usernameSearch;
    });
  }

  onSearch() {
    if (this.searchText == '') {
      this.onLoadDataEmployee()
    } else {
      this.listEmployee = this.filterData(this.searchText)
    }
  }

  onAdd() {
    this.router.navigate(['add-employee'])
  }
  
  onDetail() {
    this.router.navigate(['employee-detail'])
  }

}
