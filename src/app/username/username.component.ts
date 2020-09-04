import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { auth } from  'firebase/app';
import { User } from  'firebase';

import { UsernameService } from '../username.service';
import { UserName } from './user.model';
// Component for updating username

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  users: UserName[];
  constructor( private usernameService: UsernameService) { }

  ngOnInit() {
    this.usernameService.getUsernames().subscribe(data => {
      this.users = data.map(e => {
        return {
          uid: e.payload.doc.uid,
          Name: e.payload.doc.Name
        } as UserName;
      })
    })
  }

}