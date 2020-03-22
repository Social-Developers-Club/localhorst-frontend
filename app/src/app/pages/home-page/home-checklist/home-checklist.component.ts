import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home-checklist',
  templateUrl: './home-checklist.component.html',
  styleUrls: ['./home-checklist.component.css']
})
export class HomeChecklistComponent implements OnInit, AfterContentInit {

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

  ngAfterContentInit(){
    console.log("TEST", this.router.url);

  }

  toggleChecklist(){
    console.log("TEST",this.router.url);
    this.isBoxClosed = !this.isBoxClosed;
  }

}
