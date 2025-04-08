import { Component } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonText, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';



export const UI_ELEMENTS = [
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonText,
  IonRouterOutlet
];


@Component({
  selector: 'app-root',
  imports: [...UI_ELEMENTS, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';

  constructor() {}
}
