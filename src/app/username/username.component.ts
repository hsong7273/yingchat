import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { auth } from  'firebase/app';
import { User } from  'firebase';

import { UserName } from './user.model';
// Component for updating username

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  users: UserName[];
  constructor() { }
 
  ngOnInit() {}



}