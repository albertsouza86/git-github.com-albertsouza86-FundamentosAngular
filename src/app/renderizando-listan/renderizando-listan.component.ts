import { Component } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listan',
  templateUrl: './renderizando-listan.component.html',
  styleUrls: ['./renderizando-listan.component.css']
})
export class RenderizandoListanComponent {
  celulares: Celular[] = [{
    id: 1, nome: "Celular Xl", descricao: "Um celular grande", esgotado:false
  },
  {
    id: 2, nome: "Celular G", descricao: "", esgotado:false
  },
  {
    id: 3, nome: "Celular pp", descricao: "Um celular pequeno", esgotado:true
  }
]
    

}
