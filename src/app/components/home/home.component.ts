import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>
      <hr>
      <app-css></app-css>
      <hr>
      <p>
        Hola mundo ... desde app.component
      </p>
      <hr>
      <app-clases></app-clases>
      <hr>
      <p [appResaltado]="'red'">
        Hola Mundo
      </p>
      <hr>
      <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');

  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('OnDestroy')
  }

}
