import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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


  //1. Read: use it to read the different token from the queried elements.

  //2. Static: Determines when the query is resolved.

  //     True is when the view is initialized (before the first change detection) for the first time.

  //     False if you want it to be resolved after every change detection.

  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  OnSearchTextChanged() {

  }
  updateSearchText() {
    // this.searchText = event.target.value;
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText)

  }

}
