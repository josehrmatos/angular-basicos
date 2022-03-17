import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado?:string = '';

  heroes:string[]=[`Spiderman`,'Iroman','Hulk','Thor','Capitan america'];

  borrarHeroe(){
    console.log('borrando');
    this.heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado);
  }
}
