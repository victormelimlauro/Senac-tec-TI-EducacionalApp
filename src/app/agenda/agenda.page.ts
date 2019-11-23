import { Router } from '@angular/router';
import { AgendaService } from './shared/agenda.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  plantoes: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;

  constructor(private router: Router, private agendaService: AgendaService) { }

  ngOnInit() {
    this.plantoes = this.agendaService.getAll(null);
    // this.categorias = this.produtosService.getCategoriasAll();
  }

  buscarProdutos(){
    // this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
  }


}

