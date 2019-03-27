import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter02Page } from './chapter02.page';

describe('Chapter02Page', () => {
  let component: Chapter02Page;
  let fixture: ComponentFixture<Chapter02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
