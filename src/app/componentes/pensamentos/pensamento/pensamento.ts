import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {

  @Input()
  pensamento = {
    conteudo: 'conteudo',
    autoria: 'autor',
    modelo: 'modelo1'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
