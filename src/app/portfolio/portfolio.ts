import { Component } from '@angular/core';
import { Products } from '../products';
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  productImage: any = {};
  productList: Products[] = [
    { Images: ['poert1.png'] },
    { Images: ['port2.png'] },
    { Images: ['port3.png'] },
    { Images: ['poert1.png'] },
    { Images: ['port2.png'] },
    { Images: ['port3.png'] },
  ];
  showImage(text: Products) {
    this.productImage = text;
  }
}
