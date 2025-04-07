import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _resultSearch = new BehaviorSubject(null);
  resultSearch = this._resultSearch.asObservable();


  constructor(private http: HttpClient) {
    console.log('ApiService constructor');
   }

  async formTo(data: {from: string, to: string}) {
    const url = `https://timetable.search.ch/api/route.fr.json?from=${data.from}&to=${data.to}&limit=1`;
    const request = this.http.get(url);
    const response = await firstValueFrom(request);
    return response;
  }



  async auto (term: string) {
    const url = `https://timetable.search.ch/api/completion.fr.json?query=${term}`;
    const request = this.http.get(url);
    const response = await firstValueFrom(request);
    return response;
  }
}
