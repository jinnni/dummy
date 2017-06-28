import { Component } from '@angular/core';
import { HttpEgService } from './http-eg-service';

@Component({
  selector: 'app-http-eg',
  templateUrl: './http-eg.component.html',
  styleUrls: ['./http-eg.component.css'],
  providers:[HttpEgService]
})
export class HttpEgComponent {
  constructor(private HttpEgService: HttpEgService) {}
  profile;

  loadUser(event) {
    this.HttpEgService.getUser(event.target.value).subscribe(data => this.profile = data);
  }
}
