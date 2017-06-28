/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpEgComponent } from './http-eg.component';

describe('HttpEgComponent', () => {
  let component: HttpEgComponent;
  let fixture: ComponentFixture<HttpEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
