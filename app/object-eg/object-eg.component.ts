import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-object-eg',
  templateUrl: './object-eg.component.html',
  styleUrls: ['./object-eg.component.css']
})
export class ObjectEgComponent {
  objects:Array<any> = [{name: 'Sue', age:25},{name: 'Joe', age: 30},{name: 'Frank', age: 25}, {name: 'Sarah', age: 35}];
  constructor() {
let obs = Observable.from(this.objects).subscribe(x => x);
  }
}
