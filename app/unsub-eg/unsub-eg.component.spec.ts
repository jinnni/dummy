/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnsubEgComponent } from './unsub-eg.component';

describe('UnsubEgComponent', () => {
  let component: UnsubEgComponent;
  let fixture: ComponentFixture<UnsubEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
