import { Observable } from 'rxjs';
//import { PerfilPage } from './../usuarios/usuarios/perfil/perfil.page';
import { Router } from '@angular/router';
import { UsuariosService } from './../usuarios/usuarios/shared/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any = {};
  puxaDadosUsuarioAtual: Observable<any[]>;
  atributo: string;
  turmaNome: string;
    constructor(private usuariosService: UsuariosService,
                private router: Router,
                private route: ActivatedRoute,) { }
  
    ngOnInit() {
      this.user = this.usuariosService.getDadosUsuario();
      this.getUsuarioDadosBD();
        }
    getUsuarioDadosBD(){
      const subscribe = this.usuariosService.getDadosUsuarioAtual()
      .subscribe((dados: any) => {
      subscribe.unsubscribe();
      console.log(dados);
      this.turmaNome = dados.atributoNome;
      console.log(this.turmaNome);
    });
  }

    sair(){
      this.usuariosService.logout()
      .then( () => {
        this.router.navigate(['/login']);
      })
    }

}