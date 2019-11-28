import { AngularFireDatabase } from '@angular/fire/database';
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
  [x: string]: any;
  comunicados: Observable<any[]>;
  categorias: Observable<any[]>;
  consultaComunicados: Observable<any[]>;
  categoriaSelecionada: string;
  turmaKey: string;

  constructor(private router: Router,
              private comunicadosService: ComunicadosService) { }

  ngOnInit() {
    this.getUsuarioDados();
    // this.categorias = this.produtosService.getCategoriasAll();
  }

  getUsuarioDados(){
    const subscribe = this.comunicadosService.getDadosUsuarioAtual()
    .subscribe((dados: any) => {
    subscribe.unsubscribe();
    console.log(dados);
    this.turmaKey = dados.atributoKey;
    console.log(this.turmaKey);    
    this.consultaComunicados = this.comunicadosService.getComunicadosPorTurma(this.turmaKey);
  });

}

}
