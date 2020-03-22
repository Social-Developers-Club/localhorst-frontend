import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-checklist',
  templateUrl: './home-checklist.component.html',
  styleUrls: ['./home-checklist.component.css']
})
export class HomeChecklistComponent implements OnInit {

  isBoxClosed: boolean = false;
  showChecklistText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleChecklist(){
    this.isBoxClosed = !this.isBoxClosed;
  }

}
