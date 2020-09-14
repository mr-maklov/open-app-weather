import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpenweatherApiService } from '../openweather-api.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private Apiservice: OpenweatherApiService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      city: [''],
    });
    this.weatherData = {
      main: {},
    };
  }
  // tslint:disable-next-line: typedef
  sendToOpenWeatherApi(formValues) {
    this.Apiservice.getWeather(formValues.city).subscribe((data) => {
      this.setweatherData(data);
    });
  }

  // tslint:disable-next-line: typedef
  setweatherData(data) {
    this.weatherData = data;

    this.weatherData.temp_celcius = (
      this.weatherData.main.temp - 273.15
    ).toFixed(0);
    this.weatherData.temp_min = (
      this.weatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.weatherData.temp_max = (
      this.weatherData.main.temp_max - 273.15
    ).toFixed(0);
  }
}
