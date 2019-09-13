import { Component } from '@angular/core';
import { Product } from './models/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first App using Angular!';
  products = []

  constructor(){
    let product1 = new Product();
    product1.id = "1"
    product1.name = "Producto 1";
    product1.desc = "El producto 1"
    product1.price = 250
    

    console.log(product1);

    this.products.push(product1);
    this.products.push(product1);
    this.products.push(product1);

   
  }

}
