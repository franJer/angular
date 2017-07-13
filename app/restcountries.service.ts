import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestcountriesService {
  BASEURI = "https://restcountries.eu/rest/v2";
  constructor( private http:Http) { }
  getCountry(countryName: string) : Observable<any>{
    return this.http.get(`${this.BASEURI}/name/${countryName}`).map((response) => response.json())
  }
}
