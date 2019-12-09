import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebasePath } from './../../core/shared/firebase-path';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MinhasPresencasService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }


getPresencas(usuario: string=null) {
  return this.db.list(FirebasePath.plantoes_visitas, q => {
    // if (usuario) {
      // return q.orderByChild('key').equalTo(this.afAuth.auth.currentUser.uid);
    // } 
    // else {
      return q.orderByChild('frmKeyAluno').equalTo(this.afAuth.auth.currentUser.uid);
    // }
  }).snapshotChanges().pipe(
    map(changes => {
      return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
    })
  )
}

}
