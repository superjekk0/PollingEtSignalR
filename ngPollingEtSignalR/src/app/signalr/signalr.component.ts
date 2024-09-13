import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { UselessTask } from '../models/UselessTask';


@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.css']
})
export class SignalrComponent implements OnInit {

  private hubConnection?: signalR.HubConnection;
  usercount = 0;
  tasks: UselessTask[] = [];
  taskname: string = "";

  ngOnInit(): void {
    this.connecttohub()
  }

  connecttohub() {
    // TODO On doit commencer par créer la connexion vers le Hub
    this.hubConnection = new signalR.HubConnectionBuilder()
                          .withUrl("https://localhost:7289/TaskHub")
                          .build();

    this.hubConnection.on("NbClients", (count) => {
      this.usercount = count;
    });

    this.hubConnection.on("GetAll", (tasks) => {
      this.tasks = tasks;
    })
    // TODO On peut commencer à écouter pour les évènements qui vont déclencher des callbacks

    // TODO On doit ensuite se connecter
    this.hubConnection.start()
      .then(() =>{
        console.log("Connexion réussie");
      }).catch(err => console.log("You got mail!"));

      
  }

  complete(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur
    this.hubConnection?.invoke("Completer", id);
  }

  addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur
    this.hubConnection?.invoke("AjoutTask", this.taskname);
  }

}
