import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _resultSearch = new BehaviorSubject<any | null>(null);
  resultSearch = this._resultSearch.asObservable();
  private readonly _http = `https://timetable.search.ch/api/`;


  constructor(private http: HttpClient) {
    console.log('ApiService constructor');
   }

  async formTo(params: {from: string, to: string, date: string, time: string}): Promise<any> {
    const url = `${this._http}route.fr.json?from=${params.from}&to=${params.to}&date=${params.date}&time=${params.time}&limit=1`;
    const request = this.http.get<any>(url);
    const response = await firstValueFrom(request);
    return response;
  }



  async auto(term: string): Promise<any> {
    const url = `${this._http}completion.fr.json?query=${term}`;
    const request = this.http.get<any>(url);
    const response = await firstValueFrom(request);
    return response;
  }
}
