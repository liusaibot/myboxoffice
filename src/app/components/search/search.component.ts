import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isDisplayed = false;

  toggleSearchBar(){
    this.isDisplayed = !this.isDisplayed
    if(this.isDisplayed){
      console.log("true");
    } else {
      console.log("false");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
