import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSavePage } from './portfolio-save.page';

describe('PortfolioSavePage', () => {
  let component: PortfolioSavePage;
  let fixture: ComponentFixture<PortfolioSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
