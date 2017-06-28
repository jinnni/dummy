import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-cold-eg',
  templateUrl: './cold-eg.component.html',
  styleUrls: ['./cold-eg.component.css']
})
export class ColdEgComponent {

  /*constructor() {
	let obs = Observable.create(observer => observer.next(1));
	obs.subscribe(v => console.log("1st subscriber: " + v));
	obs.subscribe(v => console.log("2nd subscriber: " + v));
  }*/
  /*constructor() {
	let obs = Observable.create(observer => observer.next(Date.now()));
	obs.subscribe(v => console.log("1st subscriber: " + v));
	obs.subscribe(v => console.log("2nd subscriber: " + v));
  }*/
  constructor() {
	let obs = Observable.create(observer => observer.next(Date.now())).publish();
	obs.subscribe(v => console.log("1st subscriber: " + v));
	obs.subscribe(v => console.log("2nd subscriber: " + v));
	obs.connect();
  }
}
