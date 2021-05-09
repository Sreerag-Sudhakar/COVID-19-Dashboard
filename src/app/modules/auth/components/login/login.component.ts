import { Component, OnInit } from '@angular/core';
import { Login } from '../../interfaces/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:Login = {
    username : '',
    password : ''
  }

  masterCredentials:Login = {
    username : 'fingent',
    password : 'fingent'
  }
  submitted: boolean = false;
  errorMessage: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    if((this.login.username === this.masterCredentials.username) && (this.login.password === this.masterCredentials.password)){
      
      //If success set a flag in local storage for auth check.
      window.localStorage.setItem('isLoggedIn', 'true')
      this.router.navigate(['/dashboard']);
    }
    else{
      this.showError('Incorrect username or password')
    }
  }

  showError(message: string): void {
    this.errorMessage = message;
  }

  ngOnDestroy() : void {
    this.errorMessage = '';
    this.submitted = false;
  }
}
