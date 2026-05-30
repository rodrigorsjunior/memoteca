import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-mostrar-pensamento',
  standalone: false,
  templateUrl: './mostar-pensameto.html',
  styleUrls: ['./mostar-pensameto.css'],
})
export class MostarPensameto {

  @Input()
  pensamento: Pensamento = {
    id: 0,
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
