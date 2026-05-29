import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrls: ['./listar-pensamento.css'],
})
export class ListarPensamento {
  listaPensamentos: Pensamento[] = [];
}
