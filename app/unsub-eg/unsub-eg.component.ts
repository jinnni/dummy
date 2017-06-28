import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-unsub-eg',
  templateUrl: './unsub-eg.component.html',
  styleUrls: ['./unsub-eg.component.css']
})
export class UnsubEgComponent implements OnInit {
	iAmAlive = true;
	obsObj1;//unscribing
	obsObj2;//takewhile
  constructor() { }

  ngOnInit() {
	this.obsObj1 = Observable.interval(1000)
      .subscribe(
        (data) => { console.log('Unguarded:', data);}
      );
	 
	this.obsObj2 = Observable.interval(1000)
      .takeWhile(() => { return this.iAmAlive; })
      .subscribe((data) => { console.log(data); });
  }
	ngOnDestroy() {
    this.iAmAlive = false;
	this.obsObj1.unsubscribe();
  }
}
