import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { auth } from  'firebase/app';
import { User } from  'firebase';
import { AuthenticationService } from  '../authentication.service';

import { UserName } from './user.model';
import * as firebase from 'firebase';
// Component for updating username

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  newUserName: UserName;
  usersRef: AngularFireList<any>;
  users: Observable<any[]>;

  uid: string;
  username: string;

  constructor( db: AngularFireDatabase, 
  public  authService:  AuthenticationService ) {
    this.usersRef = db.list('users');
    this.users = db.list('users').valueChanges();
   }
 
  ngOnInit() {
    this.newUserName = new UserName();
  }

  updateUserName() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
    // User is signed in.
        this.newUserName.uid = user.uid
        console.log(this.newUserName.uid)
        console.log(this.username)
      } else {
    // No user is signed in.
      }
    });
  }
}