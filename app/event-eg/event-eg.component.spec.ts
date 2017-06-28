/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventEgComponent } from './event-eg.component';

describe('EventEgComponent', () => {
  let component: EventEgComponent;
  let fixture: ComponentFixture<EventEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
