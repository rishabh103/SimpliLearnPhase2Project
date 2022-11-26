import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTestIntroComponent } from './interview-test-intro.component';

describe('InterviewTestIntroComponent', () => {
  let component: InterviewTestIntroComponent;
  let fixture: ComponentFixture<InterviewTestIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewTestIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewTestIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
