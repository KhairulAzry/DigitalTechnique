import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter04Page } from './chapter04.page';

describe('Chapter04Page', () => {
  let component: Chapter04Page;
  let fixture: ComponentFixture<Chapter04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter04Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
