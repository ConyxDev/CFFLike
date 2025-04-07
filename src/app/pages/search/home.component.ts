import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonApp, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonInput, 
  IonText, 
  IonRouterOutlet, 
  IonImg, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButtons,
  IonIcon,
  IonItem,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonFooter,
  IonTabBar,
  IonTabButton
} from '@ionic/angular/standalone';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { calendarOutline, timeOutline } from 'ionicons/icons';

export const UI_ELEMENTS = [
  IonApp,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonText,
  IonRouterOutlet,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonIcon,
  IonItem,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ...UI_ELEMENTS,
    CommonModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  selectedTab = 'horaire';

  form: FormGroup = new FormGroup({});
  itemsFrom: any[] = [];
  itemsTo: any[] = [];
  apiResult: any = null;

  constructor(
    private _router: Router,
    private apiService: ApiService
  ) {
    addIcons({ calendarOutline, timeOutline });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl('Genève'),
      to: new FormControl('Lausanne'),
      date: new FormControl(new Date().toISOString()),
      time: new FormControl('12:00')
    });
  }

  async search() {
    if (!this.form.valid) return;
    const result = await this.apiService.formTo(this.form.value);
    this.apiResult = result;
    console.log(this.apiResult);
  }
}

