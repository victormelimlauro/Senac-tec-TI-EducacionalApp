import { AngularFireAuth } from '@angular/fire/auth';
import { FirebasePath } from './../../core/shared/firebase-path';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  getAll(categoriaKey: string = null) {
    return this.db.list(FirebasePath.plantoes, q => {
      if (categoriaKey) {
        return q.orderByChild('materiaKey').equalTo(categoriaKey);
      } else {
        return q.orderByChild('diaNum');
      }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    )
  }

  getTurmaUsuarioAtual(){
    const path = `${FirebasePath.usuarios}${this.afAuth.auth.currentUser.uid}`;
    return this.db.list(path);
  }

  getDadosUsuarioAtual(){
    const path = `${FirebasePath.usuarios}${this.afAuth.auth.currentUser.uid}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );
}

  // getComunicadosPorTurma(turmaKey: string){
  //   return this.db.list(FirebasePath.comunicado, ref => ref.orderByChild('turmaKey').equalTo(turmaKey))
  //   .snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
  //     })
  //   );
  // }
  getComunicadosPorTurma(turmaKey: string) {
    return this.db.list(FirebasePath.comunicado, q => {
         return q.orderByChild('turmaKey').equalTo(turmaKey);
        }) .snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    )
  }

}
