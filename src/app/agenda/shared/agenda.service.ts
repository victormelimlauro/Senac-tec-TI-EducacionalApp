import { FirebasePath } from './../../core/shared/firebase-path';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private db: AngularFireDatabase) { }

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
}
