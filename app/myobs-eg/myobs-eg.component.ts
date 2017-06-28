import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-myobs-eg',
  templateUrl: './myobs-eg.component.html',
  styleUrls: ['./myobs-eg.component.css']
})
export class MyobsEgComponent{

  constructor() {
    let myObs = new Observable(observer => {
      console.log("observable created..");
      observer.next("Hello Praveen");
      observer.next("Hello Yogesh");
      observer.error(new Error("something went wrong"));
      setTimeout(() => {
		    observer.next("hello guys");
		    observer.complete();
	    },500);
    });
    myObs.catch(err => Observable.of(err)).subscribe(
		  v => {console.log(v)}
	  );
  }
}
