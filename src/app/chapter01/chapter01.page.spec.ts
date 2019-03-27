import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter01Page } from './chapter01.page';

describe('Chapter01Page', () => {
  let component: Chapter01Page;
  let fixture: ComponentFixture<Chapter01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
