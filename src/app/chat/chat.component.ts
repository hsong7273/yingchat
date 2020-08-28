import { Component, OnInit } from "@angular/core";
import { messages } from "../messages";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  messages = messages;
  constructor() {}

  ngOnInit() {}
}
