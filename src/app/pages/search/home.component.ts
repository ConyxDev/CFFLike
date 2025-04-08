import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root, Connection, RootConnection, Point, Leg, Stop, Exit } from '../../interfaces';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { menuOutline, searchOutline, personOutline } from 'ionicons/icons';
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
  IonTabButton,
  IonSelect,
  IonSelectOption,
  IonList,
  IonCard,
  IonCardContent,
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
  IonTabButton,
  IonSelect,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonContent
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [provideIcons({
    menuOutline, searchOutline, personOutline
  })],
  imports: [
    ...UI_ELEMENTS,
    CommonModule,
    ReactiveFormsModule,
    NgIcon
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  selectedTab = 'horaire';

  form: FormGroup = new FormGroup({});
  itemsFrom: any[] = [];
  itemsTo: any[] = [];
  apiResult: RootConnection | null = null;
  connections: Connection[] = [];

  constructor(
    private _router: Router,
    private apiService: ApiService
  ) {
    addIcons({ calendarOutline, timeOutline });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
    });
  }

  async search() {
    if (!this.form.valid) return;
    const result = await this.apiService.formTo(this.form.value);
    this.apiResult = result;
    
    if (result && result.connections && result.connections.length > 0) {
      const firstConnection = result.connections[0];
      
      // Format YYYY-MM-DD pour le champ date
      const departureDate = firstConnection.departure.split(' ')[0];
      // Format HH:mm pour le champ time
      const departureTime = firstConnection.departure.split(' ')[1].substring(0, 5);
      
      this.form.patchValue({
        date: departureDate,
        time: departureTime
      });
      this.connections = result.connections;
    }
  }


  async auto(term: string) {
    const autoResult = await this.apiService.auto(term);
    this.apiResult = autoResult;
    console.log(this.apiResult);
  }



}

