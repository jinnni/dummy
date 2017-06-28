import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-basic-eg',
  templateUrl: './basic-eg.component.html',
  styleUrls: ['./basic-eg.component.css']
})
export class BasicEgComponent {
  private values: Array<number> = [];
  constructor() {

  }
  onClick(){
    let stream$ = Observable.range(1,10).subscribe(
      x => this.values.push(x),
      err => console.log('onError: %s', err),
      () => console.log('onCompleted')
    );
  }
}
