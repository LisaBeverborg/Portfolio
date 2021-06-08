import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } 
from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infoCollection!: AngularFirestoreCollection<Info>;
  infos!: Observable<any>;
   
  constructor(public afs: AngularFirestore) {
    this.infos = this.afs.collection('info').valueChanges();  
  }
  
  getInfos(){
    return this.infos;
  }
}
