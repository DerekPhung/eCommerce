import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pot } from '../../assets/pot';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  name : string = Pot.name;
  price : number = Pot.price;
  description : string = Pot.description;
  image : string = Pot.picturePath;

  constructor(){
    this.name = Pot.name;
    this.price = Pot.price;
    this.description = Pot.description;
    this.image = Pot.picturePath;
  }
  seeArray() : string{
    return (this.name + "<br>" + 
            this.price +  "<br>" +
            this.description + "<br>" +
            `<img src = "${this.image}">`);
  }

  public seeHtml() : void{
    
  }

}
