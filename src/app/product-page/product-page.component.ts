import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {


  // trying with 1 line of code
  // testing : any = [...new Array(10)].map((x) => x = new ProductComponent() );


  // below works pretty well but one line of code is cooler
  // productArray : ProductComponent[] = [];
  // pc : ProductComponent = new ProductComponent;


  // arrayFiller(){
  //   for(let i = 0; i < 10; i++){
  //     console.log(this.pc.name);
  //     this.productArray.push(this.pc);
  //   }
  // }

  // constructor(){
  //   this.arrayFiller();
  //   console.log(this.testing);

  // }
}
