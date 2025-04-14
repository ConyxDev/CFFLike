import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonText, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import '@khmyznikov/pwa-install';


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
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'myApp';

  constructor() {}
}
