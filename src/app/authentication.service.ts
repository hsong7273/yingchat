import { Injectable } from  '@angular/core';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
    providedIn:  'root'
})
export  class  AuthenticationService {
  user: User;

  async login(email: string, password: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['admin/list']);
  }

  async register(email: string, password: string){
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  constructor( public afAuth: AngularFireAuth, public router: Router) {
      this.afAuth.authState.subscribe(user => { if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else{
        localStorage.setItem('user', null);
      }
    })

  }
}