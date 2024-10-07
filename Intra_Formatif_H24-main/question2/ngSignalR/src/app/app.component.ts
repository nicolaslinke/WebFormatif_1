import { Component } from '@angular/core';
import * as signalR from "@microsoft/signalr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Hub';

  private hubConnection?: signalR.HubConnection;
  isConnected: boolean = false;

  selectedChoice: number = -1;
  nbUsers: number = 0;

  pizzaPrice: number = 0;
  money: number = 0;
  nbPizzas: number = 0;

  constructor(){
    this.connect();
  }

  connect() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5282/hubs/pizza')
      .build();

    this.hubConnection.on('nbUsers', (data) => {
      this.nbUsers = data;
    });

    this.hubConnection.on('price', (data:number) => {
      this.pizzaPrice = data;
    });

    // TODO: Mettre isConnected à true seulement une fois que la connection au Hub est faite
    this.hubConnection
      .start()
      .then(() => {
        this.isConnected = true;
        console.log('Connection success');
      })
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  selectChoice(selectedChoice:number) {
    this.selectedChoice = selectedChoice;
    this.hubConnection!.invoke('SelectChoice', this.selectedChoice);
  }

  unselectChoice() {
    this.selectedChoice = -1;
  }

  addMoney() {
  }

  buyPizza() {
  }
}
