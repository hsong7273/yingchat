import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model.ts'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) {
      this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
    }
  async register(email: string, password: string){
    this.auth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Success!', value);
    }).catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  login(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then(value => {
      console.log('Nice, it worked!');
    }).catch(err => {
      console.log('Something went wrong:', err.message);
    });
  }

  logout() {
    this.auth.signOut();
  }
}


