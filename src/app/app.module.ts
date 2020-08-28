import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    // List paths here
    { path: '', component: ChatComponent},
  ]) ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    ChatComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
