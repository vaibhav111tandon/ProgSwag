import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagDetailPage } from './swag-detail.page';

describe('SwagDetailPage', () => {
  let component: SwagDetailPage;
  let fixture: ComponentFixture<SwagDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwagDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
