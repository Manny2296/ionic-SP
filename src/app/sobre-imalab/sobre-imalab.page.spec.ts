import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreIMALABPage } from './sobre-imalab.page';

describe('SobreIMALABPage', () => {
  let component: SobreIMALABPage;
  let fixture: ComponentFixture<SobreIMALABPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreIMALABPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreIMALABPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
