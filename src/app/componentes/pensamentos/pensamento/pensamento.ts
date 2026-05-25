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
}
