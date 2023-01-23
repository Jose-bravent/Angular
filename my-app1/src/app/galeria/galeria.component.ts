import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  
  imagenActual: number = 0;
  images = [
    {
      name: 'Gato',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXN_tLW6Dr_7vlJi7PS8S5EUEbt47E-Jhvg&usqp=CAU',
      alt: 'Imagen de un gato'
    },
    {
      name: 'Caballo',
      url: 'https://ca-times.brightspotcdn.com/dims4/default/03dd067/2147483647/strip/true/crop/1434x1024+0+0/resize/1200x857!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2F74%2Fbb5fa67f4759b9528247f0d3ac45%2Fscreen-shot-2020-11-13-at-5.35.31%20PM.png',
      alt: 'Imagen de un caballo'
    },
    {
      name: 'Oso panda',
      url: 'https://assets.afcdn.com/story/20161017/989289_w1200h630c1cx511cy250.jpg',
      alt: 'Imagen de un Oso panda'
    }
  ]

  INICIO = 0;
  FIN = this.images.length - 1;
 
  imagenAnterior() {
    if (this.imagenActual > 0) {
      this.imagenActual--;
    }
    
  }

  imagenSiguiente() {
    if (this.imagenActual < 2){
      this.imagenActual++;
    }    
  }
}
