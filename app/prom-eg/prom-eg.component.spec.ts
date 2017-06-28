/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromEgComponent } from './prom-eg.component';

describe('PromEgComponent', () => {
  let component: PromEgComponent;
  let fixture: ComponentFixture<PromEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
