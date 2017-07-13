import { Component, OnInit } from '@angular/core';
import { RestcountriesService} from 'app/restcountries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  capital: string;
  constructor( private restcountriesService : RestcountriesService) { }

  ngOnInit() {
  }
  showCapital(countryName: string){
    this.restcountriesService.getCountry(countryName).subscribe(data => this.capital = data[0].capital);
  }
}
