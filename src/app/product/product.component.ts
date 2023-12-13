import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  name : string = "Product1";
  // description : string;
  // imageUrl : string;
  // price : string;

  // constructor(productName: string) {
  //   this.name = productName;
  //   // this.description = productDescription;
  //   // this.imageUrl = productImageUrl;
  //   // this.price = productPrice;
  // }
}
