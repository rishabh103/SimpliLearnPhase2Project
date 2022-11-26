import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  loginPageCheck:boolean = false;
  SignUpPageCheck:boolean = false;
  constructor(public router:Router) { }
  signUpPage():void{
    this.loginPageCheck = false
    this.SignUpPageCheck = true
  }
  loginPage():void{    
    this.SignUpPageCheck = false

    this.loginPageCheck = true
  }
  ngOnInit(): void {
  }

}
