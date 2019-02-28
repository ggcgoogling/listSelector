import { Component } from '@angular/core';
import { Passenger } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passengers: Passenger[] = [
    { name: 'jose', description: 'description 1' },
    { name: 'luis', description: 'description 2' },
    { name: 'pedro', description: 'description 3' },
    { name: 'anna', description: 'description 4' },
    { name: 'alex', description: 'description 5' },
    { name: 'marta', description: 'description 6' },
    { name: 'ines', description: 'description 7' },
  ];
}
