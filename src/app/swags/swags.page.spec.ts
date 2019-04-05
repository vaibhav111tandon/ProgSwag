import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagsPage } from './swags.page';

describe('SwagsPage', () => {
  let component: SwagsPage;
  let fixture: ComponentFixture<SwagsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwagsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
