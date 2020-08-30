import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  messages: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.messages = db.list('messages').valueChanges();
  }

  ngOnInit() {}
}
