import { Component, OnInit, Input } from '@angular/core';
import { ArticuloSimple } from '../interfaces/articulo';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  @Input() articulo!: ArticuloSimple
  url: string = '';
  constructor() { }

  ngOnInit(): void {
    this.url = this.articulo.name.split(' ').join('-') + '-' + this.articulo.id
  }

}
