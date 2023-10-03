import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event
  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  OnSearchTextChanged() {
    this.SearchTextChanged.emit(this.searchText)
  }
  updateSearchText(inputEl: HTMLInputElement) {
    console.log(inputEl.value);

    // this.searchText = event.target.value;
    this.searchText = inputEl.value
    this.SearchTextChanged.emit(this.searchText)

  }





}
