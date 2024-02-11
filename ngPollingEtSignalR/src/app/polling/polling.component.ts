import { Component, OnInit } from '@angular/core';
import { UselessTask } from '../models/UselessTask';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {

  title = 'labo.signalr.ng';
  tasks: UselessTask[] = [];
  taskname: string = "";

  ngOnInit(): void {
    this.updateTasks();
  }

  complete(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur (Contrôleur d'API)
  }

  addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur (Contrôleur d'API)
  }

  updateTasks() {
    // TODO Utiliser le polling pour non seulement mettre la liste de tasks à jour, mais continuer de le faire chaque seconde
  }
}
