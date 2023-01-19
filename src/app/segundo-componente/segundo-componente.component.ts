import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
nome = "joão";
dataNascimento = "1995-01-01";
urlImagem = "/assets/albert.jpg";

mostrarDataNascimento() {
  alert('A data de de nascimento do joão é:' + this.dataNascimento)
}
}
