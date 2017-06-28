import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-prom-eg',
  templateUrl: './prom-eg.component.html',
  styleUrls: ['./prom-eg.component.css']
})
export class PromEgComponent{
  constructor() {
    let promise = new Promise(resolve => {
      setTimeout(() => {resolve('promise timeout');}, 2000);
    });
    promise.then(value => console.log(value));

    let stream$ = new Observable(observer => {
		  setTimeout(() => {observer.next('observable Timeout');}, 2000);
		});
		stream$.subscribe(value => console.log(value));
  }
}
