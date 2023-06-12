import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any = ''
  validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  statusEmail = false
  errorEmail = false
  textErrorEmail = ''
  password: any = ''
  statusPassword = false
  errorPassword = false

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onLogin() {
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
    if (this.password == '') {
      this.errorPassword = true
      this.statusPassword = false
    } else {
      this.errorPassword = false
      this.statusPassword = true
    }
    if (this.statusEmail && this.statusPassword) {
      this.router.navigate(['employee-list'])
    }
  }

}
