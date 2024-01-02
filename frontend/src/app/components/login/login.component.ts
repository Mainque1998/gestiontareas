import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginI } from '../../interfaces/login.interface';
import { ResponseI } from '../../interfaces/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor( 
    private authService: AuthService,
    private router: Router
  ){}

  errorStatus: boolean = false;
  errorMsg: any = "";

  onLogin(form: LoginI){
    this.authService.loginByEmail(form).subscribe(data => {
      console.log(data);
      let dataResponse: ResponseI = data;
      localStorage.setItem('token', dataResponse.token);
      this.router.navigate(['tareas']);
    },
    (error) => {
      this.errorStatus = true;
      this.errorMsg = error.error.message;
      console.error('Error in log in:', this.errorMsg);
    });
  }

  newUser(): void {
    this.router.navigate(['register']);
  }
}

