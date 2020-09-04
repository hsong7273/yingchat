import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserName } from './username/user.model';

@Injectable()
export class UsernameService {

  getUsernames() {
    return this.firestore.collection('users').snapshotChanges();
  }

  setUsername( username: UserName ) {
    return this.firestore.collection('users').add(username)
  }

  updateUsername( username: UserName ){
    delete username.uid;
    this.firestore.doc('users/' + username.uid).update(username);
  }

  deleteUsername(UID: string){
    this.firestore.doc('users/' + UID).delete();
  }

  constructor(private firestore: AngularFirestore) {}
}
