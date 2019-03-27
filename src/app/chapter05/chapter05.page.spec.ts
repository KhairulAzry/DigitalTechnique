import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter05Page } from './chapter05.page';

describe('Chapter05Page', () => {
  let component: Chapter05Page;
  let fixture: ComponentFixture<Chapter05Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter05Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter05Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
