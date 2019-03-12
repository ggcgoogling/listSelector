import { Component } from '@angular/core';
import { Passenger } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passengers: Passenger[] = [
    { name: 'jose', description: 'description 1', id: 1 },
    { name: 'luis', description: 'description 2', id: 2 },
    { name: 'pedro', description: 'description 3', id: 3 },
    { name: 'anna', description: 'description 4', id: 4 },
    { name: 'alex', description: 'description 5', id: 5 },
  ];
  passengers2: Passenger[] = [
    { name: 'jose', description: 'description 6', id: 6 },
    { name: 'luis', description: 'description 7', id: 7 },
    { name: 'pedro', description: 'description 8', id: 8 },
    { name: 'anna', description: 'description 4', id: 4 },
    { name: 'alex', description: 'description 5', id: 5 },
  ];
}
