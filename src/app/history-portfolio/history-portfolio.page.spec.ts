import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPortfolioPage } from './history-portfolio.page';

describe('HistoryPortfolioPage', () => {
  let component: HistoryPortfolioPage;
  let fixture: ComponentFixture<HistoryPortfolioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPortfolioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPortfolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
