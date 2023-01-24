import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  tabActive: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  cargarTab(tab: number) {
    this.tabActive = tab;        
  }
}
