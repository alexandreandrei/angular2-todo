import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>Hello, my name is {{name}}.</h1><button (click)="changeName()">Change</button>'
})
export class AppComponent {
  name: string;
  constructor() {
    this.name = 'James Bond';
  }
  changeName() {
    this.name = 'Ron Swanson';
  }
}
