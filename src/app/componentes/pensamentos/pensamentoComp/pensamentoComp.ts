import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamentoComp.html',
  styleUrls: ['./pensamentoComp.css'],
})
export class PensamentoComp {

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
