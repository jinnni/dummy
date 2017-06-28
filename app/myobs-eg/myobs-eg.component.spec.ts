/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyobsEgComponent } from './myobs-eg.component';

describe('MyobsEgComponent', () => {
  let component: MyobsEgComponent;
  let fixture: ComponentFixture<MyobsEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyobsEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyobsEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
