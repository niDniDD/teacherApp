import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioClassroomPage } from './portfolio-classroom.page';

describe('PortfolioClassroomPage', () => {
  let component: PortfolioClassroomPage;
  let fixture: ComponentFixture<PortfolioClassroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioClassroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
