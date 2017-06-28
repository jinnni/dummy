import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';// in app.module.ts
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form-eg',
  templateUrl: './form-eg.component.html',
  styleUrls: ['./form-eg.component.css']
})
export class FormEgComponent {
  email: FormControl;
  coolForm: FormGroup;
  data: string;
  constructor(private FormBuilder: FormBuilder) {
    this.email = new FormControl();
    this.coolForm = FormBuilder.group({
        email: this.email
    });
    this.email.valueChanges.map(n=>n.split('').reverse().join('')).subscribe(value => this.data = value);
  }
}
