import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class containerComponent {
  listOfString: string[] = ['Waleed', 'Khalid', 'Saif', 'Yousef'];

  searchText: string = '';


  @ViewChild(ProductListComponent)
  ProductListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value;
  }
}
