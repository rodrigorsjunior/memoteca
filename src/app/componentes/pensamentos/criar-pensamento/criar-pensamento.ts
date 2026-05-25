import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento = {
    id: '1',
    conteudo: 'Apendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelar() {
    alert('Pensamento cancelado!');
  }

}
