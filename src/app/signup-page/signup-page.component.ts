import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signUpBool:boolean=true;
  email:string = ''
  password:string = ''
  username:string = ''
  register:boolean = false
  signUpForm = new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password: new FormControl(''),
    
  })
  getData():void{
    this.email = this.signUpForm.controls.email.value!;
    this.password = this.signUpForm.controls.password.value!;
    this.username = this.signUpForm.controls.username.value!;
    this.register = true
    this.signUpBool = false
    // console.log(this.signUpBool);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
