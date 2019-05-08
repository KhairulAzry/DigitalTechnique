import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSemExercisePage } from './mid-sem-exercise.page';

describe('MidSemExercisePage', () => {
  let component: MidSemExercisePage;
  let fixture: ComponentFixture<MidSemExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidSemExercisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSemExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
