import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  @Input() text: string = "";
  @Input() day: string = "";
  @Input() reminder: boolean = false; 

 
  subscription: Subscription;
  showAdddTask?: boolean;


  constructor( private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAdddTask = value)
    )
    }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('add a job');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
     reminder:this.reminder,

    }

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;
   
   
  }

}
