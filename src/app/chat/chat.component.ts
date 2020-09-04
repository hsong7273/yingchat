import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Message } from './messages';

import { auth } from  'firebase/app';

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  newMessage: Message;
  itemsRef: AngularFireList<any>;
  messages: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('messages');
    this.messages = db.list('messages').valueChanges();
  }

  // Username from userdata
  user = auth().currentUser;
  displayName: string;
  this.displayName = "Anonymous";
  if (user){
    this.displayName = user.Name;
  } 

  ngOnInit() {
    this.newMessage = new Message();
  }

  addItem() {
    this.newMessage.date = String(new Date());
    this.itemsRef.push( this.newMessage );
  }
}
