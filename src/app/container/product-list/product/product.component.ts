import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: Product;
}
