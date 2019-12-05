import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MinhasPresencasService } from './shared/minhas-presencas.service';

@Component({
  selector: 'app-minhas-presencas',
  templateUrl: './minhas-presencas.page.html',
  styleUrls: ['./minhas-presencas.page.scss'],
})
export class MinhasPresencasPage implements OnInit {
  visitas: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;
  alunoKey: string;
  constructor(private router: Router, private minhasPresencas: MinhasPresencasService) { }

  ngOnInit() {
    this.visitas = this.minhasPresencas.getPresencas()
  //   .subscribe((dados: any) => {
  //   subscribe.unsubscribe();
  //   // console.log(dados);
  //   // this.turmaKey = dados.atributoKey;
  //   // console.log(this.turmaKey);
  //   // this.comunicados = this.comunicadosService.getComunicadosPorTurma(this.turmaKey);
  }

}
