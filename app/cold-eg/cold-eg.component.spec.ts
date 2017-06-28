/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColdEgComponent } from './cold-eg.component';

describe('ColdEgComponent', () => {
  let component: ColdEgComponent;
  let fixture: ComponentFixture<ColdEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
