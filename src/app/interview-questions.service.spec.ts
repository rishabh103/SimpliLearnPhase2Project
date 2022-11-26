import { TestBed } from '@angular/core/testing';

import { InterviewQuestionsService } from './interview-questions.service';

describe('InterviewQuestionsService', () => {
  let service: InterviewQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
