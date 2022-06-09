import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  searchTerm = "";
  searchedData?: data = undefined;

  ngOnInit() {}

  onChange(value: string | null) {
    this.searchedData = this.weatherData.find(
      ({ name }) => name.toLowerCase() === value.toLowerCase()
    );
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}