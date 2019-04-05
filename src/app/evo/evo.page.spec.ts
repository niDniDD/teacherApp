import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoPage } from './evo.page';

describe('EvoPage', () => {
  let component: EvoPage;
  let fixture: ComponentFixture<EvoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
