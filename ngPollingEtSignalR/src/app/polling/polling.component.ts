import { Component, OnInit } from '@angular/core';
import { UselessTask } from '../models/UselessTask';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {

  title = 'labo.signalr.ng';
  tasks: UselessTask[] = [];
  taskname: string = "";

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.updateTasks();
  }

  async complete(id: number) {
    await lastValueFrom(this.http.get("https://localhost:7289/api/UselessTasks/Complete/" + id));
    // TODO On invoke la méthode pour compléter une tâche sur le serveur (Contrôleur d'API)
  }

  async addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur (Contrôleur d'API)
    await lastValueFrom(this.http.post("https://localhost:7289/api/UselessTasks/Add?taskText=" + this.taskname, {}));
  }

  async updateTasks() {
    // TODO: Faire une première implémentation simple avec un appel au serveur pour obtenir la liste des tâches
    // TODO: UNE FOIS QUE VOUS AVEZ TESTER AVEC DEUX CLIENTS: Utiliser le polling pour mettre la liste de tasks à jour chaque seconde
    let resultat = await lastValueFrom(this.http.get<UselessTask[]>("https://localhost:7289/api/UselessTasks/GetAll"));
    this.tasks = resultat;

    setTimeout(() => this.updateTasks(), 500);
  }
}
