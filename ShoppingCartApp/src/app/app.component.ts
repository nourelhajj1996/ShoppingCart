import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Product } from './Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ShoppingCartApp';

  imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png";

  public products = List<Product>([
    {
      id: '1',
      name: 'Product',
      description: 'This is the description section',
      price: 500,
      imageSrc: this.imageSrc,
      quantity: 1
    },
    {
      id: '2',
      name: 'Product',
      description: 'This is the description section',
      price: 170,
      imageSrc: this.imageSrc,
      quantity: 1
    },
    {
      id: '3',
      name: 'Product',
      description: 'This is the description section',
      price: 299,
      imageSrc: this.imageSrc,
      quantity: 1
    },
    {
      id: '4',
      name: 'Product',
      description: 'This is the description section',
      price: 200,
      imageSrc: this.imageSrc,
      quantity: 1
    },
    {
      id: '5',
      name: 'Product',
      description: 'This is the description section',
      price: 350,
      imageSrc: this.imageSrc,
      quantity: 1
    }
  ]);

  public productsInBasket = List<Product>();

  public showBasket = false;

  constructor() {}

  ngOnInit() {}

  public navigateToBasket() {
    this.showBasket = true;
  }

  public navigateToProductsList() {
    this.showBasket = false;
  }

  public addProductToBasket(product: Product) {
    this.productsInBasket = this.productsInBasket.push(product);
  }

  public removeProductFromBasket(productId: string) {
    const productIndex = this.productsInBasket.findIndex(product => product.id === productId);
    this.productsInBasket = this.productsInBasket.delete(productIndex);
  }
}
