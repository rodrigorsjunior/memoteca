import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrls: ['./criar-pensamento.css'],
})
export class CriarPensamento {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };



  constructor(private service: PensamentoService, private router: Router) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      alert('Pensamento criado com sucesso!');
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
