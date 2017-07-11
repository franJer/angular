import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-dom',
  templateUrl: './add-remove-dom.component.html',
  styleUrls: ['./add-remove-dom.component.css']
})
export class AddRemoveDomComponent implements OnInit {
  inDOM: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.inDOM = !this.inDOM;
  }
}
