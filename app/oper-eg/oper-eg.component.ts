import { Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-oper-eg',
  templateUrl: './oper-eg.component.html',
  styleUrls: ['./oper-eg.component.css']
})
export class OperEgComponent {
	//ob1 = Observable.interval(1000).take(5).subscribe(x => {console.log(x)});
	//ob2 = Observable.timer(1000,1000).take(6).subscribe(x => {console.log(x)});
	//ob3 = Observable.range(25,100).subscribe(x => {console.log(x)});
	//ob4 = Observable.interval(1000).take(10).map(v => v * 2).subscribe(x => {console.log(x)});
	//ob5 = Observable.from(['rob','van','dam']).map(x => x.toUpperCase()).map(x => 'I am '+x).subscribe(x => {console.log(x)});
	//ob6 = Observable.from([{name:"a",age:"12"},{name:"b",age:"13"},{name:"c",age:"14"}]).pluck('name').subscribe(x => {console.log(x)});
	//ob7 = Observable.of('hello').merge(Observable.of('every')).subscribe(x => {console.log(x)});
	//ob8 = Observable.range(1,5).map(v => 'source 1:'+v);
	//ob9 = Observable.range(6,5).map(v => 'source 2:'+v);
	//ob10 = Observable.concat(this.ob8,this.ob9).take(25).subscribe(v => console.log(v));
	//ob11 = Observable.of('hello').mergeMap(v => {return Observable.of(v+" everyone");}).subscribe(x => console.log(x));

}
