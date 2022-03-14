import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';



@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather;


  constructor(private weatherService: WeatherService) {

   }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Krakow', 'PL')
                .subscribe((data) => this.current = data)
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    if (n > 3 && n < 21)
      return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }

  }
}
