import { ComunicadosService } from './shared/comunicados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  comunicadosService.
  }
  buscarProdutos(){
    // this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
  }


}

