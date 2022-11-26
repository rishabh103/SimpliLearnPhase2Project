import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewTestIntroComponent } from './interview-test-intro/interview-test-intro.component';
import { InterviewTestComponent } from './interview-test/interview-test.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'signUp',component:SignupPageComponent},
  {path:'testIntro/:id',component:InterviewTestIntroComponent},
  {path:'test',component:InterviewTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
