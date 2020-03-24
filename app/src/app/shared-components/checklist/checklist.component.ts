import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  isBoxClosed: boolean = false;
  showChecklistText: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url === '/Loesungen'){
        this.isBoxClosed = true;
      }
    })
  }

  toggleChecklist(){
    this.isBoxClosed = !this.isBoxClosed;
  }

}
