import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Items } from '../../assets/items';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  items = Items;

}
