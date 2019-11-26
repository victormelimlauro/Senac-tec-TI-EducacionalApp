import { ComunicadosService } from './shared/comunicados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.page.html',
  styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage implements OnInit {
  comunicados: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;

  constructor(private router: Router, private comunicadosService: ComunicadosService) { }

  ngOnInit() {
    this.comunicados = this.comunicadosService.getAll(null);
    // this.categorias = this.produtosService.getCategoriasAll();
  }

  getUsuarioTurma(){
  this.comunicadosService.getTurmaUsuarioAtual();
  }
  buscarProdutos(){
    this.comunicadosService.getComunicadosPorTurma();
  }


}

