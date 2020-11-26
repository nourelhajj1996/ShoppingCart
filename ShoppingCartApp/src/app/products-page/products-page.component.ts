import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from 'immutable';
import { Product } from '../Product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.sass']
})
export class ProductsPageComponent implements OnInit {

  @Input()
  products = List<Product>();

  @Output()
  addToProductsInBasket = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  public addProductToBasket(product: Product) {
    this.addToProductsInBasket.emit(product);
  }

}
