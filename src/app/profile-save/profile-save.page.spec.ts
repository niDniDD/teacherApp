import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSavePage } from './profile-save.page';

describe('ProfileSavePage', () => {
  let component: ProfileSavePage;
  let fixture: ComponentFixture<ProfileSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
