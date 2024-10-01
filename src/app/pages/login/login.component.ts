import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constant } from 'src/app/Core/constant/Constants';
import { APIResponse } from 'src/app/Core/models/API.model';
import { EmployeeService } from 'src/app/Core/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public Constant = Constant; // used for the dynamic placeholder;

  loginForm!: FormGroup;

  constructor(private _empService: EmployeeService, private _router: Router){
    this.loginForm = new FormGroup({
      emailId: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(){
  }

  submitForm(){
    console.log(this.loginForm.value, "29");
    this._empService.login(this.loginForm.value).subscribe((res: APIResponse) =>{
      if(res.result){
        alert('login Success');
        localStorage.setItem('ticketData', JSON.stringify(res.data));
        this._router.navigateByUrl('/dashboard') 
      }else{
        alert(res.message)
      }
    }, error =>{
      alert(JSON.stringify(error))
    })
  }



}
