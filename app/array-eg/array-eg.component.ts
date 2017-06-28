import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-array-eg',
  template: '<div *ngFor="let value of numbers">{{ value }}</div><button (click)="onClick();">click !</button>',
  styleUrls: ['./array-eg.component.css']
})
export class ArrayEgComponent {
  numbers :  Array<number> = [1,2,3,4,5,6];
  constructor() {}
  onClick(){
    let obser = Observable.from(this.numbers).subscribe(x => x);
  }
}
