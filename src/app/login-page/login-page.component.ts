import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router:Router) {
    // this.router.navigate([''])
   }
  username!:string
  password!:string
  loginForm = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })
  submitData():void{
    this.username = this.loginForm.controls.username.value;
    this.password = this.loginForm.controls.password.value;
    if (this.username==='rishabh' && this.password==='agarwal') {
        console.log("Hey!!! Successfully logged In");
        
    }
    this.router.navigate(['/testIntro/'+this.username])
  }
  

  ngOnInit(): void {
  }

}
