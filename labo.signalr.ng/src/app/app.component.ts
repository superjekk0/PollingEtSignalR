import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'labo.signalr.ng';
  private hubConnection?: signalR.HubConnection;
  usercount = 0;
  tasks: UselessTask[] = [];
  taskname: string = "";

  ngOnInit(): void {
    this.connecttohub()
  }

  connecttohub() {
    
  }

  complete(id: number) {
    
  }

  addtask() {
    
  }

}


export class UselessTask {
  constructor(
    public id: number,
    public text: string,
    public completed: boolean
  ) { }
}
