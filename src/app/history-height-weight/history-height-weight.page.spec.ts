import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryHeightWeightPage } from './history-height-weight.page';

describe('HistoryHeightWeightPage', () => {
  let component: HistoryHeightWeightPage;
  let fixture: ComponentFixture<HistoryHeightWeightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryHeightWeightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryHeightWeightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
