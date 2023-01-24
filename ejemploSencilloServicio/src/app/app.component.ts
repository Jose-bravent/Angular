import { Component } from '@angular/core';
import { EpisodiosService } from './services/episodios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploSencilloServicio';
  datos!: any[];

  constructor(private episodiosService: EpisodiosService) {}

  ngOnInit(): void {     
    this.datos = this.episodiosService.todosLosEpisodios();
  }
}
