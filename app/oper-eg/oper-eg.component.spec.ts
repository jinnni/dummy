/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OperEgComponent } from './oper-eg.component';

describe('OperEgComponent', () => {
  let component: OperEgComponent;
  let fixture: ComponentFixture<OperEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
