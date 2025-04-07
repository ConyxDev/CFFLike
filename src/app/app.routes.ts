import { Routes } from '@angular/router';
import { HomeComponent } from './pages/search/home.component';
import { TimeComponent } from './pages/result/time.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'horaires',
        component: TimeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
