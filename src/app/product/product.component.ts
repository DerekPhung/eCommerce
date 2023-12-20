import { Component, Input, ViewEncapsulation } from '@angular/core';
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
  @Input() item: any;
}
