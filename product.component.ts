import { Component, Input, OnInit } from '@angular/core';
import Product from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
    'app-rating { color: orange; }'
  ]
  // styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: Product = {
    imageUrl: '',
    productName: '',
    releasedDate: new Date(1900,0,1),
    rating: 0,
    numOfReviews: 0,
    description: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
