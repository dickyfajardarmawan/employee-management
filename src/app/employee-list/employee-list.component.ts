import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayModal: any = 'none'
  listEmployee:any = []
  p: number = 1;
  pageSize: any = 10
  searchText:any = ''
  idDelete:any = ''
  dataDeleted:any = false

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
          "birthDate":new Date("2015-03-25"),
          "basicSalary":"12000000",
          "status":(Math.random() + 1).toString(36).substring(7),
          "group":"PT ABC",
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

  filterData(keySearch:any) {
    return this.listEmployee.filter((object: { [x: string]: any; }) => {
      return object['username'] == keySearch || object['email'] == keySearch || object['status'] == keySearch;
    });
  }

  onSearch() {
    if (this.listEmployee.length == 0) {
      this.onLoadDataEmployee()
    } else {
      this.listEmployee = this.filterData(this.searchText)
    }
  }

  onAdd() {
    this.router.navigate(['add-employee'])
  }
  
  onDetail(id:any) {
    console.log(id)
    localStorage.setItem("id",id)
    this.router.navigate(['employee-detail'])
  }

  onEdit(id:any) {
    console.log(id)
    localStorage.setItem("idEdit",id)
    this.router.navigate(['edit-employee'])
  }

  onClose() {
    this.displayModal = 'none'
  }

  onDelete(id:any) {
    this.idDelete = id
    this.displayModal = 'block'
  }

  onModalDelete() {
    this.listEmployee.splice(this.idDelete - 1, 1)
    localStorage.setItem("employee",JSON.stringify(this.listEmployee))
    this.displayModal = 'none'
    this.dataDeleted = true
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      this.dataDeleted = false
    }, 1000);
  }

}
