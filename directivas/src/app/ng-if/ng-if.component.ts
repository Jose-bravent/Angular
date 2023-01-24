import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  visible: boolean = true;
  tabActive: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  cargarTab(tab: number) {
    this.tabActive = tab;
        
  }
}
