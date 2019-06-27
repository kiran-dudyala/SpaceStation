import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfiguration } from "../config/apiconfig";
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    
    constructor(private http: HttpClient, private configuration: ApiConfiguration) {
    }
    public GetIss<T>(): Observable<T> {
        return this.http.get<T>(this.configuration.satellite);
    }
    public GetAstronaut<T>(): Observable<T> {
        return this.http.get<T>(this.configuration.astronaut);
    }
}
