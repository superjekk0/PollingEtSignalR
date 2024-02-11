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
    // TODO On doit commencer par créer la connexion vers le Hub

    // TODO On se connecte au Hub

    // TODO Une fois connectée, on peut commencer à écouter pour les évènements qui vont déclencher des callbacks
  }

  complete(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur
  }

  addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur
  }

}


export class UselessTask {
  constructor(
    public id: number,
    public text: string,
    public completed: boolean
  ) { }
}
