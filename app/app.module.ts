import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OperEgComponent } from './oper-eg/oper-eg.component';
import { EventEgComponent } from './event-eg/event-eg.component';
//import { UnsubEgComponent } from './unsub-eg/unsub-eg.component';
import { ColdEgComponent } from './cold-eg/cold-eg.component';
import { FormEgComponent } from './form-eg/form-eg.component';
import { HttpEgComponent } from './http-eg/http-eg.component';
import { PromEgComponent } from './prom-eg/prom-eg.component';
import { MyobsEgComponent } from './myobs-eg/myobs-eg.component';
import { ObjectEgComponent } from './object-eg/object-eg.component';
import { BasicEgComponent } from './basic-eg/basic-eg.component';
import { ArrayEgComponent } from './array-eg/array-eg.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicEgComponent,
    ArrayEgComponent,
    ObjectEgComponent,
    MyobsEgComponent,
    PromEgComponent,
    HttpEgComponent,
    FormEgComponent,
	ColdEgComponent,
	//UnsubEgComponent,
	EventEgComponent,
	OperEgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
