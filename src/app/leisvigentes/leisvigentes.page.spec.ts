import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisvigentesPage } from './leisvigentes.page';

describe('LeisvigentesPage', () => {
  let component: LeisvigentesPage;
  let fixture: ComponentFixture<LeisvigentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeisvigentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisvigentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
