import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-eg',
  templateUrl: './event-eg.component.html',
  styleUrls: ['./event-eg.component.css']
})
export class EventEgComponent {
	constructor() {}
	@Input() counting: number = 0;
	@Output() change: EventEmitter<number> = new EventEmitter<number>();

	increment() {
		this.counting++;
		this.change.emit(this.counting);
	}

	decrement() {
		this.counting--;
		this.change.emit(this.counting);
	}
}
