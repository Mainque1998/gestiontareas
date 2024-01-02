import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterI } from '../../interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  newForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  errorStatus: boolean = false;
  errorMsg: any = "";

  ngOnInit(): void {
    
  }

  create(form: RegisterI){
    this.authService.createUser(form).subscribe( data => {
      console.log(data);
      this.router.navigate(['login']);
    },
    (error) => {
      this.errorStatus = true;
      this.errorMsg = error.error.message;
      console.error('Error in register:', this.errorMsg);
    });
  }

  cancel(){
    this.router.navigate(['login']);
  }

}
