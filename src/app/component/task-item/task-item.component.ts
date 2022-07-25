import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
@Input() task?: Task;

@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task : Task){
   this.onDeleteTask.emit(task)
  }
  taskReminder(task: Task){
    this.onToggleReminder.emit(task)
   }
 

}
