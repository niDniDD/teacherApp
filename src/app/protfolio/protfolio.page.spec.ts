import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioPage } from './protfolio.page';

describe('ProtfolioPage', () => {
  let component: ProtfolioPage;
  let fixture: ComponentFixture<ProtfolioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtfolioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
