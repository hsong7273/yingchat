import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Message } from './messages';

import { auth } from  'firebase/app';
import { User } from  'firebase';

import * as firebase from 'firebase';
import { AuthenticationService } from  '../authentication.service';

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  newMessage: Message;
  itemsRef: AngularFireList<any>;
  messages: Observable<any[]>;
  username: string;

  constructor( db: AngularFireDatabase,
  public authService: AuthenticationService ) {
    this.itemsRef = db.list('messages');
    this.messages = db.list('messages').valueChanges();
    
  }

  ngOnInit() {
    this.newMessage = new Message();
  }

  addItem() {
    var user = auth().currentUser;

    var unameRef = firebase.database().ref('users/'+user.uid);
    var test = unameRef.on('value', (snapshot) => {
      var uname = snapshot.val().uname;
      console.log(uname)
      this.username = uname;
    })

    this.newMessage.author = this.username;
    this.newMessage.date = String(new Date());
    console.log(this.newMessage.author)
    this.itemsRef.push( this.newMessage );
  }
}
