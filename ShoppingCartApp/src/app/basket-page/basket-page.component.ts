import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from 'immutable';
import { Product } from '../Product';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.sass']
})
export class BasketPageComponent implements OnInit {

  @Input()
  productsInBasket = List<Product>();

  @Output()
  removeProductFromBasket = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  public incrementQuantity(productId: string) {
    let product = this.productsInBasket.find(product => product.id === productId);
    product.quantity += 1;
  }

  public decrementQuantity(productId: string) {
    let product = this.productsInBasket.find(product => product.id === productId);
    product.quantity -= 1;
    
    if (product.quantity < 1) {
      this.removeFromBasket(product.id);
    }
  }

  public removeFromBasket(productId: string) {
    this.removeProductFromBasket.emit(productId);
  }

  public getTotalProductPrice(price: number, quantity: number) {
    return price * quantity;
  }

}
