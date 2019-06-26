import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfiguration {
    public satellite = "https://api.wheretheiss.at/v1/satellites/25544";
    public astronaut = "http://api.open-notify.org/astros.json";
}