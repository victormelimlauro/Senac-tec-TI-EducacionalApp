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
  categoriaSelecionada: string;

  constructor(private router: Router,
              private comunicadosService: ComunicadosService) { }

  ngOnInit() {
    this.getUsuarioDados();
    // this.categorias = this.produtosService.getCategoriasAll();
  }

  getUsuarioDados(){
    const subscribe = this.comunicadosService.getDadosUsuarioAtual()
    .subscribe((atributoKey: any) => {
    subscribe.unsubscribe();
    this.atributoKey = atributoKey;
  });
}
  buscarComunicados(atributoKey){
   // this.comunicadosService.getComunicadosPorTurma();
  }


}

