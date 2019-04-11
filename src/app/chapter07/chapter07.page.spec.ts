import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter07Page } from './chapter07.page';

describe('Chapter07Page', () => {
  let component: Chapter07Page;
  let fixture: ComponentFixture<Chapter07Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter07Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter07Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
