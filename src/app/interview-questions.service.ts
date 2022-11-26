import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewQuestionsService {
  questions = [{
    "id":1,"Question":"What is the full form of www in networking","options":["World Wibe Web","West West West","Work Work Work","Wash Wash Wash"]
  },
  {
    "id":2,"Question":"In which decade was the American Institute of Electrical Engineers (AIEE) founded?","options":["1850s","1880s","1930s","1950s"]
  },
  {
    "id":3,"Question":"What is part of a database that holds only one type of information?","options":["Report","Field","Record","File"]
  },
  {
    "id":4,"Question":"OS computer abbreviation usually means ?","options":["Order of Significance","Open Software","Operating System","Optical Sensor"]
  },]

  getAllQuestions():{ id: number, Question: string,options:Array<string> }[]{
    return this.questions
  }
  constructor() { }
}
