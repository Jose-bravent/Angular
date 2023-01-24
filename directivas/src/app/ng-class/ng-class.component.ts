import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  clase1: string = 'fondo-gris';
  isActive: boolean = false;
  letraGrande: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
cambiarActive() {
  this.isActive = !this.isActive;
}
  
ponerLetraGrande() {
  this.letraGrande = true;
}

quitarLetraGrande() {
  this.letraGrande = false;
}
}
