import { Component, OnInit } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'my-app',
  template: `
  {{tasks.length}}
  <ul>
    <li *ngFor="let task of tasks">
      {{task.title}} --- {{task.description}}
    </li>
  </ul>
  <input [(ngModel)]="task.title"/>
  <input [(ngModel)]="task.description"/>
  <button (click)="addTask()">ajouter</button>`
})
export class AppComponent implements OnInit {
  task: Task;

  initTask(): void {
    this.task = {
      title: '', description: ''
    };
  }

  ngOnInit(): void {
    this.initTask();
  }

  tasks: Task[] = [];
  addTask(): void {
    this.tasks.push(this.task);
    this.initTask();
  }

}
