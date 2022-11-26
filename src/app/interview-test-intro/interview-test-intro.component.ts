import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interview-test-intro',
  templateUrl: './interview-test-intro.component.html',
  styleUrls: ['./interview-test-intro.component.css']
})
export class InterviewTestIntroComponent implements OnInit {
  username!:string
  constructor(private activatedRoute:ActivatedRoute) {
    
   }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.username=params['id']
      console.log(params);
      
      
    })
  }

}
