import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title = 'TASK'
showAddTask: boolean=false;
subscription?:Subscription;
 


  constructor( private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    )

   }

  ngOnInit(): void {
  }
  toggleTask(){
    console.log("toggle");
    this.uiService.toggleAddTask();
  }
  split(){
    console.log("Run");
  }
  hasRoute(route:string){
return this.router.url=== route;
  }

}

