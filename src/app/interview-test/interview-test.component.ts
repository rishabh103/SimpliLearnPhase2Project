import { Component, OnInit } from '@angular/core';
import { InterviewQuestionsService } from '../interview-questions.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-interview-test',
  templateUrl: './interview-test.component.html',
  styleUrls: ['./interview-test.component.css']
})
export class InterviewTestComponent implements OnInit {
  questionsService!:{ id: number, Question: string,options:Array<string> }[];
  count:number = 0;
  Totalcount!:number;
  numberOfQuestion!:{ id: number, Question: string,options:Array<string> };
  constructor(private quesService: InterviewQuestionsService) { }
  
  ngOnInit(): void {
    this.questionsService = this.quesService.getAllQuestions()
    this.Totalcount = this.questionsService.length-1
    this.numberOfQuestion = this.questionsService[this.count]
    }
    nextQuestion(buttonEvent:any):void{
      if (buttonEvent==='INC') {
        this.count+=1
      
      
      this.numberOfQuestion = this.questionsService[this.count]
      } else {
        this.count-=1
      this.numberOfQuestion = this.questionsService[this.count]
      }
      
    }
    changeQuestion(event:MatRadioChange):void{
      console.log(event.value);
    }
    submitTest():void{
      
    }

}
