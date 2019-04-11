import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter06Page } from './chapter06.page';

describe('Chapter06Page', () => {
  let component: Chapter06Page;
  let fixture: ComponentFixture<Chapter06Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter06Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter06Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
