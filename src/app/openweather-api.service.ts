import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OpenweatherApiService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '8de1eded3fe78fb64d25a59f2fcd48db';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  getWeather(city){
    const queryParams = `?q=${city}&appid=${this.apiKey}`;
    return this.http.get(this.url + queryParams);
  }
}
