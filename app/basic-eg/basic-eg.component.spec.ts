/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicEgComponent } from './basic-eg.component';

describe('BasicEgComponent', () => {
  let component: BasicEgComponent;
  let fixture: ComponentFixture<BasicEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
