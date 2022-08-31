/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PecasComponent } from './pecas.component';

describe('PecasComponent', () => {
  let component: PecasComponent;
  let fixture: ComponentFixture<PecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
