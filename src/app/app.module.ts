import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { allAppRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { OpenweatherApiService } from './openweather-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, WeatherComponent, CityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [OpenweatherApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
