import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-ng-for',
  templateUrl: './use-ng-for.component.html',
  styleUrls: ['./use-ng-for.component.css']
})
export class UseNgForComponent implements OnInit {

  superheroes = [
    new superHeroe("batman", "bruce", ["super", "otro"]),
    new superHeroe("nort", "trem", ["super", "otro"])
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class superHeroe {
  constructor(public name: string, public alterEgo: string, public superporwer: Array<String>) {
  }
  
}
